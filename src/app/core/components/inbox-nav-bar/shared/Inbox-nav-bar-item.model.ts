export class InboxSideBarItem {
  id: string;
  title: string;
  time: string;
  description: string;
  header: string;

  constructor(inboxSideBarItem: any = {}) {
    this.id=inboxSideBarItem.id;
    this.title=inboxSideBarItem.title;
    this.time=inboxSideBarItem.time;
    this.description=inboxSideBarItem.description;
    this.header=inboxSideBarItem.header;
  }
}
