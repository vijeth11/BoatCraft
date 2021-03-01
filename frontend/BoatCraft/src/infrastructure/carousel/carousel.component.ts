import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AfterContentInit, ContentChildren, QueryList} from '@angular/core';
import { CarouselSlideDirective } from '../carousel-slide/carousel-slide.directive';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],  
  animations:[
   trigger("fadeInTitle",[
     transition("void => *",[
       style({opacity:0}),
       animate('1s 1s',style({opacity:"*"}))
     ])
   ])
  ]
})
export class CarouselComponent implements OnInit, AfterContentInit {

 
  @Input() displayCaption:boolean = false;
  @Input() title:string;
  @Input() discription:string;
  @Output() changeUrl:EventEmitter<string>= new EventEmitter<string>();
  
  private currentSlide:number = 0;
  private previouSlide: number = 0;
  constructor() { }
  
  @ContentChildren(CarouselSlideDirective) slides:QueryList<CarouselSlideDirective>;
  
  ngOnInit() {

  }

  ngAfterContentInit(): void {
   this.slides.first.setDisplay(true);
  }

  onPreviousClick() {
    this.previouSlide = this.currentSlide;
    this.currentSlide = (this.previouSlide - 1) < 0 ? this.slides.length - 1 : this.previouSlide - 1;
    console.log("previous clicked, new current slide is: ", this.currentSlide);
    this.displayCurrentSlide();
  }

  onNextClick() {
    this.previouSlide = this.currentSlide;
    this.currentSlide = (this.previouSlide + 1) === this.slides.length ? 0 : this.previouSlide + 1;
    console.log("next clicked, new current slide is: ", this.currentSlide);
    this.displayCurrentSlide();
  }

  displayCurrentSlide():void{
    const slides = this.slides.toArray()
    if(this.previouSlide >= 0){
      slides[this.previouSlide].setDisplay(false);
    }else if(this.previouSlide < 0){
      this.slides.last.setDisplay(false);
    }else if(this.previouSlide === this.slides.length){
      this.slides.first.setDisplay(false);
    }

    if(slides[this.currentSlide]){
      slides[this.currentSlide].setDisplay(true);
    }

    if(this.displayCaption){
      this.displayCaption= false;
      setTimeout(()=>{
        this.displayCaption=true;
      },0);
    }
  }

  reRoute(routeData:string){
    this.changeUrl.emit(routeData);
  }
}
