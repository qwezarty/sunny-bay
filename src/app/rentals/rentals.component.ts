import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ThemeService } from '../shared/theme/theme.service';
import { CoreService } from '../core/core.service';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-rentals',
  templateUrl: './rentals.component.html',
  styleUrls: ['./rentals.component.scss']
})
export class RentalsComponent implements OnInit, AfterViewInit {
  tiles = [
    { id: 1, title: '圆杯烧肉', desc: '杯子里的红烧肉', src:'rental-food-1.jpg', cols: 2, rows: 1, color: 'lightblue' },
    { id: 2, title: '蜜汁银鳕鱼', desc: '舌尖的甜糯', src:'rental-food-2.jpg', cols: 1, rows: 1, color: 'lightgreen' },
    { id: 3, title: '晚宴火锅', desc: '冬日里的温暖', src:'rental-food-3.jpg', cols: 1, rows: 1, color: 'lightpink' },
    { id: 4, title: '草地自助餐', desc: '草坪上的自助餐饮', src:'rental-food-4.jpg', cols: 1, rows: 1, color: '#DDBDF1' },
    { id: 5, title: '灯光酒席', desc: '灯光、火焰、啤酒', src:'rental-food-5.jpg', cols: 1, rows: 1, color: 'lightblue' },
    { id: 6, title: '山泉咖啡', desc: '山泉水制作的咖啡', src:'rental-food-6.jpg', cols: 2, rows: 1, color: 'lightcoral' },
  ];
  isLargeLayout = false;

  constructor(
    private themePicker: ThemeService,
    private coreService: CoreService,
    private bpObserver: BreakpointObserver
  ) {
    this.coreService.installAll();
  }

  ngOnInit() {
    this.bpObserver.observe(['(max-width:600px)']).subscribe(r => {
      console.log(r);
      if (r.matches) {
        this.isLargeLayout = false;
        this.tiles.forEach((element, index) => {
          this.tiles[index].cols = 2;
        });
      } else {
        this.isLargeLayout = true;
        this.tiles.forEach((element, index) => {
          this.tiles[index].cols = 2;
          if (element.id === 1 || element.id === 6) {
            console.log(element)
            this.tiles[index].cols = 2;
          } else {
            this.tiles[index].cols = 1;
          }
        });
      }
    })
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
