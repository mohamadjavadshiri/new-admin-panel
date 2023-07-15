import { Component, Input, OnInit } from '@angular/core';
import { NavItem } from '../shared/nav-item.model';

@Component({
  selector: 'app-navigation-item',
  templateUrl: './navigation-item.component.html',
  styleUrls: ['./navigation-item.component.scss'],
})
export class NavigationItemComponent implements OnInit {
  @Input() naveItem: NavItem = new NavItem();

  constructor() {}

  ngOnInit(): void {}


 
}
