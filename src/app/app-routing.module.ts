import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BootComponent } from './boot/boot.component';

const routes: Routes = [
    { path: '', component: BootComponent },
    { path: 'home', loadChildren: './home/home.module#HomeModule' },
    { path: 'rentals', loadChildren: './rentals/rentals.module#RentalsModule'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
