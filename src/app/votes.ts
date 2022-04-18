export class Votes {
    id: number;
    author: string;
    name: string
    quote: string;
    upvotes: number;
    downvotes: number;
    constructor(id:number, author: string, name: string,quote: string, upvotes: number, downvotes:number){
        this.id = id;
        this.author = author;
        this.name = name;
        this.quote = quote;
        this.upvotes = upvotes;
        this.downvotes = downvotes;
    }
}
