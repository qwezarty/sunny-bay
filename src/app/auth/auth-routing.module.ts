import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material';

import { AuthSigninComponent } from './auth-signin/auth-signin.component';
import { AuthSignoutComponent } from './auth-signout/auth-signout.component';
import {
  AuthSignupComponent,
  AuthSignupDialogComponent,
} from './auth-signup/auth-signup.component';

const routes: Routes = [
  { path: 'signin', component: AuthSigninComponent },
  { path: 'signup', component: AuthSignupComponent },
  { path: 'signup/contract', component: AuthSignupDialogComponent },
  { path: 'signout', component: AuthSignoutComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
