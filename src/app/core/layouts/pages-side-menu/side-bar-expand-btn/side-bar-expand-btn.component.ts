import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LayoutService } from 'src/app/core/shared/layout.service';

@Component({
  selector: 'app-side-bar-expand-btn',
  templateUrl: './side-bar-expand-btn.component.html',
  styleUrls: ['./side-bar-expand-btn.component.scss'],
})
export class SideBarExpandBtnComponent {
  @Input() isExpanded: boolean = false;
  @Output() onExpanToggle: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private layoutService: LayoutService){

  }
  onExpandBtnClick() {
    this.isExpanded = !this.isExpanded;
    this.onExpanToggle.emit(this.isExpanded);
    this.layoutService.onSideMenuToggle.next(this.isExpanded)
  }
}
