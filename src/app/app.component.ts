import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { LogginService } from './loggin.service';
import * as fromApp from './store/app.reducer';
import * as AuthActions from './auth/store/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private logginService: LogginService,
    private store: Store<fromApp.AppState>
  ) {}

  ngOnInit() {
   // this.authService.autoLogin();
    this.store.dispatch(new AuthActions.AutoLogin());
    this.logginService.printLog('Hello from AppComponent ngOnInit');
  }
}
