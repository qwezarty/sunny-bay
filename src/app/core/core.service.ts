import { Injectable, ElementRef, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CoreService {
    private defaultHeader: TemplateRef<any>;
    private defaultFooter: TemplateRef<any>;
    private header = new Subject<TemplateRef<any>>();
    private footer = new Subject<TemplateRef<any>>();

    installtHeader(ref?: TemplateRef<any>) {
        if (!ref) {
            this.header.next(this.defaultHeader);
        } else {
            this.header.next(ref);
        }
    }

    subscribeHeader() {
        return this.header.asObservable();
    }

    installFooter(ref?: TemplateRef<any>) {
        if (!ref) {
            this.footer.next(this.defaultFooter);
        } else {
            this.footer.next(ref);
        }
    }

    subscribeFooter() {
        return this.footer.asObservable();
    }

    installAll(header?: TemplateRef<any>, footer?: TemplateRef<any>) {
        this.installtHeader(header);
        this.installFooter(footer);
    }

    removeHeader() {
        this.header.next();
    }

    removeFooter() {
        this.footer.next();
    }

    removeAll() {
        this.removeHeader();
        this.removeFooter();
    }

    // only call this in app-component
    setDefaultHeader(ref: TemplateRef<any>) {
        this.defaultHeader = ref;
    }

    // only call this in app-component
    setDefaultFooter(ref: TemplateRef<any>) {
        this.defaultFooter = ref;
    }

    // -------------- private method --------------

    // ------------------- end --------------------
}
