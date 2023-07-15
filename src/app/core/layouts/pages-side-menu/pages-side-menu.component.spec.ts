import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesSideMenuComponent } from './pages-side-menu.component';

describe('PagesSideMenuComponent', () => {
  let component: PagesSideMenuComponent;
  let fixture: ComponentFixture<PagesSideMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagesSideMenuComponent]
    });
    fixture = TestBed.createComponent(PagesSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
