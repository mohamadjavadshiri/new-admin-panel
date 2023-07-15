import { Component, OnInit } from '@angular/core';
import { FavoritItem } from './shared/favorit-item.model';

@Component({
  selector: 'app-favorit-nav-bar',
  templateUrl: './favorit-nav-bar.component.html',
  styleUrls: ['./favorit-nav-bar.component.scss']
})
export class FavoritNavBarComponent  implements OnInit{

  favoritItemList:FavoritItem[]=[new FavoritItem(),new FavoritItem() ];

  constructor(){

  }

  ngOnInit(): void {
   this.favoritItemList.unshift(new FavoritItem({id:'dashboard',title:'dashboard',icon:'dashboard'}))
  }


}
