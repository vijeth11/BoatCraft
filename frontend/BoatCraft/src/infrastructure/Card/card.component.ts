import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],  
})

export class CardComponent {

@Input() title:string = "";
@Input() price:string;
@Input() berth:string;
@Input() name:string;
@Input() id:number;
@Input() displayDefaultContent:boolean = true;
@Input() displayButton:boolean = false;
@Output() reDirect: EventEmitter<number> = new EventEmitter<number>()

onReDirect(){
  this.reDirect.emit(this.id);  
}
}