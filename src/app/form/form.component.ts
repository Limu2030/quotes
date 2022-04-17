import { Component, OnInit } from '@angular/core';
import { Meals } from '../votes';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  meal!:Meals
  

submitFood(){

}
  constructor() { }

  ngOnInit(): void {
  }

}
