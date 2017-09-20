import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FoodComponent } from './food/food.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { FoodDetailComponent } from './food-detail/food-detail.component';
import {AuthService} from './shared/auth.service';
import { LoginComponent } from './login/login.component';
import { NotAllowedComponent } from './not-allowed/not-allowed.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodComponent,
    FoodDetailComponent,
    LoginComponent,
    NotAllowedComponent,
    LogoutComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
  ],
  providers: [HttpModule, AuthService],
  bootstrap: [AppComponent],
})

export class AppModule { }
