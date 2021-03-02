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
  constructor(private router:Router) {
    for(let i = 0; i < 4; i++){
      this.cards.push({
        "name": "Super",
        "price": "50,000",
        "berth": "20",
        "title": "Super-yatch"
      });
    }
    this.gallery = new Array(8).fill("./assets/small-yatch.jpeg");
    console.log(this.gallery);
   }

   changeTheRoute(data:string){
      this.router.navigate([data]);
   }
  ngOnInit() {
  }

  
}
