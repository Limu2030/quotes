


import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Votes } from '../votes';


@Component({
  selector: "app-quote-box",
  templateUrl: "./quote-box.component.html",
  styleUrls: ["./quote-box.component.css"],
})
export class QuoteBoxComponent implements OnInit {
  @Input() author!: string;
  @Input() quote!: string;
  @Input() tweetURL!: string;
  @Input() getNewQuote!: () => void;
  // @Input() quoty: Votes;
  @Output() isRead = new EventEmitter<boolean>();
  deleteQuote(read:boolean){
    this.isRead.emit(read);
  }
  upvote(){
    this.quote.upvote += 1;
  }
  downvote(){
    this.quote.downvote += 1;
  }
  constructor() { }

  ngOnInit() {
  }

  quotes: Votes[] = [
    {id: 1, author: 'John Baptist', name: 'Chris', quote: 'the one who will come after me will be greater', upvotes: 0, downvotes: 0},
    {id: 1, author: 'John Baptist', name: 'Chris', quote: 'the one who will come after me will be greater', upvotes: 0, downvotes: 0},
    {id: 1, author: 'John Baptist', name: 'Chris', quote: 'the one who will come after me will be greater', upvotes: 0, downvotes: 0},
    {id: 1, author: 'John Baptist', name: 'Chris', quote: 'the one who will come after me will be greater', upvotes: 0, downvotes: 0},
  ]


  addNewQuote(quote: Votes){
    let len = this.quotes.length
    quote.id = len + 1
    this.quotes.push(quote)
    console.log(this.quotes)
  }

}



//   quotes: Votes[] = [
//     new Votes(1, 'first quote', 0, 0),
//     new Votes(2, 'second quote', 0, 0),
//     new Votes(3, 'third quote', 0, 0),
//   ]
//   constructor() {}
// }
