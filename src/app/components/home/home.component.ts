import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../services/food.service';
import { Food } from '../../shared/food';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // The property name should be 'styleUrls' instead of 'styleUrl'
})
export class HomeComponent implements OnInit {
  food: Food[] = [];

  constructor(private fs: FoodService, private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params) => {
      if (params['searchTerm']) {
        this.fs.getFoodBySearchTerm(params['searchTerm']).subscribe((result) => {
          this.food = result;
        });
      } else if (params['tag']) {
        this.fs.getAllFoodByTag(params['tag']).subscribe((result) => {
          this.food = result;
        });
      } else {
        this.fs.getAll().subscribe((result) => {
          this.food = result;
        });
      }
    });
  }
}
