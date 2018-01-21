import { Injectable, ElementRef, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TemplateSidenavService {
    private sidenavElement = new Subject<TemplateRef<any>>();

    addSidenav(ele: TemplateRef<any>) {
        this.sidenavElement.next(ele);
    }

    removeSidenav() {
        this.sidenavElement.next();
    }

    getSidenav(): Observable<TemplateRef<any>> {
        return this.sidenavElement.asObservable();
    }
}
