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
export class Meals {
    name: string;
    calories: number;
    description: string;
    constructor(name:string, calories:number, description:string){
        this.name = name;
        this.calories = calories;
        this.description = description;
    }
}