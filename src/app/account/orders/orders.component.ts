import { Component, OnInit, Inject } from '@angular/core';
import { Orders } from './orders.model';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  orders: Orders[] = [
    { 'id': 'HZDL013', 'inDate': new Date(2018, 1, 26), 'outDate': new Date(2018, 1, 28), 'rental': '大乐之野', 'room': '木香大床房', 'name': '沈金钱', 'phone': '2233', 'adults': 0, 'childs': 0, 'price': 1144, 'nights': 2, 'costs': 2288, 'status': 0 },
    { 'id': 'AJDL036', 'inDate': new Date(2018, 1, 26), 'outDate': new Date(2018, 1, 28), 'rental': '大乐之野', 'room': '木香大床房', 'name': '沈金钱', 'phone': '2233', 'adults': 0, 'childs': 0, 'price': 1144, 'nights': 2, 'costs': 2288, 'status': 1 },
    { 'id': 'BJDL004', 'inDate': new Date(2018, 1, 26), 'outDate': new Date(2018, 1, 28), 'rental': '大乐之野', 'room': '木香大床房', 'name': '沈金钱', 'phone': '2233', 'adults': 0, 'childs': 0, 'price': 1144, 'nights': 2, 'costs': 2288, 'status': 2 },
  ]

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  onCancle(data: Orders) {
    const cookedData = { mode: 'cancle', main: Object.assign({}, data) }
    this.openDialog(cookedData);

  }

  onDelete(data: Orders) {
    const cookedData = { mode: 'delete', main: Object.assign({}, data) }
    this.openDialog(cookedData);
  }

  openDialog(data: any) {
    let dialogRef = this.dialog.open(OrdersDialogComponent, {
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
    if (data.mode === 'cancle') {
      this.orders.forEach((element, index) => {
        // todo use guid rather than name
        if (element.id === data.main.id) {
          this.orders[index].status = 2;
        }
      });
    } else if (data.mode === 'delete') {
      this.orders.forEach((element, index) => {
        // todo use guid rather than name
        if (element.id === data.main.id) {
          this.orders.splice(index, 1)
        }
      });
    }
  }
}


@Component({
  templateUrl: './orders.dialog.html'
})
export class OrdersDialogComponent {
  constructor(private dialogRef: MatDialogRef<OrdersDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }
}
