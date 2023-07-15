import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  onSelectedSideMenuIndexChange: Subject<number> = new Subject<number>();
  onSideMenuToggle: Subject<boolean> = new Subject<boolean>();

  constructor() {}

  selectMessageSideMenuIndexTab(selectedIndex: number) {
    this.onSelectedSideMenuIndexChange.next(selectedIndex);
  }
}
