import { Component, OnInit } from '@angular/core';
import { Orders } from './orders.model';

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

  constructor() { }

  ngOnInit() {
  }

}
