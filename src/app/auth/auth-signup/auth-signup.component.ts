import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Router, ActivatedRoute } from '@angular/router';
import { CoreService } from '../../core/core.service';

@Component({
  selector: 'app-auth-signup',
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./auth-signup.component.scss']
})
export class AuthSignupComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private coreService: CoreService,
    private breakpointService: BreakpointObserver,
  ) { 
    this.coreService.removeAll();
  }

  ngOnInit() {
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
