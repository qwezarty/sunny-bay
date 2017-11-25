import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomListComponent } from './room-list.component';
import { RoomsModule } from '../rooms.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { exec } from 'child_process';

describe('TestComponent', () => {
  let component: RoomListComponent;
  let fixture: ComponentFixture<RoomListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RoomsModule,
        BrowserAnimationsModule,
        RouterTestingModule,
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
