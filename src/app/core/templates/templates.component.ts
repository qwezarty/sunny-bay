import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { Template, LayoutType, TemplateLayout, HeaderType, FooterType } from '../../template.model';
import { TemplateService } from '../../template.service';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss'],
})
export class TemplatesComponent implements OnInit {
  // @Input('template') template: Template;
  template = new Template(null);

  constructor(
    private templateService: TemplateService,
    private changeDetector: ChangeDetectorRef,
  ) { }

  ngOnInit() {
    this.templateService.getTemplate().subscribe(ele => {
      // todo we should empty templates
      this.template = ele;
    });
  }

  isShowingHeader() {
    if (this.template.layout.header === HeaderType.None) {
      return false;
    } else {
      return true;
    }
  }

  isShowingFooter() {
    if (this.template.layout.footer === FooterType.None) {
      return false;
    } else {
      return true;
    }
  }


}
