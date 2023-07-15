import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesTopNavBarComponent } from './pages-top-nav-bar.component';

describe('PagesTopNavBarComponent', () => {
  let component: PagesTopNavBarComponent;
  let fixture: ComponentFixture<PagesTopNavBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagesTopNavBarComponent]
    });
    fixture = TestBed.createComponent(PagesTopNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
