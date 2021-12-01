import { DataStoreService } from './../data-store.service';
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
  public gallery:string[] = [];

  constructor(private router: Router, private dataService:DataStoreService) { 
    window.scrollTo(0, 0);
    this.gallery = this.dataService.getPhotosForGallery();
  }

  ngOnInit() {
  }

  changeTheRoute(data:string){
    this.router.navigate([data]);
 }
}
