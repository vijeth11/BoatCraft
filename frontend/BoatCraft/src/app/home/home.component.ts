import { DataStoreService } from './../data-store.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public title:string  = "Boat Craft"
  public discription:string="Building Boats is Passion & Pleasure to Our Enduring Commitment & Quality"
  public slides = [
    { src: "./assets/home/boat-craft-bc-65-scaled.jpg" },
    { src: "./assets/home/boat-craft-2-bc-65-scaled.jpg" },
    { src: "./assets/home/boat-craft-3-bc-65-scaled.jpg" }
  ];
  public cards = [];
  public gallery = [];
  public aboutPara:string="";
  constructor(private router:Router, private dataService:DataStoreService) {
    
    this.gallery = new Array(8).fill("./assets/small-yatch.jpeg");
    console.log(this.gallery);
    this.aboutPara = this.dataService.getAbout()[0];
   }

   changeTheRoute(data:string){
      this.router.navigate([data]);
   }

   getCards(){
     return this.dataService.getCardsforHome();
   }

   getSlides(){
     return this.dataService.getSlideImages();
   }
   
  ngOnInit() {
  }
  
  getCardImages(item:any){
    return this.dataService.getCardImages(item);
  }
  
  redirectCard(id:string){
    this.router.navigate(['designs',id]);
  }
}
