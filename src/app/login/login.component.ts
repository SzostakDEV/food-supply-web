import { Component, OnInit } from '@angular/core';
import {AuthService} from '../shared/auth.service';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService ,
    private router: Router
  ) { }

  onSubmit(forms: NgForm): Promise<Boolean> {
    const data = forms.form.value;
    this.authService.login(data.login, data.password)
      .then((result) => {
        if (result.message === 'Ok') {
          this.router.navigate(['/food']);
        }
      }).catch((err) => {
        return false;
      });

    return Promise.resolve(false);
  }

  ngOnInit() {
  }

}
