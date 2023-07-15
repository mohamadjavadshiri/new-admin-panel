import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../shared/layout.service';

@Component({
  selector: 'app-messages-side-menu',
  templateUrl: './messages-side-menu.component.html',
  styleUrls: ['./messages-side-menu.component.scss'],
})
export class MessagesSideMenuComponent implements OnInit {
  isMenuOpen: boolean = false;
  isShowContent: boolean = false;
  tabPanel:'Messages'|'Notifications'|string='Messages';
  selectedTab=1;
  constructor(private layoutService: LayoutService) {}

  ngOnInit(): void {
    this.layoutService.onSelectedSideMenuIndexChange.subscribe((selectedTab: number=0) => {
      this.setIsMenuOpen(true);
      this.selectedTab=selectedTab
    });
  }

  setIsMenuOpen(isOPen: boolean = false) {
    this.isMenuOpen = isOPen;
    if(isOPen){
      setTimeout(() => {
        this.isShowContent = isOPen;
      }, 270);
    }
    else{
      this.isShowContent = isOPen;
    }
  
  }
}
