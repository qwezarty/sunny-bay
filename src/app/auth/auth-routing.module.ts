import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material';

import { AuthSigninComponent } from './auth-signin/auth-signin.component';
import { AuthSignoutComponent } from './auth-signout/auth-signout.component';
import { AuthSignupComponent } from './auth-signup/auth-signup.component';

const routes: Routes = [
  { path: 'signin', component: AuthSigninComponent },
  { path: 'signup', component: AuthSignupComponent },
  { path: 'signout', component: AuthSignoutComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
