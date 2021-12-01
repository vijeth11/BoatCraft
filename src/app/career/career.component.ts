import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {

  careerForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    careerselected: new FormControl(''),
    about: new FormControl(''),
    resume: new FormControl('')
  });

  public careers: string[] = ["Helpers","Machanics","Electicians","Spray Painters","Interior Designers"];
  constructor() { 
    window.scrollTo(0,0);
  }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.careerForm);
  }
}
