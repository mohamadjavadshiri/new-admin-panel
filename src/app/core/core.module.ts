import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesLayoutComponent } from './layouts/pages-layout/pages-layout.component';
import { PagesTopNavBarComponent } from './layouts/pages-top-nav-bar/pages-top-nav-bar.component';
import { AppRoutingModule } from '../app-routing.module';
import { MaterialModule } from './materialModules';
import { PagesSideMenuComponent } from './layouts/pages-side-menu/pages-side-menu.component';
import { NavigationDropDownComponent } from './navigation/navigation-drop-down/navigation-drop-down.component';
import { NavigationItemComponent } from './navigation/navigation-item/navigation-item.component';
import { NavigationComponent } from './navigation/navigation/navigation.component';
import { NavigationService } from './navigation/shared/navigation.service';
import { SideBarExpandBtnComponent } from './layouts/pages-side-menu/side-bar-expand-btn/side-bar-expand-btn.component';
import { FavoritNavBarComponent } from './components/favorit-nav-bar/favorit-nav-bar.component';
import { NotificationNavBarComponent } from './components/notification-nav-bar/notification-nav-bar.component';
import { UserNavBarComponent } from './components/user-nav-bar/user-nav-bar.component';
import { InboxNavBarComponent } from './components/inbox-nav-bar/inbox-nav-bar.component';
import { SearchNavBarComponent } from './components/search-nav-bar/search-nav-bar.component';
import { FavoritNavBarItemComponent } from './components/favorit-nav-bar/favorit-nav-bar-item/favorit-nav-bar-item.component';
import { MessagesSideMenuComponent } from './components/messages-side-menu/messages-side-menu.component';
import { LayoutService } from './shared/layout.service';
import { InboxNavBarItemComponent } from './components/inbox-nav-bar/inbox-nav-bar-item/inbox-nav-bar-item.component';



@NgModule({
  declarations: [
    PagesLayoutComponent,
    PagesTopNavBarComponent,
    PagesSideMenuComponent,
    NavigationDropDownComponent,
    NavigationItemComponent,
    NavigationComponent,
    SideBarExpandBtnComponent,
    FavoritNavBarComponent,
    NotificationNavBarComponent,
    UserNavBarComponent,
    InboxNavBarComponent,
    SearchNavBarComponent,
    FavoritNavBarItemComponent,
    MessagesSideMenuComponent,
    InboxNavBarItemComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MaterialModule
  ],
  exports:[
    PagesLayoutComponent,
    PagesTopNavBarComponent 
  ],
  providers:[NavigationService,LayoutService]
})
export class CoreModule { }
