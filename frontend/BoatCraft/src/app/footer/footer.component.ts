import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataStoreService } from '../data-store.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  listNames:string[] = ["Services","Designs","Photos"]
  careerNames:string[] = ["Helpers","Machanics", "Electricians","Spray Painters","Interior Designers"]
  listData:any[] = [];
  careerData:any[] = [];
  aboutPara:string=""
  constructor(private dataService:DataStoreService,private router:Router) { 
    this.aboutPara = this.dataService.getAbout()[0].substr(0,320)+"...";
    for(let i=0; i< this.listNames.length;i++) {
        this.listData.push({
          'name':this.listNames[i],
          'style':"calc(32% - "+ (i==0 ? "4" : "-"+(4 * 5 + (i-1) * 24 )) +"px)",
          'url': this.listNames[i].toLowerCase()
        });
    }
    for(let i=0; i< this.careerNames.length;i++) {
      this.careerData.push({
        'name':this.careerNames[i],
        'style':"calc(32% - "+ (i==0 ? "4" : "-"+(4 * 5 + (i-1) * 24 )) +"px)"
      });
    }
  }

  ngOnInit() {
  }

  redirect(url:string){
    this.router.navigate([url]);
  }
}
