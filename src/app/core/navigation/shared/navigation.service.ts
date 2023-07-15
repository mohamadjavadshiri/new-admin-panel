import { Injectable } from '@angular/core';
import { NavItem } from './nav-item.model';
import { navigation } from './navigation-items';
@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  naveITemsList: NavItem[] = [];

  constructor() {}

  getNavigationItems(): NavItem[] {
    for (let naveitem of navigation) {
      let newNavItem = new NavItem(naveitem);
      newNavItem.children = [];
      naveitem.children = naveitem.children || [];
      for (let child of naveitem.children) {
        newNavItem.children.push(this.navigateNavItems(child));
      }
      this.naveITemsList.push(newNavItem);
    }
    return this.naveITemsList;
  }

  navigateNavItems(naveItem: any): NavItem {
    let newNavItem = new NavItem(naveItem);
    newNavItem.children = [];
    naveItem.children = naveItem.children || [];
    for (let child of naveItem.children) {
      newNavItem.children.push(this.navigateNavItems(child));
    }
    return newNavItem;
  }
}
