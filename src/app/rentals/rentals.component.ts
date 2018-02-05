import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ThemeService } from '../shared/theme/theme.service';
import { CoreService } from '../core/core.service';

@Component({
  selector: 'app-rentals',
  templateUrl: './rentals.component.html',
  styleUrls: ['./rentals.component.scss']
})
export class RentalsComponent implements OnInit, AfterViewInit {

  constructor(
    private themePicker: ThemeService,
    private coreService: CoreService,
  ) {
    this.coreService.removeAll();
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

  onSectionDown() {
    window.scrollBy({
      behavior: 'smooth',
      top: window.innerHeight,
    });
    // window.scrollTo({
    //   behavior: 'smooth',
    //   top: window.innerHeight,
    // });

  }

  onChangeTheme() {
    this.themePicker.installTheme(
      this.themePicker.themes[Math.floor(Math.random() * 4)]
    );
  }

}
