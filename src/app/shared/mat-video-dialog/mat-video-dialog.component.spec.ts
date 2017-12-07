import {
    TestBed,
    ComponentFixture,
    async,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NgModule, Component, DebugElement, } from '@angular/core';
import { MatVideoDialogComponent } from './mat-video-dialog.component';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { OverlayContainer } from '@angular/cdk/overlay';
import { FlexLayoutModule } from '@angular/flex-layout';

describe('MatVideoDialog', () => {
    let fixture: ComponentFixture<TestMatVideoDialogComponent>;
    let component: TestMatVideoDialogComponent;
    let overlayContainerElement: HTMLElement;
    // let dialogRef: MatDialogRef<TestMatVideoDialogComponent>;
    let dialogContainer: HTMLElement;
    let videoElement: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [TestMatVideoDialogModule],
            providers: [
                {
                    provide: OverlayContainer, useFactory: () => {
                        overlayContainerElement = document.createElement('div');
                        return { getContainerElement: () => overlayContainerElement };
                    }
                }
            ],
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TestMatVideoDialogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should open a dialog with video tag', () => {
        component.onWatchVideo();
        fixture.detectChanges();
        dialogContainer = overlayContainerElement.querySelector('mat-dialog-container') as HTMLElement;
        expect(dialogContainer.getAttribute('role')).toBe('dialog');
        console.log(overlayContainerElement);
    });

    it('should contain a video tag', () => {
        videoElement = dialogContainer.querySelector('video') as HTMLElement;
        expect(videoElement).toBeTruthy();
    });

    it('should have correct src, poster, controls', () => {
        const src = videoElement.getAttribute('src');
        const poster = videoElement.getAttribute('poster');
        const controls = videoElement.getAttribute('controls');
        expect(src).toBe('test-video.mp4');
        expect(poster).toBe('test-poster.jpg');
        expect(controls).toBe('controls');
    });

    it('should have no padding of container', () => {
        const padding = dialogContainer.style['padding'];
        expect(padding).toBe('0px');
    });

    it('should close', () => {
        component.closeVideoDialog();
        fixture.detectChanges();
        const dialogContainerAfterClosed = overlayContainerElement.querySelector('mat-dialog-container');
        expect(dialogContainerAfterClosed).toBeFalsy();
    });

});


@Component({
    template: ''
})
export class TestMatVideoDialogComponent {
    videoDialogRef: MatDialogRef<MatVideoDialogComponent>;
    constructor(private videoDialog: MatDialog) { }

    onWatchVideo() {
        this.videoDialogRef = this.videoDialog.open(
            MatVideoDialogComponent,
            {
                data: {
                    title: 'test-video',
                    src: 'test-video.mp4',
                    poster: 'test-poster.jpg',
                },
            }
        );
    }

    closeVideoDialog() {
        this.videoDialog.closeAll();
    }

    getVideoDialogRef() {
        return this.videoDialogRef;
    }

}


@NgModule({
    declarations: [MatVideoDialogComponent, TestMatVideoDialogComponent],
    imports: [NoopAnimationsModule, MatDialogModule, FlexLayoutModule],
    entryComponents: [MatVideoDialogComponent],
    providers: [MatDialog]
})
export class TestMatVideoDialogModule { }
