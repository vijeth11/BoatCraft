import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    subject: new FormControl(''),
    message: new FormControl('')
  });
  public title:string = 'Contact Us';
  public pathMap:string[] = ['Home', this.title];

  constructor(private router:Router) {
    window.scrollTo(0, 0);
   }

  ngOnInit() {
  }
  
  onSubmit(){
    console.log(this.contactForm);
  }

  changeTheRoute(data:string){
    this.router.navigate([data]);
 }
}
