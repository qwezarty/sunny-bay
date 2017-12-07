import { Component, OnInit, AfterViewInit, Inject, ViewChild, ViewContainerRef } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { MatVideoDialogComponent } from '../../shared/mat-video-dialog/mat-video-dialog.component';

@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.scss'],
})
export class RoomDetailComponent implements OnInit, AfterViewInit {
  constructor(private videoDialog: MatDialog) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const swiper = new Swiper('.swiper-container', {
      lazy: {
        loadPrevNext: true
      },
      grabCursor: true,
      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true
      }
    });
  }

  onWatchVideo() {
    const videoDialogRef = this.videoDialog.open(
      MatVideoDialogComponent,
      {
        data: {
          title: 'some-video',
          src: 'https://flv2.bn.netease.com/videolib3/1711/04/uwieG3913/HD/uwieG3913-mobile.mp4',
          poster: 'http://cms-origin-cn.battle.net/cms/gallery/EAKKB99UW6HF1509581523047.jpg',
        },
      }
    );
  }

}
