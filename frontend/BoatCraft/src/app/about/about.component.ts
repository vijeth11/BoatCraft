import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public gallery = [];
  public title:string = 'About Us';
  public pathMap:string[] = ['Home', this.title];

  constructor(private router: Router) {
    window.scrollTo(0, 0);
    this.gallery = new Array(6).fill("./assets/small-yatch.jpeg");
    console.log(this.gallery);
   }

  ngOnInit() {
  }

  changeTheRoute(data:string){
    this.router.navigate([data]);
 }
}
