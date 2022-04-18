import { Component, OnInit } from '@angular/core';
import { Drop } from '../drop';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  drop!:Drop
  

submitQuote(){

}
  constructor() { }

  ngOnInit(): void {
  }

}
