import { Component,OnInit } from '@angular/core';
import { Carts } from '../../shared/carts';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../shared/cartsItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent implements OnInit{

  constructor(private cartService:CartService){}
  dataCart!:Carts;

  ngOnInit(): void {

    this.cartService.getCartObservable().subscribe((data)=>{
      this.dataCart  = data;
    })
    
  }

  removeCarBtn(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.foods.id)
  }

  changeQuantity(cartItem:CartItem,quantityString:string){
    const quantity = parseInt(quantityString);
    this.cartService.changeQuantity(cartItem.foods.id,quantity);
  }
}
