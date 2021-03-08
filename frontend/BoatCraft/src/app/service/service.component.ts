import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  public title:string = 'Services';
  public pathMap:string[] = ['Home', this.title];

  constructor(private router: Router) {
    window.scrollTo(0, 0); 
  }

  ngOnInit() {
  }
  
  changeTheRoute(data:string){
    this.router.navigate([data]);
  }

  redirect(data:string){
    
  }
}
