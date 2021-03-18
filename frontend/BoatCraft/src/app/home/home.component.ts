import { DataStoreService } from './../data-store.service';
import { Component, OnInit, HostListener, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import * as CssClassNames from '../models/classconstants';
import * as AnimationConstants from '../models/animationsconstants';
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
  private elementsHidden:string[] = [CssClassNames.AboutUsBlock, CssClassNames.AboutUsBlockImage, 
    CssClassNames.YatchSection, CssClassNames.MessageSection, CssClassNames.PhotoGallerySection, CssClassNames.OwnerDetails];
  constructor(private router:Router, private dataService:DataStoreService, private el:ElementRef, private renderer:Renderer2) {
    
    this.gallery = new Array(8).fill("./assets/small-yatch.jpeg");
    console.log(this.gallery);
    this.aboutPara = this.dataService.getAbout()[0];
   }

   @HostListener('window:scroll', ['$event']) 
   onScroll(event){
    let elements = Object.assign([], this.elementsHidden);
    elements.forEach((className) => {
      if(this.isElementInViewPort(className)){
        let ele = this.el.nativeElement.getElementsByClassName(className)[0];
        ele.style.visibility="visible";
        switch(className){
          case CssClassNames.AboutUsBlock:
                this.renderer.addClass(ele,AnimationConstants.FadeInLeft);
                break;
          case CssClassNames.AboutUsBlockImage:
                this.renderer.addClass(ele,AnimationConstants.FadeInRight);
                break;
          case CssClassNames.YatchSection:
          case CssClassNames.MessageSection:
                this.renderer.addClass(ele,AnimationConstants.FadeInUp);
                break;
          case CssClassNames.PhotoGallerySection:
                this.renderer.addClass(ele,AnimationConstants.FadeIn);
                break;
          case CssClassNames.OwnerDetails:
              this.renderer.addClass(ele, AnimationConstants.FadeInDown);
              break;
        }
        this.elementsHidden.splice(this.elementsHidden.indexOf(className),1);
      }
    });
    console.log(this.elementsHidden);
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

  getPhotos(){
    return this.dataService.getPhotosForHome()
  }

  private isElementInViewPort(className:string){
    let element = this.el.nativeElement.getElementsByClassName(className).length > 0 ? this.el.nativeElement.getElementsByClassName(className)[0]: undefined;
    if(element){
      return element.getBoundingClientRect().top <= (document.documentElement.clientHeight / 2);
    }
    return false;
  }
}
