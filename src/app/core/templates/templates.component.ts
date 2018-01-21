import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { Template, LayoutType, TemplateLayout, HeaderType, FooterType } from '../../template.model';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss']
})
export class TemplatesComponent implements OnInit {
  @Input('templateLayout') templateLayout: TemplateLayout;

  constructor() { }

  ngOnInit() {
  }

  isShowingHeader() {
    if (this.templateLayout.header === HeaderType.None) {
      return false;
    } else {
      return true;
    }
  }

  isShowingFooter() {
    if (this.templateLayout.footer === FooterType.None) {
      return false;
    } else {
      return true;
    }
  }


}
