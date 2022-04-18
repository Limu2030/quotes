import { Component, Input, OnInit } from '@angular/core';
import { Votes } from '../votes';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {
  @Input() quote!: Votes

  constructor() { }

  ngOnInit(): void {
  }

  upvote(){
    this.quote.upvotes++;
    
  }
  downvote(){
    this.quote.downvotes++;
  }

}
