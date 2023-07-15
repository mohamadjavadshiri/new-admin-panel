import { Component, Input } from '@angular/core';
import { InboxSideBarItem } from '../shared/Inbox-nav-bar-item.model';

@Component({
  selector: 'app-inbox-nav-bar-item',
  templateUrl: './inbox-nav-bar-item.component.html',
  styleUrls: ['./inbox-nav-bar-item.component.scss']
})
export class InboxNavBarItemComponent {

  @Input() inboxItem:InboxSideBarItem=new InboxSideBarItem();

}
