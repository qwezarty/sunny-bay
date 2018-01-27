import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { Globals } from '../../global';
import { CoreService } from '../core/core.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  sidenav: { 'mode': string, 'opened': string } = { 'mode': 'side', 'opened': 'true' };

  constructor(
    private breakpointService: BreakpointObserver, private coreService: CoreService,
    private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer,
    private globals: Globals) {
    iconRegistry.addSvgIcon(
      'account', sanitizer.bypassSecurityTrustResourceUrl(
        globals.Envs.HTML_IMAGE_SRC + 'ic_account_circle_none_56px.svg'
      )
    );
    this.coreService.installtHeader();
    this.coreService.removeFooter();
  }

  ngOnInit() {
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
