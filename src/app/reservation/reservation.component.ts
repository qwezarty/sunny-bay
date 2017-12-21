import { Component, OnInit, Renderer2, ElementRef, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { ReservationFormModel } from './reservation-form.model';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {
  content: { 'img': string, 'title': string, 'price': number, 'content': string } = {
    img: 'room-list-1.jpg', title: '木香山景房', price: 780,
    content: `大面积的落地窗设计，能让你时刻享受山里的美景。宽敞的阳台，足以让您铺设瑜伽垫。`
  };
  form: ReservationFormModel;

  inDateControl = new FormControl();

  outDateControl = new FormControl();

  constructor(
    private render: Renderer2,
    private elementRef: ElementRef,
    private breakpointService: BreakpointObserver,
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.observeDevice();
    this.form = new ReservationFormModel(new Date(), this.content.price);
  }

  observeDevice() {
    this.breakpointService.observe([
      '(max-width:959px)'
    ]).subscribe(result => {
      if (result.matches) {
        this.activateSmallLayout();
      } else {
        this.activateLargeLayout();
      }
    });
  }

  activateSmallLayout() {
    this.render.removeClass(this.elementRef.nativeElement, 'expand-outlet-to-full-vh');
  }

  activateLargeLayout() {
    this.render.addClass(this.elementRef.nativeElement, 'expand-outlet-to-full-vh');
  }

  onProceed() {
    this.dialog.open(ReservationDialogComponent, {
      data: this.form
    });
  }
}


@Component({
  templateUrl: './reservation.dialog.html',
  styleUrls: ['./reservation.dialog.scss']
})
export class ReservationDialogComponent {
  // todo inject data with re-designed data structure
  constructor(@Inject(MAT_DIALOG_DATA) public data: ReservationFormModel) {}

}
