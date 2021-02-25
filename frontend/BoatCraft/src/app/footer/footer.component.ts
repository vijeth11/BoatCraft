import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  listNames:string[] = ["Service","Yatch","Designs","tests","test2"]
  careerNames:string[] = ["Sailor","Chef", "Boat Engineer"]
  listData:any[] = [];
  careerData:any[] = [];
  constructor() { 
    for(let i=0; i< this.listNames.length;i++) {
        this.listData.push({
          'name':this.listNames[i],
          'style':"calc(32% - "+ (i==0 ? "4" : "-"+(4 * 5 + (i-1) * 24 )) +"px)"
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

}
