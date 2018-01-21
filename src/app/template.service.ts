import { Template, LayoutType, HeaderType, FooterType, TemplateLayout } from './template.model';

export class TemplateService {
    private templates: Template[] = [
        // root route
        { name: 'home', layout: new TemplateLayout(LayoutType.Default) },
        { name: 'rental', layout: new TemplateLayout(LayoutType.Default) },
        // room-list and room-detail
        { name: 'rooms', layout: new TemplateLayout(LayoutType.SideNav) },
        { name: 'room', layout: new TemplateLayout(LayoutType.Default) },
        // authorization
        { name: 'signin', layout: new TemplateLayout(LayoutType.None) },
        { name: 'signup', layout: new TemplateLayout(LayoutType.None) },
        { name: 'contract', layout: new TemplateLayout(LayoutType.None) },
        // account
        { name: 'account', layout: new TemplateLayout(LayoutType.SideNav) },
    ];
    private defaultTemplate: Template = {
        name: 'default_template',
        layout: new TemplateLayout(LayoutType.Default)
    };

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

}
