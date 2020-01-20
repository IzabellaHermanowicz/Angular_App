import { Component, OnInit } from '@angular/core';
import { IGallery } from '../../../interface/IGalleries';
import { Galleries } from '../../../constants/galleries.constant';

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


  constructor() {}

  ngOnInit() {
    this.title = 'Moje podróże';
    this.description = 'Gdzie, kiedy i czemu mnie tam wywiało';
    this.galleries = Galleries;
    this.searchValue = '';
  }

  setSearchValue($event){
    this.searchValue = $event;
  }

}
