import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector:'page-header',
    templateUrl:'./page-header.component.html',
    styleUrls:['./page-header.component.css']
})

export class PageHeaderComponent{

    @Input() title:string;
    @Input() pathMap:string[];
    @Output() pathSelected:EventEmitter<string> = new EventEmitter<string>();
    constructor() { 

    }

    onPathClick(path:string){
        this.pathSelected.emit(path.toLowerCase());
    }
}