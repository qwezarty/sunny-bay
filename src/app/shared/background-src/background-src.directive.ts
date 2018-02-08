import { Directive, OnInit, ElementRef, Renderer2, Input } from '@angular/core';
import { Globals } from '../../../global';

@Directive({
    selector: '[appBackgroundSrc]',
})
export class  BackgroundSrcDirective implements OnInit {
    @Input('appBackgroundSrc') appBackgroundSrc: string;

    constructor(private elementRef: ElementRef,
                private renderer: Renderer2,
                private globals: Globals) {}

    ngOnInit() {
        this.renderer.setStyle(
            this.elementRef.nativeElement,
            'background-image',
            'url(' +  this.globals.Envs.HTML_IMAGE_SRC + this.appBackgroundSrc + ')'
        )
        this.renderer.setStyle(
            this.elementRef.nativeElement,
            'background-position',
            'center'
        )
        this.renderer.setStyle(
            this.elementRef.nativeElement,
            'background-size',
            'cover'
        )
    }

}