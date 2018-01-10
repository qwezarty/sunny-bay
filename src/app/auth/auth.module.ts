import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule,
         MatButtonModule,
         MatMenuModule,
         MatIconModule,
       } from '@angular/material';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthSigninComponent } from './auth-signin/auth-signin.component';
import { AuthSignupComponent } from './auth-signup/auth-signup.component';
import { AuthSignoutComponent } from './auth-signout/auth-signout.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatInputModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
  ],
  declarations: [AuthSigninComponent, AuthSignupComponent, AuthSignoutComponent]
})
export class AuthModule { }
