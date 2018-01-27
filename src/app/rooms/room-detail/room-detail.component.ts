import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MatVideoDialogComponent } from '../../shared/mat-video-dialog/mat-video-dialog.component';
import { Globals } from '../../../global';
import { CoreService } from '../../core/core.service';

@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.scss'],
})
export class RoomDetailComponent implements OnInit, AfterViewInit {
  constructor(
    private videoDialog: MatDialog,
    private globals: Globals,
    private coreService: CoreService,
  ) { 
    this.coreService.installAll();
  }

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
          src: this.globals.Envs.CLIP_SRC + 'sample-video.mp4',
          poster: 'http://cms-origin-cn.battle.net/cms/gallery/EAKKB99UW6HF1509581523047.jpg',
        },
      }
    );
  }

}
