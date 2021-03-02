import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-designs',
  templateUrl: './designs.component.html',
  styleUrls: ['./designs.component.css']
})
export class DesignsComponent implements OnInit {

  public title:string = 'Designs';
  public pathMap:string[] = ['Home', this.title];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  changeTheRoute(data:string){
    this.router.navigate([data]);
 }
}
