import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: 'home', loadChildren: './home/home.module#HomeModule' },
    { path: 'rentals', loadChildren: './rentals/rentals.module#RentalsModule'},
    { path: 'auth', loadChildren: './auth/auth.module#AuthModule'},
    { path: 'account', loadChildren: './account/account.module#AccountModule'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
