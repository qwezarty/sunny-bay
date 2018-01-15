import { Component, OnInit, OnDestroy, Renderer2, ElementRef } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { Globals } from '../../global';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit, OnDestroy {
  footerEleRef: ElementRef;
  sidenav: { 'mode': string, 'opened': string } = { 'mode': 'side', 'opened': 'true' };

  constructor(
    private breakpointService: BreakpointObserver,
    private renderer: Renderer2, private eleRef: ElementRef,
    private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer,
    private globals: Globals) {
      iconRegistry.addSvgIcon(
        'account', sanitizer.bypassSecurityTrustResourceUrl(
          globals.Envs.HTML_IMAGE_SRC + 'ic_account_circle_none_56px.svg'
        )
      );
  }

  ngOnInit() {
    const childrenElements = this.eleRef.nativeElement.parentElement.children;
    this.footerEleRef = childrenElements[childrenElements.length - 1];
    this.removeGlobalFooter();
    this.observeDevice();
  }

  ngOnDestroy() {
    this.installGlobalFooter();
  }

  // todo refactoring this shit
  removeGlobalFooter() {
    this.renderer.setAttribute(
      this.footerEleRef,
      'hidden', ''
    );
  }

  // todo refactoring this shit
  installGlobalFooter() {
    this.renderer.removeAttribute(
      this.footerEleRef,
      'hidden', ''
    );
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
