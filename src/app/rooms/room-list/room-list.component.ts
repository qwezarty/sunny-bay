import { Component, OnInit, OnDestroy, ElementRef, Renderer2 } from '@angular/core';
import { NgModel } from '@angular/forms';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss'],
})
export class RoomListComponent implements OnInit, OnDestroy {
  footerEleRef: ElementRef;
  sidenav: { 'mode': string, 'opened': string } = { 'mode': 'side', 'opened': 'true' };
  filterOptions: { 'value': string, 'content': string, 'checked': boolean, 'disabled': boolean }[] = [
    { 'value': 'all', 'content': '显示全部', 'checked': true, 'disabled': false },
    { 'value': '', 'content': '当季精选', 'checked': true, 'disabled': false },
    { 'value': '', 'content': '一线山景', 'checked': true, 'disabled': false },
    { 'value': '', 'content': '超大阳台', 'checked': true, 'disabled': false },
    { 'value': '', 'content': '跃层设计', 'checked': true, 'disabled': false },
    { 'value': '', 'content': '附带早餐', 'checked': true, 'disabled': false },
  ];
  contentCards: { 'img': string, 'title': string, 'content': string }[] = [
    { img: 'room-list-1.jpg', title: '木香山景房',
      content: `大面积的落地窗设计，能让你时刻享受山里的美景。宽敞的阳台，足以让您铺设瑜伽垫。` },
    { img: 'room-list-2.jpg', title: '板栗景观房',
      content: `LOFTER型公寓式设计，一层为带壁炉的客厅。二层独立卧室，迎面山景。` },
    { img: 'room-list-3.jpg', title: '核桃亲子房',
      content: `独特双层亲子套房，位于一层的沙发能让您享受午后的美好。二层独立的床铺，专为儿童设计。` },
    { img: 'room-list-4.jpg', title: '松果景观房',
      content: `日式榻榻米房间，还附有小清新的阁楼，是整栋民宿视野最为宽广的地方。` },
  ];
  isChecked = false;

  constructor(
    private breakpointService: BreakpointObserver,
    private renderer: Renderer2,
    private eleRef: ElementRef) {
  }

  ngOnInit() {
    const childrenElements = this.eleRef.nativeElement.parentElement.children;
    this.footerEleRef = childrenElements[childrenElements.length - 1];
    this.observeDevice();
  }

  ngOnDestroy() {
    this.installGlobalFooter();
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
      '(min-width: 1025px)'
    ]).subscribe(result => {
      if (result.matches) {
        this.activateLargeLayout();
      }
    });
  }

  activateSmallLayout() {
    this.sidenav.mode = 'push';
    this.sidenav.opened = 'false';
    this.removeGlobalFooter();
  }

  activateLargeLayout() {
    this.sidenav.mode = 'side';
    this.sidenav.opened = 'true';
    this.removeGlobalFooter();
  }

  removeGlobalFooter() {
    this.renderer.setAttribute(
      this.footerEleRef,
      'hidden', ''
    );
  }

  installGlobalFooter() {
    this.renderer.removeAttribute(
      this.footerEleRef,
      'hidden', ''
    );
  }

  onToggleChange(filterOption) {
    // todo re-coding filter logic
    filterOption.checked = !filterOption.checked;
    if (filterOption.value === 'all') {
      this.filterOptions.filter((option) => {
        return option.value !== 'all';
      }).forEach((option) => {
        option.checked = filterOption.checked ? true : false;
      });
    } else {
      this.filterOptions[0].checked = false;
    }
  }
}
