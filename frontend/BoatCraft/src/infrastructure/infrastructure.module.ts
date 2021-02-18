import { CardComponent } from './Card/card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CarouselSlideDirective } from './carousel-slide/carousel-slide.directive';

@NgModule({
  declarations: [
    CarouselComponent, 
    CarouselSlideDirective,
    CardComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  exports:[ 
    CarouselComponent, 
    CarouselSlideDirective,
    CardComponent
  ]
})
export class InfrastructureModule { }
