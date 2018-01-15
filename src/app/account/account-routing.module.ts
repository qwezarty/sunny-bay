import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountComponent } from './account.component';
import { ProfileComponent } from './profile/profile.component';
import { OrdersComponent } from './orders/orders.component';
import { OccupanciesComponent } from './occupancies/occupancies.component';

const routes: Routes = [
    { path: '', component: AccountComponent,
      children: [
        { path: 'profile', component: ProfileComponent },
        { path: 'orders', component: OrdersComponent },
        { path: 'occupancies', component: OccupanciesComponent },
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
