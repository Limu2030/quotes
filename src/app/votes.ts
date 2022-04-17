export class Votes {
    id: number;
    quote: string;
    upvotes: number;
    downvotes: number;
    constructor(id:number, quote: string, upvotes: number, downvotes:number){
        this.id = id;
        this.quote = quote;
        this.upvotes = upvotes;
        this.downvotes = downvotes;
    }
}
export class Drop {
    quote: string;
    author: number;
    name: string;
    constructor(quote:string, author:number, name:string){
        this.quote = quote;
        this.author = author;
        this.name = name;
    }
}