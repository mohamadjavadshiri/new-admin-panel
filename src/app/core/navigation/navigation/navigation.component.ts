import { Component } from '@angular/core';
import { NavItem } from '../shared/nav-item.model';
import { NavigationService } from '../shared/navigation.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  navigaionItems: NavItem[] = [];
  constructor(private navigationService: NavigationService) {
    this.setNavigationItems();
  }

  setNavigationItems() {
    this.navigaionItems = this.navigationService.getNavigationItems();
  }
}
