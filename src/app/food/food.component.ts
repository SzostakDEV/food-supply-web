import { Component, OnInit } from '@angular/core';
import { FoodService } from './food.service';
import { Food } from './food';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css'],
  providers: [FoodService],
})
export class FoodComponent implements OnInit {
  title = 'Food list';
  foodList: Food[];
  constructor(
    private foodService: FoodService
  ) { }

  ngOnInit() {
    this.foodService.getFoodList().then((result) => {
      this.foodList = result;
    });
  }

}
