import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../services/food.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from '../../shared/food';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css'] // Use 'styleUrls' instead of 'styleUrl'
})
export class FoodPageComponent implements OnInit {
  food!: Food | null; // Add null type to handle potential absence of data

  constructor(
    private fs: FoodService,
    private activeRouter: ActivatedRoute,
    private CS: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activeRouter.params.subscribe((params) => {
      if (params['id']) {
        this.fs.getFoodById(params['id']).subscribe((serverFood) => {
          this.food = serverFood;
        });
      }
    });
  }

  AddToCartBtn(): void {
    if (this.food) {
      this.CS.addToCart(this.food);
      this.router.navigateByUrl('/cart-page');
    }
  }
}
