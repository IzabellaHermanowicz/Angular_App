import { Component, OnInit } from '@angular/core';
import { IGallery } from '../../../interface/IGallery';
import { Galleries } from '../../../constants/galleries.constant';
import { HttpClient, HttpHeaders} from '@angular/common/http';

//{"id":89}

@Component({
  selector: 'app-galleries',
  templateUrl: './galleries.component.html',
  styleUrls: ['./galleries.component.scss']
})
export class GalleriesComponent implements OnInit {

  title: string;
  description: string;
  galleries: IGallery[];
  searchValue: string;

  httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json','Authorization': '{"id":89}'})};

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.title = 'Moje podróże';
    this.description = 'Gdzie, kiedy i czemu mnie tam wywiało';
    this.galleries = Galleries;
    this.searchValue = '';
  }

  setSearchValue($event){
    this.searchValue = $event
  }

  exportGalleries() {
    Galleries.forEach((gallery: IGallery)=> {
      delete(gallery.galleryId);
      
      this.http.post('http://project.usagi.pl/gallery', gallery, 
      this.httpOptions).toPromise().then((response: IGallery) => {
        console.log('success', response);
        this.galleries.push(response);
      }, (errResponse) => {
        console.log('error', errResponse);
      });
    });
  }

}
