import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss'],
})
export class RoomListComponent implements OnInit {
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

  constructor() { }

  ngOnInit() {
  }

}
