import { Template, LayoutType, HeaderType, FooterType, TemplateLayout } from './template.model';
import { Subject } from 'rxjs/subject';
import { Observable } from 'rxjs/Observable';

export class TemplateService {
    private currentTemplate = new Subject<Template>();
    private templates: Template[] = [
        // root route
        new Template('home', new TemplateLayout(LayoutType.Default)),
        new Template('rental', new TemplateLayout(LayoutType.Default)),
        // room-list and room-detail
        new Template('rooms', new TemplateLayout(LayoutType.SideNav)),
        new Template('room', new TemplateLayout(LayoutType.Default)),
        // authorization
        new Template('signin', new TemplateLayout(LayoutType.None)),
        new Template('signup', new TemplateLayout(LayoutType.None)),
        new Template('contract', new TemplateLayout(LayoutType.None)),
        // account
        new Template('account', new TemplateLayout(LayoutType.SideNav)),
    ];
    private defaultTemplate: Template = new Template(
        'default_template',
        new TemplateLayout(LayoutType.None)
    );

    public findTemplateOrDefault(name: string) {
        const templates = this.templates.filter(element => {
            return element.name === name;
        });
        if (templates.length === 1) {
            return templates[0];
        } else if (templates.length === 0) {
            return this.defaultTemplate;
        } else {
            throw Error('template after filtered must be 0 or 1. Please check template.service.ts file. Donot using the same name.');
        }
    }

    public nextTemplate(template: Template) {
        return this.currentTemplate.next(template);
    }

    public getTemplate(): Observable<Template> {
        return this.currentTemplate.asObservable();
    }

    public removeTemplate() {
        return this.currentTemplate.next();
    }
}
