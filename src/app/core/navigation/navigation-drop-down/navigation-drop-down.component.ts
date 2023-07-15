import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { fromEvent, debounceTime } from 'rxjs';
import { LayoutService } from '../../shared/layout.service';
import { NavItem } from '../shared/nav-item.model';

@Component({
  selector: 'app-navigation-drop-down',
  templateUrl: './navigation-drop-down.component.html',
  styleUrls: ['./navigation-drop-down.component.scss'],
})
export class NavigationDropDownComponent implements OnInit, AfterViewInit {
  @Input() naveItem: NavItem = new NavItem({});
  @Input() isFirstLevelMenu: boolean=false;
  isOpen: boolean = false;
  isDeactiveOpenMode = false;
  isShowLittleArrowIcon = true;
  constructor(private layoutService: LayoutService) {}

  ngOnInit(): void {
    if(this.isFirstLevelMenu){
      this.layoutService.onSideMenuToggle.subscribe((value: boolean=false) => {
        this.isShowLittleArrowIcon = !value;
      });
    }
   
  }

  setIsOpenDropMenu(isOpen: boolean = false) {
    if (isOpen == false) {
      this.isDeactiveOpenMode = false;
      this.closeByDelay();
    } else {
      this.isDeactiveOpenMode = true;
      this.isOpen = isOpen;
    }
  }

  closeByDelay() {
    setTimeout(() => {
      if (this.isDeactiveOpenMode) return;
      this.isOpen = false;
      this.isDeactiveOpenMode = false;
    }, 30);
  }
  ngAfterViewInit() {
    // fromEvent(this.button.nativeElement, 'mouseenter')
    //   .pipe(
    //     debounceTime(100) // 2 seconds
    //   )
    //   .subscribe(() => {
    //     this.isOpen = true;
    //   });
    // fromEvent(this.button.nativeElement, 'mouseleave')
    //   .pipe(
    //     debounceTime(100) // 2 seconds
    //   )
    //   .subscribe(() => {
    //     this.isOpen = false;
    //   });
  }
}
