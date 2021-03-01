import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public gallery = [];
  constructor() {
    window.scrollTo(0, 0);
    this.gallery = new Array(Array(6).fill(1).length / 3).fill(1).map(_ => Array(6).fill(2).splice(0,3));
    console.log(this.gallery);
   }

  ngOnInit() {
  }

}
