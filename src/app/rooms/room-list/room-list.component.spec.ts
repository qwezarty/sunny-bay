import {
  async,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { exec } from 'child_process';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RoomsModule } from '../rooms.module';
import { RoomListComponent } from './room-list.component';
import { Globals } from '../../../global';

describe('RoomListComponent', () => {
  let component: RoomListComponent;
  let fixture: ComponentFixture<RoomListComponent>;
  // let de: DebugElement;
  // let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RoomsModule,
        NoopAnimationsModule,
        RouterTestingModule,
      ],
      providers: [
        Globals
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
