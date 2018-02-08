import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { ThemeService } from '../shared/theme/theme.service';
import { CoreService } from '../core/core.service';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-rentals',
  templateUrl: './rentals.component.html',
  styleUrls: ['./rentals.component.scss']
})
export class RentalsComponent implements OnInit, AfterViewInit {
  outlooks = [
    { src: 'rental-outlook-1.jpg' },
    { src: 'rental-outlook-2.jpg' },
    { src: 'rental-outlook-3.jpg' },
    { src: 'rental-outlook-4.jpg' },
    { src: 'rental-outlook-5.jpg' },
  ]
  rooms = [
    { src: 'rental-room-1.jpg', desc: '面对着山景，清晨美丽尽收眼底' },
    { src: 'rental-room-2.jpg', desc: '全景落地窗将阳光照进整个客厅' },
    { src: 'rental-room-3.jpg', desc: '浴室里都是主人精心挑选的欧舒丹洗漱用品' },
  ]
  foods = [
    { id: 1, title: '圆杯烧肉', desc: '杯子里的红烧肉', src: 'rental-food-1.jpg', cols: 2, rows: 1 },
    { id: 2, title: '蜜汁银鳕鱼', desc: '舌尖的甜糯', src: 'rental-food-2.jpg', cols: 1, rows: 1 },
    { id: 3, title: '晚宴火锅', desc: '冬日里的温暖', src: 'rental-food-3.jpg', cols: 1, rows: 1 },
    { id: 4, title: '草地自助餐', desc: '草坪上的自助餐饮', src: 'rental-food-4.jpg', cols: 1, rows: 1 },
    { id: 5, title: '灯光酒席', desc: '灯光、火焰、啤酒', src: 'rental-food-5.jpg', cols: 1, rows: 1 },
    { id: 6, title: '山泉咖啡', desc: '山泉水制作的咖啡', src: 'rental-food-6.jpg', cols: 2, rows: 1 },
  ];
  funs = [
    { title: '户外运动', src: 'rental-fun-1.jpg', desc: '距离民宿不远，是Discovery设在中国的探险基地，跟朋友、家人在户外活动中配合完成一系列活动。' },
    { title: '草坪露营', src: 'rental-fun-2.jpg', desc: '没有房子的拘束，让一切回归最原始的自然绿山墙的大草坪总会充满孩子们的快乐。' },
    { title: '交友晚会', src: 'rental-fun-3.jpg', desc: '在绿山墙，来自世界各地的朋友聚集在星空的草地上，一起喝酒，一起唱歌。' },
  ]
  isLargeLayout = false;
  funsSwiper: any;

  constructor(
    private themePicker: ThemeService,
    private coreService: CoreService,
    private changeDetector: ChangeDetectorRef,
    private bpObserver: BreakpointObserver,
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
    });
    this.funsSwiper = new Swiper('.funs-swiper', {
      lazy: {
        loadPrevNext: true
      },
      slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 24,
      initialSlide: 1,
      grabCursor: false,
      pagination: {
        el: '.funs-pagination',
        clickable: true,
      }
    });

    this.bpObserver.observe(['(max-width:600px)']).subscribe(r => {
      if (r.matches) {
        this.activeSmallLayout();
      } else {
        this.activeLargeLayout();
      }
      this.changeDetector.detectChanges();
    })
  }

  onChangeTheme() {
    this.themePicker.installTheme(
      this.themePicker.themes[Math.floor(Math.random() * 4)]
    );
  }

  activeSmallLayout() {
    this.isLargeLayout = false;
    if (this.funsSwiper) {
      this.funsSwiper.setGrabCursor();
      this.funsSwiper.allowTouchMove = true;
      this.funsSwiper.activeIndex = 1;
    }
    this.foods.forEach((element, index) => {
      this.foods[index].cols = 2;
    });
  }

  activeLargeLayout() {
    this.isLargeLayout = true;
    if (this.funsSwiper) {
      this.funsSwiper.unsetGrabCursor();
      this.funsSwiper.allowTouchMove = false;
      this.funsSwiper.activeIndex = 1;
    }
    this.foods.forEach((element, index) => {
      this.foods[index].cols = 2;
      if (element.id === 1 || element.id === 6) {
        this.foods[index].cols = 2;
      } else {
        this.foods[index].cols = 1;
      }
    });
  }
}
