import { Component, Input } from '@angular/core';

@Component({
    selector: "image-grid",
    templateUrl:"./image-grid.component.html",
    styleUrls:["./image-grid.component.css"]
})

export class ImageGridComponent{

    private _images:string[]=[]
    gallery:number[][] = [];
    
    @Input() columns:number;
    @Input() set images(values){
        this._images = values;
        this.gallery = new Array(this._images.length / this.columns).fill(1).map(_ => Array(this._images.length).fill(2).splice(0,this.columns));
    };
    get images() {
        return this. _images;
    }
    

    constructor(){
        //this.gallery = new Array(this.images.length / this.columns).fill(1).map(_ => Array(this.images.length).fill(2).splice(0,this.columns));
    }

    getImageUrl(i:number,j:number):string{
        if(this.images && this.columns){
            return this.images[i*this.columns+j];
        }
    }
}