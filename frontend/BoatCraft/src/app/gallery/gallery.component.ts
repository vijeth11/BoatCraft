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

  constructor(private router: Router) { }

  ngOnInit() {
  }

  changeTheRoute(data:string){
    this.router.navigate([data]);
 }
}
