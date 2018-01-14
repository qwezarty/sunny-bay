import { Component, OnInit, OnDestroy, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-auth-signup',
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./auth-signup.component.scss']
})
export class AuthSignupComponent implements OnInit, OnDestroy {
  headerEleRef: ElementRef;
  footerEleRef: ElementRef;

  constructor(private eleRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    const childrenElements = this.eleRef.nativeElement.parentElement.children;
    this.headerEleRef = childrenElements[0];
    this.footerEleRef = childrenElements[childrenElements.length - 1];
    this.removeGlobalHeaderAndFooter();
  }

  ngOnDestroy() {
    this.installGlobalHeaderAndFooter();
  }

  removeGlobalHeaderAndFooter() {
    this.renderer.setAttribute(this.headerEleRef, 'hidden', '');
    this.renderer.setAttribute(this.footerEleRef, 'hidden', '');
  }

  installGlobalHeaderAndFooter() {
    this.renderer.removeAttribute(this.headerEleRef, 'hidden', '');
    this.renderer.removeAttribute(this.footerEleRef, 'hidden', '');
  }

}
