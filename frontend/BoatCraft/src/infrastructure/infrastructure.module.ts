import { PageHeaderComponent } from './page-header/page-header.component';
import { ImageGridComponent } from './image-grid/image-grid.component';
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
    CardComponent,
    ImageGridComponent,
    PageHeaderComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  exports:[ 
    CarouselComponent, 
    CarouselSlideDirective,
    CardComponent,
    ImageGridComponent,
    PageHeaderComponent,
  ]
})
export class InfrastructureModule { }
