import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { Globals } from '../../global';
import { TemplateSidenavService } from '../core/templates/template-sidenav/template-sidenav.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  @ViewChild('sideMainTemplate') sideMainTemplate: TemplateRef<any>;

  constructor(
    private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer,
    private globals: Globals, private sidenavService: TemplateSidenavService) {
  }

  ngOnInit() {
    this.iconRegistry.addSvgIcon(
      'account', this.sanitizer.bypassSecurityTrustResourceUrl(
        this.globals.Envs.HTML_IMAGE_SRC + 'ic_account_circle_none_56px.svg'
      )
    );
    this.sidenavService.addSidenav(this.sideMainTemplate);
  }
}
