import { Component, Input } from '@angular/core';
import { FavoritItem } from '../shared/favorit-item.model';

@Component({
  selector: 'app-favorit-nav-bar-item',
  templateUrl: './favorit-nav-bar-item.component.html',
  styleUrls: ['./favorit-nav-bar-item.component.scss'],
})
export class FavoritNavBarItemComponent {

  @Input() favoritItem: FavoritItem=new FavoritItem();
  constructor() {}
}
