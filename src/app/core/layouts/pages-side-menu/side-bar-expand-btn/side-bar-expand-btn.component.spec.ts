import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarExpandBtnComponent } from './side-bar-expand-btn.component';

describe('SideBarExpandBtnComponent', () => {
  let component: SideBarExpandBtnComponent;
  let fixture: ComponentFixture<SideBarExpandBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SideBarExpandBtnComponent]
    });
    fixture = TestBed.createComponent(SideBarExpandBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
