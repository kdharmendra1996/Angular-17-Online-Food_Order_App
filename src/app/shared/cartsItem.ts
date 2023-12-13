import { Food } from "./food";

export class CartItem{
    constructor(public foods:Food){ }

    quantity:number=1;
    price:number=this.foods.price
}