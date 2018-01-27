import { Component, OnInit, ViewChild, TemplateRef, ChangeDetectorRef } from '@angular/core';
import { CoreService } from './core/core.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sunny-bay';
  @ViewChild('headerDefault') headerDefault: TemplateRef<any>;
  @ViewChild('footerDefault') footerDefault: TemplateRef<any>;
  header: TemplateRef<any>;
  footer: TemplateRef<any>;

  constructor(
    private coreService: CoreService,
    private changeDetector: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.coreService.setDefaultHeader(this.headerDefault);
    this.coreService.setDefaultFooter(this.footerDefault);
    this.coreService.subscribeHeader().subscribe(ele => {
      this.header = ele;
      this.changeDetector.detectChanges();
    })
    this.coreService.subscribeFooter().subscribe(ele => {
      this.footer = ele;
      this.changeDetector.detectChanges();
    })
  }

}
