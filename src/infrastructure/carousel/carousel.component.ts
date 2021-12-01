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
  @Input() autoScroll:boolean = false; 
  @Output() changeUrl:EventEmitter<string>= new EventEmitter<string>();
  
  private currentSlide:number = 0;
  private previouSlide: number = 0;
  private scrollInterval;
  private previousSetTimeOut;
  constructor() { }
  
  @ContentChildren(CarouselSlideDirective) slides:QueryList<CarouselSlideDirective>;
  
  ngOnInit() {

  }

  ngAfterContentInit(): void {
   this.slides.first.setDisplay(true);
   if(this.autoScroll){
     this.startAutoSCroll();
   }
  }

  startAutoSCroll(){
    this.scrollInterval = setInterval(() => {
      this.onNextClick(false);
    },5000);
  }

  stopAndRestartScroll(){
    if(this.scrollInterval){
      clearInterval(this.scrollInterval);
    }
    if(this.previousSetTimeOut){
      clearTimeout(this.previousSetTimeOut);
    }
    if(this.autoScroll){
      this.previousSetTimeOut = setTimeout(() => {
        this.startAutoSCroll();
      },10000);
    }
  }
  onPreviousClick(manualClick:boolean) {
    this.previouSlide = this.currentSlide;
    this.currentSlide = (this.previouSlide - 1) < 0 ? this.slides.length - 1 : this.previouSlide - 1;
    this.displayCurrentSlide();
    if(manualClick){
      this.stopAndRestartScroll();
    }
  }

  onNextClick(manualClick:boolean) {
    this.previouSlide = this.currentSlide;
    this.currentSlide = (this.previouSlide + 1) === this.slides.length ? 0 : this.previouSlide + 1;
    this.displayCurrentSlide();
    if(manualClick){
      this.stopAndRestartScroll();
    }
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
