export class Template {
    name: string;
    layout: TemplateLayout;
}

export class TemplateLayout {
    type: LayoutType;
    header?: HeaderType;
    footer?: FooterType;
    data?: any;
    constructor(type: LayoutType, header?: HeaderType, footer?: FooterType, data?: any) {
        this.type = type;
        // if one of them has value, that means that
        // user wanna change the default value
        if (header || footer) {
            this.header = header;
            this.footer = footer;
        } else {
            this.switchLayoutType(type);
        }
    }

    private switchLayoutType(type: LayoutType) {
        switch (type) {
            case LayoutType.Default:
                this.header = HeaderType.Default;
                this.footer = FooterType.Default;
                break;
            case LayoutType.None:
                this.header = HeaderType.None;
                this.footer = FooterType.None;
                break;
            case LayoutType.SideNav:
                this.header = HeaderType.Default;
                this.footer = FooterType.None;
                break;
            default:
                throw Error('LayoutType should have three value');
        }
    }
}

// caution!
// do not change the value of each item
// if you must change it, then go to these places to make a modification
// 1. templates.component.html
export enum LayoutType {
    // standard header and footer
    Default = 0,
    // sidenav with standard header and side-footer
    SideNav = 1,
    // empty page
    None = 2
}

export enum HeaderType {
    Default = 0,
    None = 1
}

export enum FooterType {
    Default = 0,
    None = 1,
}

