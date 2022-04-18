


import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Votes } from '../votes';


@Component({
  selector: "app-quote-box",
  templateUrl: "./quote-box.component.html",
  styleUrls: ["./quote-box.component.css"],
})
export class QuoteBoxComponent implements OnInit {
  @Input() author!: string;
  @Input() rquote!: Votes;
  @Input() vote!: string;
  @Input() tweetURL!: string;
  @Input() getNewQuote!: () => void;
  // @Input() quoty: Votes;
  @Output() isRead = new EventEmitter<boolean>();
  deleteQuote(read:boolean){
    this.isRead.emit(read);
  }
  
  constructor() { }

  ngOnInit() {
  }

  quotes: Votes[] = [
    {id: 1, author: 'John Baptist', name: 'Chris', quote: 'the one who will come after me will be greater', upvotes: 0, downvotes: 0},
    {id: 2, author: 'Nelson Mandela', name: 'Bancy', quote: 'it always seem impossible until it is done', upvotes: 0, downvotes: 0},
    {id: 3, author: 'Sam G', name: 'Gabriel', quote: 'only a fool thinks it cannot be done', upvotes: 0, downvotes: 0},
    {id: 4, author: 'Walt Disney', name: 'Lillian', quote: 'the only way to start is to quit talking and begin doing', upvotes: 0, downvotes: 0},
  ]

  addNewQuote(quote: Votes){
    let len = this.quotes.length
    quote.id = len + 1
    this.quotes.push(quote)
    console.log(this.quotes)
  }

}




