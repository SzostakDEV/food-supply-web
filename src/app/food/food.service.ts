import { Injectable } from '@angular/core';
import { Food } from './food';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Router} from '@angular/router';
import {HttpBaseService} from '../shared/http.base.service';

@Injectable()
export class FoodService extends HttpBaseService {
  constructor(
    protected http: Http
    ) {
    super(http);
  }

  getFoodById(id: number): Promise<any> {
    return this.sendGet(`food/${id}`)
      .then((result) => {
        return Food.hydrate(result.json());
      });
  }

  getFoodList(): Promise<Food[]> {
    return this.sendGet('food/all/all')
      .then((response) => {
        const data = response.json();

        const foodToReturn = [];

        for (const food of data){
          foodToReturn.push(Food.hydrate(food));
        }

        return foodToReturn;
      })
      .catch(this.handleError);
  }
}
