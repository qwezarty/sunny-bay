import { Component, OnInit } from '@angular/core';
import { CoreService } from '../core/core.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private coreService: CoreService) {
    this.coreService.installAll();
  }

  ngOnInit() {
  }

}
