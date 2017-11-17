import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss'],
})
export class RoomListComponent implements OnInit {
  sidenav: { 'mode': string, 'opened': string } = {'mode': 'side', 'opened': 'true'};
  gridTiles = [
    { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
    { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 2, rows: 1, color: 'orange' },
    { text: 'Five', cols: 2, rows: 2, color: 'lightsalmon' },
    { text: 'Six', cols: 1, rows: 1, color: 'lightcoral' },
    { text: 'Seven', cols: 1, rows: 1, color: 'lightyellow' },
    { text: 'Eight', cols: 2, rows: 1, color: 'lightseagreen' },
  ];

  constructor(private breakpointService: BreakpointObserver) {
  }

  ngOnInit() {
    this.observeDevice();
  }

  observeDevice() {
    this.breakpointService.observe([
      '(max-width:1024px)'
    ]).subscribe(result => {
      if (result.matches) {
        this.activateSmallLayout();
      }
    });
    this.breakpointService.observe([
      '(min-width: 1024px)'
    ]).subscribe(result => {
      if (result.matches) {
        this.activateLargeLayout();
      }
    });
  }

  activateSmallLayout() {
    this.sidenav.mode = 'push';
    this.sidenav.opened = 'false';
  }

  activateLargeLayout() {
    this.sidenav.mode = 'side';
    this.sidenav.opened = 'true';
  }

}
