import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Drop } from '../drop';
import { Votes } from '../votes';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  newQuote = new Votes(0, "", "","", 0, 0)
  @Output() addQuote = new EventEmitter<Votes>()

submitQuote(){
 this.addQuote.emit(this.newQuote)
}
  constructor() { }

  ngOnInit(): void {
  }

}
