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
import { CoreService } from '../../core/core.service';

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
                Globals,
                CoreService
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
        const imgSrc = de.attributes['src'];
        // expect(imgSrc).toBe(
        //     globals.Envs.HTML_IMAGE_SRC + 'test.jpg'
        // );
    });

});



@Component({
    template: `
    <img appElementSrc="test.jpg">
    `
})
class TestElementSrcComponent { }
