import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodComponent } from './food/food.component';
import { LoginComponent } from './login/login.component';
import {FoodDetailComponent} from './food-detail/food-detail.component';
import {RegisterComponent} from './register/register.component';

const routes: Routes = [
  { path: 'food', component: FoodComponent },
  { path: '', component: FoodComponent },
  { path: 'food/:id', component: FoodDetailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
