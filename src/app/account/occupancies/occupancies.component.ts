import { Component, OnInit, Inject } from '@angular/core';
import { Occupancies } from './occupancies.model';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';

@Component({
  selector: 'app-occupancies',
  templateUrl: './occupancies.component.html',
  styleUrls: ['./occupancies.component.scss']
})
export class OccupanciesComponent implements OnInit {
  occupancies: Occupancies[] = [
    { name: '马杰克', gender: '男', birth: new Date(1991, 1, 1), phone: '15726816914' },
    { name: '丁露丝', gender: '女', birth: new Date(1991, 1, 1), phone: '15726816914' },
  ]

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  onEdit(data: Occupancies) {
    const cookedData = { mode: 'edit', main: Object.assign({}, data) }
    this.openDialog(cookedData);
  }

  onDelete(data: Occupancies) {
    const cookedData = { mode: 'delete', main: Object.assign({}, data) }
    this.openDialog(cookedData);
  }

  onCreate() {
    const cookedData = { mode: 'create', main: {} }
    this.openDialog(cookedData);
  }

  openDialog(data: any) {
    let dialogRef = this.dialog.open(OccupanciesDialogComponent, {
      data: data
    })
    dialogRef.afterClosed().subscribe(result => {
      this.changeValue(result);
    })
  }

  changeValue(data: any) {
    if (!data || !data.main) {
      // means user cancle the change
      return
    }
    if (data.mode === 'edit') {
      this.occupancies.forEach((element, index) => {
        // todo use guid rather than name
        if (element.name === data.main.name) {
          this.occupancies[index] = data.main;
        }
      });
    } else if (data.mode === 'create') {
      this.occupancies[this.occupancies.length] = data.main;
    } else if (data.mode === 'delete') {
      this.occupancies.forEach((element, index) => {
        // todo use guid rather than name
        if (element.name === data.main.name) {
          this.occupancies.splice(index, 1)
        }
      });
    }
  }

}


@Component({
  templateUrl: './occupancies.dialog.html'
})
export class OccupanciesDialogComponent {
  genderOptions = [
    { 'value': '男', 'desc': '男' },
    { 'value': '女', 'desc': '女' },
    { 'value': '保密', 'desc': '保密' },
  ]
  maxDate = new Date();

  constructor(private dialogRef: MatDialogRef<OccupanciesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  compareGender(g1, g2) {
    return g1 && g2 ? g1 === g2 : false;
  }

}
