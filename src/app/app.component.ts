import { Component } from '@angular/core';
import {AuthService} from './shared/auth.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [AuthService]
})
export class AppComponent {
  title = 'Food';

  constructor() { }
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
