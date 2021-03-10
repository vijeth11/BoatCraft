import { DataStoreService } from './../data-store.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-design-detail',
  templateUrl: './design-detail.component.html',
  styleUrls: ['./design-detail.component.css']
})
export class DesignDetailComponent implements OnInit {

  title:string = "";
  path:string[] = ["Home", "Designs"]
  id:string = "";
  card:any;
  cardSpecs:any;
  imageSlides:string[]=[];
  constructor(private route:ActivatedRoute, private dataService:DataStoreService, private router: Router) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.card = this.dataService.getCardDetailById(this.id);
    if(this.card){
      this.title = "Super Yacht";
      this.path.push(this.title);
      if(this.card["specs"].length % 4 == 0){
        this.cardSpecs = new Array(this.card["specs"].length / 4).fill(1).map(_ => Array(this.card["specs"].length).fill(2).splice(0,4));
      }else{
        let module_param = this.card["specs"].length % 4;
        this.cardSpecs = new Array((this.card["specs"].length - module_param) / 4).fill(1).map(_ => Array(this.card["specs"].length-module_param).fill(2).splice(0,4));
        this.cardSpecs.push(new Array(module_param).fill(2));
      }    
      this.imageSlides = this.dataService.getCardImages(this.card);
    }
    window.scrollTo(0, 0);
   }

  ngOnInit() {
  }

  changeTheRoute(data:string){
    this.router.navigate([data]);
  }

  getPropertyName(data, i, j){
    return Object.keys(data[i*4+j])[0]
  }

  getPropertyValue(data ,i,j){
    return data[i*4+j][Object.keys(data[i*4+j])[0]]
  }
}
