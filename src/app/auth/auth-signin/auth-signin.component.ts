import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { Globals } from '../../../global';
import { CoreService } from '../../core/core.service';

@Component({
  selector: 'app-auth-signin',
  templateUrl: './auth-signin.component.html',
  styleUrls: ['./auth-signin.component.scss']
})
export class AuthSigninComponent implements OnInit {
  constructor(
    private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer,
    private globals: Globals, private coreService: CoreService
  ) {
    this.iconRegistry.addSvgIcon('wechat', sanitizer.bypassSecurityTrustResourceUrl(globals.Envs.HTML_IMAGE_SRC + 'wechat.svg'));
    this.iconRegistry.addSvgIcon('weibo', sanitizer.bypassSecurityTrustResourceUrl(globals.Envs.HTML_IMAGE_SRC + 'weibo.svg'));
    this.iconRegistry.addSvgIcon('qq', sanitizer.bypassSecurityTrustResourceUrl(globals.Envs.HTML_IMAGE_SRC + 'qq.svg'));
    this.coreService.removeAll();
  }

  ngOnInit() {
  }

}
