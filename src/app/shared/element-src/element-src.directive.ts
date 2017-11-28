import { Directive, OnInit, ElementRef, Renderer2, Input } from '@angular/core';
import { Globals } from '../../../global';

@Directive({
    selector: '[appElementSrc]',
})
export class  ElementSrcDirective implements OnInit {
    @Input('appElementSrc') appElementSrc: string;

    constructor(private elementRef: ElementRef,
                private renderer: Renderer2,
                private globals: Globals) {}

    ngOnInit() {
        this.renderer.setAttribute(
            this.elementRef.nativeElement,
            'src',
            this.globals.Envs.HTML_IMAGE_SRC + this.appElementSrc
        );
    }

}
