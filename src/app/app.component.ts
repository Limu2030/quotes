import { Component, OnInit, } from "@angular/core";

interface Quote {
  quote: string;
  author: string;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent  {
  loading: boolean = true;
  quote!: Quote;
  quoteList!: Quote[];
  tweetURL!: string;
  
//   upvoteFunc(index){
//     var up=this.quotes[index].upvote+1;
//     this.quotes[index].upvote=up;
    
// }
//  downvoteFunc(index){
//     var down=this.quotes[index].downvote+1;
//     this.quotes[index].downvote=down;
  
// }
// deleteQuote(isDeleted,index){

//   if(isDeleted){
//     let remove=confirm(`Are you sure you want to delete this ${this.quotes[index].quote}?`)
//     if(remove){
//       this.quotes.splice(index,1)
//     }
//   }

// }

  getNewQuote: () => void = (): void => {
    const idx = Math.floor(Math.random() * this.quoteList.length);
    const newQuote = this.quoteList[idx];
    this.quote = newQuote;
  };

  constructor() {}

  ngOnInit() {
    this.fetchData();
  }

  async fetchData(): Promise<void> {
    const quotesURL =
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
    const response = await fetch(quotesURL);
    const quotes = await response.json();
    const idx = Math.floor(Math.random() * quotes.quotes.length);
    const newQuote = quotes.quotes[idx];
    this.quoteList = quotes.quotes;
    this.quote = newQuote;
    this.setTweetURL(newQuote);
    this.loading = false;
  }

  setTweetURL(quote: Quote): void {
    this.tweetURL = `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quote.quote} --${quote.author}`;
  }
}