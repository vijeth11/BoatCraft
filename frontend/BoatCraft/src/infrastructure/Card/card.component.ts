import { Component, Input, Output, EventEmitter, HostListener, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],  
})

export class CardComponent implements AfterViewInit {

@Input() title:string = "";
@Input() speed:string;
@Input() length:string;
@Input() name:string;
@Input() id:number;
@Input() index:number = 0;
@Input() displayDefaultContent:boolean = true;
@Input() displayButton:boolean = false;
@Input() width:number = 240;
@Input() images:string[]=[];
@Output() reDirect: EventEmitter<number> = new EventEmitter<number>()

constructor(private el: ElementRef,private renderer:Renderer2){

}

ngAfterViewInit(){
  if(this.displayButton){
    this.onScroll(null);
  }
}

onReDirect(){
  this.reDirect.emit(this.id);  
}

@HostListener("window:scroll",['$event'])
onScroll(event){
  let element = this.el.nativeElement.getElementsByClassName("Yatch-card").length > 0 ? this.el.nativeElement.getElementsByClassName("Yatch-card")[0]: undefined;
  if(element){
    if(element.getBoundingClientRect().top <= ((document.documentElement.clientHeight <= 500 ? (document.documentElement.clientHeight/ 4)*3 : (document.documentElement.clientHeight/ 7)*6))){
      setTimeout(() => {
        element.style.visibility="visible";
        this.renderer.addClass(element,'fade-in-Up');
      },this.index * 500);      
    }
  }    
}
}