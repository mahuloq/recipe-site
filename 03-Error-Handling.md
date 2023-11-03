# The TS File

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
selector: 'app-auth',
templateUrl: './auth.component.html',
})
export class AuthComponent {
constructor(private authService: AuthService) {}

isLoginMode = true;
isLoading = false;
error: string = null;

onSwitchMode() {
this.isLoginMode = !this.isLoginMode;
}

onSubmit(form: NgForm) {
if (!form.valid) {
return;
}

    const email = form.value.email;
    const password = form.value.password;

    this.isLoading = true;
    if (this.isLoginMode) {
      // ...
    } else {
      this.authService.signUp(email, password).subscribe(
        (resData) => {
          console.log(resData);
          this.isLoading = false;
        },
        (error) => {
          console.log(error);
          this.error = 'An error occured!';
          this.isLoading = false;
        }
      );
    }
    form.reset();

}
}

# with the HTML file looking like

<div class="row">
  <div class="col-xs-12 col-md-6 cold-md-offset-3">
    <div class="alert alert-danger" *ngIf="error">
      <p>{{ error }}</p>
    </div>
    <div *ngIf="isLoading" style="text-align: center">
      <app-loading-spinner></app-loading-spinner>
    </div>
    <form #authForm="ngForm" (ngSubmit)="onSubmit(authForm)" *ngIf="!isLoading">
      <div class="form-group">
        <label for="email">Email</label>
        <input
          class="form-control"
          type="email"
          id="email"
          ngModel
          name="email"
          required
          email
        />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          class="form-control"
          type="password"
          id="password"
          ngModel
          name="password"
          required
          minlength="6"
        />
      </div>
      <div>
        <button
          class="btn btn-primary"
          type="submit"
          [disabled]="!authForm.valid"
        >
          {{ isLoginMode ? "Login" : "Sign Up" }}
        </button>
        |
        <button class="btn btn-primary" type="button" (click)="onSwitchMode()">
          Switch to {{ isLoginMode ? "Sign Up" : "Login" }}
        </button>
      </div>
    </form>
  </div>
</div>
