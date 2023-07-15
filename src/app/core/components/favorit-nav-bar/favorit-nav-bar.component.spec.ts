import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritNavBarComponent } from './favorit-nav-bar.component';

describe('FavoritNavBarComponent', () => {
  let component: FavoritNavBarComponent;
  let fixture: ComponentFixture<FavoritNavBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavoritNavBarComponent]
    });
    fixture = TestBed.createComponent(FavoritNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
