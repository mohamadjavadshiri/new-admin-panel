import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationNavBarComponent } from './notification-nav-bar.component';

describe('NotificationNavBarComponent', () => {
  let component: NotificationNavBarComponent;
  let fixture: ComponentFixture<NotificationNavBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotificationNavBarComponent]
    });
    fixture = TestBed.createComponent(NotificationNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
