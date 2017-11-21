import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
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
      '(min-width: 1024px)'
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

}
