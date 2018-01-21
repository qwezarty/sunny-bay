import { Component, OnInit, Renderer2, ElementRef, TemplateRef, ChangeDetectorRef } from '@angular/core';
import { TemplateSidenavService } from './template-sidenav.service';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-template-sidenav',
  templateUrl: './template-sidenav.component.html',
  styleUrls: ['./template-sidenav.component.scss']
})
export class TemplateSidenavComponent implements OnInit {
  sidenav: { 'mode': string, 'opened': string } = { 'mode': 'side', 'opened': 'true' };
  sideMainTemplate: TemplateRef<any>;

  constructor(
    private sidenavService: TemplateSidenavService, private changeDetector: ChangeDetectorRef,
    private render: Renderer2, private breakpointService: BreakpointObserver) {
  }

  ngOnInit() {
    this.observeDevice();
    this.sidenavService.getSidenav().subscribe(ele => {
      this.sideMainTemplate = ele;
    });
    this.changeDetector.detectChanges();
  }

  observeDevice() {
    this.breakpointService.observe([
      // '(max-width:1024px)'
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
    this.sidenav.mode = 'push';
    this.sidenav.opened = 'false';
  }

  activateLargeLayout() {
    this.sidenav.mode = 'side';
    this.sidenav.opened = 'true';
  }

}
