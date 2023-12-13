import { Component,OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

  constructor(private CS:CartService){}

  cartQuantity=0;

  ngOnInit(): void {

    this.CS.getCartObservable().subscribe((newCart)=>{
      this.cartQuantity =newCart.totalCount;
    })
    
  }

}
