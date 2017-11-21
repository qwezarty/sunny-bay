import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { NgModel } from '@angular/forms';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss']
})
export class RoomListComponent implements OnInit {
  footerEleRef: ElementRef;
  sidenav: { 'mode': string, 'opened': string } = { 'mode': 'side', 'opened': 'true' };
  filterOptions: { 'value': string, 'checked': boolean, 'disabled': boolean }[] = [
    { 'value': 'All', 'checked': true, 'disabled': false },
    { 'value': 'Deluxe Suite', 'checked': true, 'disabled': false },
    { 'value': 'Single Room', 'checked': true, 'disabled': false },
    { 'value': 'Standard Room', 'checked': true, 'disabled': false },
  ];
  isChecked = false;

  constructor(
    private breakpointService: BreakpointObserver,
    private renderer: Renderer2,
    private eleRef: ElementRef) {
  }

  ngOnInit() {
    const childrenElements = this.eleRef.nativeElement.parentElement.children;
    this.footerEleRef = childrenElements[childrenElements.length - 1];
    this.observeDevice();
  }

  observeDevice() {
    this.breakpointService.observe([
      '(max-width:1024px)'
    ]).subscribe(result => {
      if (result.matches) {
        this.activateSmallLayout();
      }
    });
    this.breakpointService.observe([
      '(min-width: 1025px)'
    ]).subscribe(result => {
      if (result.matches) {
        this.activateLargeLayout();
      }
    });
  }

  activateSmallLayout() {
    this.sidenav.mode = 'push';
    this.sidenav.opened = 'false';
    this.removeGlobalFooter();
  }

  activateLargeLayout() {
    this.sidenav.mode = 'side';
    this.sidenav.opened = 'true';
    this.removeGlobalFooter();
  }

  removeGlobalFooter() {
    this.renderer.setAttribute(
      this.footerEleRef,
      'hidden', ''
    );
  }

  onToggleChange(filterOption) {
    filterOption.checked = !filterOption.checked;
    console.log(filterOption);
    console.log(this.filterOptions);
    if (filterOption.value === 'All') {
      this.filterOptions.filter((option) => {
        return option.value !== 'All';
      }).forEach((option) => {
        option.checked = filterOption.checked ? true : false;
      });
    } else {
      this.filterOptions[0].checked = false;
    }
  }
}
