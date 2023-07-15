import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InboxNavBarComponent } from './inbox-nav-bar.component';

describe('InboxNavBarComponent', () => {
  let component: InboxNavBarComponent;
  let fixture: ComponentFixture<InboxNavBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InboxNavBarComponent]
    });
    fixture = TestBed.createComponent(InboxNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
