import {
    TestBed,
    ComponentFixture,
    async,
    ComponentFixtureAutoDetect
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component, DebugElement } from '@angular/core';
import { ElementSrcDirective } from './element-src.directive';
import { Globals } from '../../../global';

describe('ElementSrcDirective', () => {
    let fixture: ComponentFixture<TestElementSrcComponent>;
    let component: TestElementSrcComponent;
    let de: DebugElement;
    let globals: Globals;
    // let el: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ElementSrcDirective,
                TestElementSrcComponent,
            ],
            providers: [
                // { provide: Globals, useValue: true },
                Globals
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TestElementSrcComponent);
        component = fixture.componentInstance;
        globals = TestBed.get(Globals);
        fixture.detectChanges();
    });

    it('should work fine at img tag', () => {
        de = fixture.debugElement.query(By.css('img'));
        const imgSrc = de.nativeElement.src;
        expect(imgSrc).toBe(
            globals.Envs.HTML_IMAGE_SRC + 'sample.jpg'
        );
    });

});



@Component({
    template: `
    <img appElementSrc="sample.jpg">
    `
})
class TestElementSrcComponent { }