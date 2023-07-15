import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InboxNavBarItemComponent } from './inbox-nav-bar-item.component';

describe('InboxNavBarItemComponent', () => {
  let component: InboxNavBarItemComponent;
  let fixture: ComponentFixture<InboxNavBarItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InboxNavBarItemComponent]
    });
    fixture = TestBed.createComponent(InboxNavBarItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
