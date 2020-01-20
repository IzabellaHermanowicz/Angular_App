import { Component, Input, OnInit } from '@angular/core';
import { IGallery } from 'src/app/interface/IGalleries';

@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.scss']
})
export class GalleryItemComponent implements OnInit {

  @Input() gallery: IGallery;

  constructor() { }

  ngOnInit() {
    console.log(this.gallery);
  }

}
