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
    this.coreService.installAll();
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const generalSwiper = new Swiper('.general-swiper', {
      lazy: {
        loadPrevNext: true
      },
      grabCursor: true,
      pagination: {
        el: '.general-pagination',
        dynamicBullets: true
      }
    });
    const roomsSwiper = new Swiper('.rooms-swiper', {
      lazy: {
        loadPrevNext: true
      },
      slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 30,
      initialSlide: 1,
      grabCursor: true,
      // pagination: {
      //   el: '.rooms-pagination',
      //   clickable: true,
      // }
    });
  }

  onChangeTheme() {
    this.themePicker.installTheme(
      this.themePicker.themes[Math.floor(Math.random() * 4)]
    );
  }

}
