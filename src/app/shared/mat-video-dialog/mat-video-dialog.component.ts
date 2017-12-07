import { Component, OnInit, Inject, ElementRef, Renderer2 } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-mat-video-dialog',
  templateUrl: './mat-video-dialog.component.html',
  styleUrls: ['./mat-video-dialog.component.scss'],
})
export class MatVideoDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<MatVideoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { title: string, src: string, poster: string },
    private elementRef: ElementRef,
    private render: Renderer2
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    const dialogContainer = this.elementRef.nativeElement.parentElement;
    this.render.setStyle(
      dialogContainer,
      'padding',
      0
    );
  }
}
