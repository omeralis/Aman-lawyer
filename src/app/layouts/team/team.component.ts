import { Component } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {
  test:boolean = true;
  checkedPrv1 : boolean = true;
  checkedPrv2 : boolean = false;
  checkedPrv3 : boolean = false;
  item1 = "item1";
  item2 = "item2";
  item3 = "item3";
  song1 = "song1";
  song2 = "song2";
  song3 = "song3";
  toggleNext(){
    // debugger
    if (this.checkedPrv1 == true) {
      this.checkedPrv1 =false;
      this.checkedPrv2 =true;
      this.checkedPrv3 =false;
      // this.item1 = this.song3;
    }
    else if (this.checkedPrv2== true) {
      this.checkedPrv1 =false;
      this.checkedPrv2 =false;
      this.checkedPrv3 =true;
      // this.item1 = this.song3;
    }
    else if (this.checkedPrv3== true) {
      this.checkedPrv1 =true;
      this.checkedPrv2 =false;
      this.checkedPrv3 =false;
      // this.item1 = this.song3;
    }
    console.log('this.checkedPrv1' , this.checkedPrv1);
    console.log('this.checkedPrv2' , this.checkedPrv2);
    console.log('this.checkedPrv3' , this.checkedPrv3);
  // this.test =!this.test;
}

togglePrv(){
  // debugger
  if (this.checkedPrv1 == true) {
    this.checkedPrv1 =false;
    this.checkedPrv2 =false;
    this.checkedPrv3 =true;
    // this.item1 = this.song3;
  }
  else if (this.checkedPrv2== true) {
    this.checkedPrv1 =true;
    this.checkedPrv2 =false;
    this.checkedPrv3 =false;
    // this.item1 = this.song3;
  }
  else if (this.checkedPrv3== true) {
    this.checkedPrv1 =false;
    this.checkedPrv2 =true;
    this.checkedPrv3 =false;
    // this.item1 = this.song3;
  }
  console.log('this.checkedPrv1' , this.checkedPrv1);
  console.log('this.checkedPrv2' , this.checkedPrv2);
  console.log('this.checkedPrv3' , this.checkedPrv3);
// this.test =!this.test;
}

}
