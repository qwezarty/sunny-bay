import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { Globals } from '../../../global';

@Component({
  selector: 'app-auth-signin',
  templateUrl: './auth-signin.component.html',
  styleUrls: ['./auth-signin.component.scss']
})
export class AuthSigninComponent implements OnInit {
  constructor(
    private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer,
    private globals: Globals
  ) {
    iconRegistry.addSvgIcon('wechat', sanitizer.bypassSecurityTrustResourceUrl(globals.Envs.HTML_IMAGE_SRC + 'wechat.svg'));
    iconRegistry.addSvgIcon('weibo', sanitizer.bypassSecurityTrustResourceUrl(globals.Envs.HTML_IMAGE_SRC + 'weibo.svg'));
    iconRegistry.addSvgIcon('qq', sanitizer.bypassSecurityTrustResourceUrl(globals.Envs.HTML_IMAGE_SRC + 'qq.svg'));
  }

  ngOnInit() {
  }

}
