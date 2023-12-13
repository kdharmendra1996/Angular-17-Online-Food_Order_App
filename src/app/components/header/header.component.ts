import { Component,OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { UserService } from '../../services/user.service';
import { User } from '../../shared/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

  constructor(private CS:CartService,private userService:UserService){}

  cartQuantity=0;
  user!:User

  ngOnInit(): void {

    this.CS.getCartObservable().subscribe((newCart)=>{
      this.cartQuantity =newCart.totalCount;
    })
    this.userService.userObservable.subscribe((newUser)=>{
      this.user = newUser;
    })
    
  }

}
