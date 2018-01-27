import { Component, OnInit, OnDestroy, ElementRef, Renderer2 } from '@angular/core';
import { MatDialog } from '@angular/material';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-auth-signup',
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./auth-signup.component.scss']
})
export class AuthSignupComponent implements OnInit, OnDestroy {
  headerEleRef: ElementRef;
  footerEleRef: ElementRef;

  constructor(
    private eleRef: ElementRef,
    private renderer: Renderer2,
    private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private breakpointService: BreakpointObserver,
  ) { }

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

  onReadContract() {
    const isSmallLayout = this.breakpointService.isMatched(['(max-width:600px)']);
    if (isSmallLayout) {
      this.router.navigate(['contract'], { relativeTo: this.route });
    } else {
      this.dialog.open(
        AuthSignupDialogComponent,
      );
    }
  }
}

@Component({
  templateUrl: './auth-signup.dialog.html',
  styleUrls: ['./auth-signup.dialog.scss']
})
export class AuthSignupDialogComponent {
  constructor() {}

}
