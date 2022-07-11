import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerWatchComponent } from './timer-watch.component';

describe('TimerWatchComponent', () => {
  let component: TimerWatchComponent;
  let fixture: ComponentFixture<TimerWatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerWatchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimerWatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
