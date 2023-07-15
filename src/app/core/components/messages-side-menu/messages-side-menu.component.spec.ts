import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesSideMenuComponent } from './messages-side-menu.component';

describe('MessagesSideMenuComponent', () => {
  let component: MessagesSideMenuComponent;
  let fixture: ComponentFixture<MessagesSideMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MessagesSideMenuComponent]
    });
    fixture = TestBed.createComponent(MessagesSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
