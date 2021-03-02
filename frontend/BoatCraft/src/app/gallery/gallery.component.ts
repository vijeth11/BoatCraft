import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  public title:string = 'Photos';
  public pathMap:string[] = ['Home', this.title];
  public gallery:string[] = new Array(15).fill("./assets/small-yatch.jpeg");

  constructor(private router: Router) { }

  ngOnInit() {
  }

  changeTheRoute(data:string){
    this.router.navigate([data]);
 }
}
