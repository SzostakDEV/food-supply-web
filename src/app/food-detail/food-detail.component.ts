import { Component, OnInit } from '@angular/core';
import {Food} from '../food/food';
import {FoodService} from '../food/food.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.css'],
  providers: [FoodService]
})
export class FoodDetailComponent implements OnInit {
  food: Food;
  id: number;
  constructor(
    private activatedRoute: ActivatedRoute,
    private foodService: FoodService,
    private router: Router
  ) {
    const params: any = this.activatedRoute.snapshot.params;
    this.id = params.id;
  }

  ngOnInit() {
    this.foodService.getFoodById(this.id).then((result) => {
      this.food = result;
    }).catch((err) => {
      if (err.status === 403) {
        this.router.navigate(['/login']);
      }
    });
  }
}
