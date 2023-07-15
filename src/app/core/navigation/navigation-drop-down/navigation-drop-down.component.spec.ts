import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationDropDownComponent } from './navigation-drop-down.component';

describe('NavigationDropDownComponent', () => {
  let component: NavigationDropDownComponent;
  let fixture: ComponentFixture<NavigationDropDownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavigationDropDownComponent]
    });
    fixture = TestBed.createComponent(NavigationDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
