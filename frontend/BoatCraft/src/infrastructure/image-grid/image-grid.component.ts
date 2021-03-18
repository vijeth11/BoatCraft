import { style } from '@angular/animations';
import { Component, Input, AfterViewInit, HostListener } from '@angular/core';

@Component({
    selector: "image-grid",
    templateUrl:"./image-grid.component.html",
    styleUrls:["./image-grid.component.css"]
})

export class ImageGridComponent implements AfterViewInit{

    private _images:string[]=[];
    gallery:number[][] = [];
    
    @Input() columns:number = 3;
    @Input() set images(values){
        this._images = values;
        if(this._images.length % this.columns == 0){
            this.gallery = new Array(this._images.length / this.columns).fill(1).map(_ => Array(this._images.length).fill(2).splice(0,this.columns));
        }else{
            let module_param = this._images.length % this.columns;
            this.gallery = new Array((this._images.length - module_param) / this.columns).fill(1).map(_ => Array(this._images.length-module_param).fill(2).splice(0,this.columns));
            this.gallery.push(new Array(module_param).fill(2));
        }
    };

    @Input() imageHeight:string="";
    @Input() imageWidth:string="";
    get images() {
        return this. _images;
    }
    
    public modalImage:string = "";
    public modalVisible:boolean = false;
    constructor(){
        //this.gallery = new Array(this.images.length / this.columns).fill(1).map(_ => Array(this.images.length).fill(2).splice(0,this.columns));
    }


    @HostListener('click',['$event'])
    outsideClick(event:any){
       if(event.target.className != "modal-content" 
       && event.target.className != "modal-image" 
       && this.modalVisible){
           this.closeButton();
       }
    }

    ngAfterViewInit(){
        
    }
    getImageUrl(i:number,j:number):string{
        if(this.images && this.columns){
            return this.images[i*this.columns+j];
        }
    }

    openImage(i:number,j:number){        
        this.modalImage = this.getImageUrl(i,j);
        setTimeout(()=>{
            this.modalVisible = true; 
        },0);               
    }

    closeButton(){
        this.modalImage = "";
        this.modalVisible = false;
    }
}