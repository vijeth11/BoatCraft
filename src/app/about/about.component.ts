import { DataStoreService } from './../data-store.service';
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
  public aboutPara:string[] = [];
  public imagesWidth:string = '11rem';
  public imagesHeight:string = '11rem';
  constructor(private router: Router, private dataService:DataStoreService) {
    window.scrollTo(0, 0);
    console.log(document.documentElement.clientWidth);
    if(document.documentElement.clientWidth <= 500){
      this.imagesWidth = "100%";
      this.imagesHeight = "28rem";
    }
    this.gallery = this.dataService.getPhotosForAbout();
    this.aboutPara = this.dataService.getAbout();
   }


  ngOnInit() {
  }

  changeTheRoute(data:string){
    this.router.navigate([data]);
 }
}
