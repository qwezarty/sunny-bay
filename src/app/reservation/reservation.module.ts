import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReservationRoutingModule } from './reservation-routing.module';
import { ReservationComponent, ReservationDialogComponent } from './reservation.component';
import { SharedModule } from '../shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule,
         MatFormFieldModule,
         MatInputModule,
         MatSelectModule,
         MatDatepickerModule,
         MatNativeDateModule,
         MatIconModule,
         MatDialogModule,
        } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    ReservationRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatDialogModule,
  ],
  entryComponents: [ReservationDialogComponent],
  declarations: [ReservationComponent, ReservationDialogComponent],
})
export class ReservationModule { }
