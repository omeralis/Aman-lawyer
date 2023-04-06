import { ViewportScroller } from '@angular/common';
import { Component , HostListener } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(private viewportScroller: ViewportScroller) {}
 
  @HostListener('window:scroll', ['$event']) 
  // scrollToElement(element: any): void {
  //   element.scrollIntoView({ behavior: 'smooth', inline: 'nearest' });
  // }
    public scroll(elementId: any): void {
      this.viewportScroller.scrollToAnchor(elementId)
    }
}
