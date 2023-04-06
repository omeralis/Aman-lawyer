import { Component } from '@angular/core';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent {
  itemsPerSlide = 3;
  singleSlideOffset = false;
  noWrap = false;

  slidesChangeMessage = '';

  slides = [
    {
      image: '../../../assets/img/stories/1.png',
      title: 'TITLE HERE',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit'
    },
    {
      image: '../../../assets/img/stories/1.png',
      title: 'TITLE HERE',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit'
    },
    {
      image: '../../../assets/img/stories/1.png',
      title: 'TITLE HERE',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit'
    },
    {
      image: '../../../assets/img/stories/1.png',
      title: 'TITLE HERE',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit'
    },
    {
      image: '../../../assets/img/stories/1.png',
      title: 'TITLE HERE',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit'
    },
    {
      image: '../../../assets/img/stories/1.png',
      title: 'TITLE HERE',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit'
    }
  ];

  onSlideRangeChange(indexes: number[] | void): void {
    this.slidesChangeMessage = `Slides have been switched: ${indexes}`;
  }
}
