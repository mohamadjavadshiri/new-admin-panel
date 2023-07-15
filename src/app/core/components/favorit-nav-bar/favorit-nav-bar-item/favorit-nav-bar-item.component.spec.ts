import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritNavBarItemComponent } from './favorit-nav-bar-item.component';

describe('FavoritNavBarItemComponent', () => {
  let component: FavoritNavBarItemComponent;
  let fixture: ComponentFixture<FavoritNavBarItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavoritNavBarItemComponent]
    });
    fixture = TestBed.createComponent(FavoritNavBarItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
