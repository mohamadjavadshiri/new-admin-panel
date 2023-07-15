import { Component } from '@angular/core';
import { LayoutService } from '../../shared/layout.service';

@Component({
  selector: 'app-pages-top-nav-bar',
  templateUrl: './pages-top-nav-bar.component.html',
  styleUrls: ['./pages-top-nav-bar.component.scss'],
})
export class PagesTopNavBarComponent {
  isShowFavoritMenu = false;
  isShowUserMenu = false;

  constructor(private layoutService: LayoutService) {
    this.setDropDownFavoritAndUser();
  }

  setShowFavoritMenu(isOpen: boolean = false) {
    this.isShowFavoritMenu = isOpen;
  }

  setShowUserMenu(isOpen: boolean = false) {
    this.isShowUserMenu = isOpen;
  }

  setShowMessageSidetMenu(selectedIndex: number = 0) {
    this.layoutService.selectMessageSideMenuIndexTab(selectedIndex);
  }

  setDropDownFavoritAndUser() {
    window.onclick = (event: any) => {
      if (
        !event.target.matches('.favorit-btn') &&
        !event.target.matches('.favorit-btn-icon')
      ) {
        this.isShowFavoritMenu = false;
      }
      if (
        !event.target.matches('.user-info-btn') 
      ) {
        this.isShowUserMenu = false;
      }
    };
  }


}
