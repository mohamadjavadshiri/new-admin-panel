import { Component, OnInit } from '@angular/core';
import { InboxSideBarItem } from './shared/Inbox-nav-bar-item.model';

@Component({
  selector: 'app-inbox-nav-bar',
  templateUrl: './inbox-nav-bar.component.html',
  styleUrls: ['./inbox-nav-bar.component.scss'],
})
export class InboxNavBarComponent implements OnInit {
  

  inboxList:InboxSideBarItem[]=[new InboxSideBarItem({title:'Kamand Soleimani',header:'J',description:'I need some access...',time:'Jan 12,12:31 pm'}),new InboxSideBarItem({title:'Kamand Soleimani',header:'J',description:'I need some access...',time:'Jan 12,12:31 pm'}),new InboxSideBarItem({title:'Kamand Soleimani',header:'J',description:'I need some access...',time:'Jan 12,12:31 pm'}) ];
  
  constructor() {}

  ngOnInit(): void {}
}
