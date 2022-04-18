


import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


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
  // upvote(){
  //   this.quote.like += 1;
  // }
  // downvote(){
  //   this.quote.dislike += 1;
  // }
  constructor() { }

  ngOnInit() {
  }

}



//   quotes: Votes[] = [
//     new Votes(1, 'first quote', 0, 0),
//     new Votes(2, 'second quote', 0, 0),
//     new Votes(3, 'third quote', 0, 0),
//   ]
//   constructor() {}
// }
