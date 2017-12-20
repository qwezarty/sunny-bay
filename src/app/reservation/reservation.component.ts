import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BreakpointObserver } from '@angular/cdk/layout';

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
  contact: { 'name': string, 'phone': string } = { 'name': '', 'phone': '' };

  // check-in date property
  private _inDate: Date;
  get inDate(): Date {
    return this._inDate || new Date();
  }
  set inDate(date: Date) {
    // when user pick an check-in date
    // we should empty the check-out date
    this.outDate = null;
    this._inDate = date;
    // we should also set the check-out min&max date
    this.outMinDate = this.caculateOutMinDate(this._inDate);
    this.outMaxDate = this.caculateOutMaxDate(this._inDate);
  }
  // check-in min&max date
  inMinDate = new Date();
  inMaxDate = this.cloneDateAndAddDays(this.inMinDate, 30);
  inDateControl = new FormControl();

  // check-out date property
  private _outDate: Date;
  get outDate(): Date {
    return this._outDate;
  }
  set outDate(date: Date) {
    this._outDate = date;
  }
  // check-out min&max date
  // this value will be initialized when check-in date be given
  outMinDate: Date;
  outMaxDate: Date;
  outDateControl = new FormControl();

  constructor(
    private render: Renderer2,
    private elementRef: ElementRef,
    private breakpointService: BreakpointObserver,
  ) { }

  ngOnInit() {
    this.observeDevice();
  }

  observeDevice() {
    // this.breakpointService.observe([
    //   Breakpoints.Web
    // ]).subscribe(result => {
    //   if (result.matches) {
    //     this.activateLargeLayout();
    //   }
    // });
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

  caculateOutMaxDate(inDate: Date): Date {
    // todo logic: set max reservation duration, say, 10 days
    return this.cloneDateAndAddDays(inDate, 10);
  }

  caculateOutMinDate(inDate: Date): Date {
    // todo logic: set max reservation duration, say, 10 days
    return this.cloneDateAndAddDays(inDate, 1);
  }

  private caculateTotalNights(): number {
    // todo add negative validation
    const diff = this.outDate.getTime() - this.inDate.getTime();
    return Math.ceil(diff / (1000 * 3600 * 24));
  }

  private caculateTotalCosts(): number {
    const nights = this.caculateTotalNights();
    return nights * this.content.price;
  }

  private cloneDateAndAddDays(date: Date, days: number): Date {
    const copy = this.cloneDate(date);
    copy.setDate(copy.getDate() + days);
    return new Date(copy);
  }

  private cloneDate(origin: Date): Date {
    const cooked = new Date(origin.getTime());
    return cooked;
  }

}
