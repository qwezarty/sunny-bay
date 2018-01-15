import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule,
         MatButtonModule,
         MatMenuModule,
         MatIconModule,
         MatDialogModule,
       } from '@angular/material';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthSigninComponent } from './auth-signin/auth-signin.component';
import { AuthSignupComponent, AuthSignupDialogComponent } from './auth-signup/auth-signup.component';
import { AuthSignoutComponent } from './auth-signout/auth-signout.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MediaMatcher } from '@angular/cdk/layout';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatInputModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule
  ],
  entryComponents: [AuthSignupDialogComponent],
  declarations: [
    AuthSigninComponent,
    AuthSignupComponent,
    AuthSignoutComponent,
    AuthSignupDialogComponent,
  ],
  providers: [BreakpointObserver, MediaMatcher]
})
export class AuthModule { }
