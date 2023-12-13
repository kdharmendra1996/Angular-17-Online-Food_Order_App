import { Injectable ,OnInit} from '@angular/core';
import { Carts } from '../shared/carts';
import { BehaviorSubject, Observable } from 'rxjs';
import { Food } from '../shared/food';
import { CartItem } from '../shared/cartsItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart:Carts=new Carts();
  cartSubject:BehaviorSubject<Carts>=new BehaviorSubject(this.cart)

  constructor() { }

  addToCart(food:Food):void{
    let cartItems = this.cart.Cartitems.find(item=>item.foods.id === food.id)
    if(cartItems)
    return;

    this.cart.Cartitems.push(new CartItem(food));
    this.setCartToLocalStorage();
  }

  removeFromCart(foodId:number):void{
    this.cart.Cartitems=this.cart.Cartitems.filter(item=> item.foods.id != foodId)
    this.setCartToLocalStorage();
  }

  changeQuantity(quantity:number,foodId:number){
    let cartItem = this.cart.Cartitems.find(item=>item.foods.id === foodId);
    if(!cartItem)
    return;

    cartItem.quantity = quantity;
    cartItem.price  = quantity*cartItem.foods.price;
    this.setCartToLocalStorage();
  }

  clearCart(){
    this.cart = new Carts();
    this.setCartToLocalStorage();
  }
  
  //get cart observable mean check observable data
  getCartObservable():Observable<Carts>{
    return this.cartSubject.asObservable();
  }

  //now set LocalStroage data
  private setCartToLocalStorage():void{
    this.cart.totalPrice = this.cart.Cartitems.reduce((prevSum,currentItem)=>
    prevSum + currentItem.price,0)
    this.cart.totalCount  = this.cart.Cartitems.reduce((prevSum,currentItem)=>
    prevSum + currentItem.quantity,0)


    const  cartJson = JSON.stringify(this.cart);
    localStorage.setItem('Cart',cartJson);
    this.cartSubject.next(this.cart);

  }
  //when ever set local storage data then also get data

  private getCartFromLocalstorage():Carts{
    const cartJson = localStorage.getItem('Cart');
    return cartJson?JSON.parse(cartJson):new Carts();  
  }

}