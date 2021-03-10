import { DataStoreService } from './../data-store.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-designs',
  templateUrl: './designs.component.html',
  styleUrls: ['./designs.component.css']
})
export class DesignsComponent implements OnInit {

  public title:string = 'Designs';
  public pathMap:string[] = ['Home', this.title];

  constructor(private router: Router, 
    private dataService:DataStoreService,
    private route: ActivatedRoute) {
      window.scrollTo(0, 0);
     }

  ngOnInit() {
  }

  changeTheRoute(data:string){
    this.router.navigate([data]);
  }

  redirect(id: number){
    this.router.navigate([id], { relativeTo: this.route });
  }
  getCards(){
    return this.dataService.getCardsData();
  }
  getCardImages(item:any){
    return this.dataService.getCardImages(item);
  }
}
