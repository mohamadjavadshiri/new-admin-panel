import { AfterViewInit, Component, OnInit } from '@angular/core';
import { LayoutService } from '../../shared/layout.service';

@Component({
  selector: 'app-pages-side-menu',
  templateUrl: './pages-side-menu.component.html',
  styleUrls: ['./pages-side-menu.component.scss'],
})
export class PagesSideMenuComponent implements OnInit, AfterViewInit {
  isExpanded: boolean = false;
  isDarkmode = false;
  constructor(private layoutService: LayoutService) {}

  ngOnInit(): void {}

  ngAfterViewInit() {

  }

  onExpanToggle(isExpanded: boolean = false) {
    this.isExpanded = isExpanded;
  }

  toggleDarkMode() {
    this.isDarkmode = !this.isDarkmode;
    if(this.isDarkmode){
      document.body.classList.add('dark');
    }
    if(!this.isDarkmode){
      document.body.classList.remove('dark');
    }
  }
}
