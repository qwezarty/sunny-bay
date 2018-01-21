import { Component, OnInit } from '@angular/core';
import {
  Router,
  NavigationStart,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  RoutesRecognized,
  ChildActivationStart,
  ResolveStart
} from '@angular/router';
import { TemplateService } from './template.service';
import { Template, LayoutType, TemplateLayout } from './template.model';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sunny-bay';
  templateName = '';
  templateLayout: TemplateLayout;

  constructor(
    private router: Router,
    private templateService: TemplateService,
  ) {
  }

  ngOnInit() {
    this.templateLayout = new TemplateLayout(LayoutType.None);
    this.router.events.subscribe((event) => {
      if (event instanceof ResolveStart) {
        // we have clean the template at templates.component.ts
        // const node = document.getElementById('templates-outlet');
        // while (node.firstChild) {
        //   node.removeChild(node.firstChild);
        // }

        const templateName = this.findLastRouterData(event.state.root);
        console.log('router gets template name:');
        console.log(templateName);

        const result = this.templateService.findTemplateOrDefault(templateName);
        this.templateName = result.name;
        this.templateLayout = result.layout;
        console.log('trying to render template:');
        console.log(this.templateName);
      }
    });

  }

  findLastRouterData(root: ActivatedRouteSnapshot, template?: string): string {
    // get template data
    // i.e. find the last data that not null
    const currentTemplate = root.data['template'];
    if (!isNullOrUndefined(currentTemplate)) {
      template = currentTemplate;
    }

    // break statement
    if (root.children.length === 0) {
      return template;
    }

    const nextRoot = root.firstChild;
    return this.findLastRouterData(nextRoot, template);
  }

}
