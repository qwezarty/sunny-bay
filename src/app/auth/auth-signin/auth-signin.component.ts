import { Component, OnInit, OnDestroy, ElementRef, Renderer2 } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { Globals } from '../../../global';

@Component({
  selector: 'app-auth-signin',
  templateUrl: './auth-signin.component.html',
  styleUrls: ['./auth-signin.component.scss']
})
export class AuthSigninComponent implements OnInit, OnDestroy {
  headerEleRef: ElementRef;
  footerEleRef: ElementRef;

  constructor(
    private eleRef: ElementRef, private renderer: Renderer2,
    private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer,
    private globals: Globals
  ) {
    iconRegistry.addSvgIcon('wechat', sanitizer.bypassSecurityTrustResourceUrl(globals.Envs.HTML_IMAGE_SRC + 'wechat.svg'));
    iconRegistry.addSvgIcon('weibo', sanitizer.bypassSecurityTrustResourceUrl(globals.Envs.HTML_IMAGE_SRC + 'weibo.svg'));
    iconRegistry.addSvgIcon('qq', sanitizer.bypassSecurityTrustResourceUrl(globals.Envs.HTML_IMAGE_SRC + 'qq.svg'));
  }

  ngOnInit() {
    const childrenElements = this.eleRef.nativeElement.parentElement.children;
    this.headerEleRef = childrenElements[0];
    this.footerEleRef = childrenElements[childrenElements.length - 1];
    this.removeGlobalHeaderAndFooter();
  }

  ngOnDestroy() {
    this.installGlobalHeaderAndFooter();
  }

  // todo refactoring this shit
  removeGlobalHeaderAndFooter() {
    this.renderer.setAttribute(this.headerEleRef, 'hidden', '');
    this.renderer.setAttribute(this.footerEleRef, 'hidden', '');
  }

  // todo refactoring this shit
  installGlobalHeaderAndFooter() {
    this.renderer.removeAttribute(this.headerEleRef, 'hidden', '');
    this.renderer.removeAttribute(this.footerEleRef, 'hidden', '');
  }

}
