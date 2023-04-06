import { Component } from '@angular/core';
// import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent {
  itemsPerSlide = 3;
  singleSlideOffset = false;
  noWrap = false;

  slidesChangeMessage = '';

  slides = [
    {
      image: '../../../assets/img/our-client/1.png',
    },
    {
      image: '../../../assets/img/our-client/2.png',
    },
    {
      image: '../../../assets/img/our-client/3.png',
    },
  ];

  onSlideRangeChange(indexes: number[] | void): void {
    this.slidesChangeMessage = `Slides have been switched: ${indexes}`;
  }
}
