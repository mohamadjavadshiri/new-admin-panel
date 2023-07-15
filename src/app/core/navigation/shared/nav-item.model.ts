export class NavItem {
  id: string;
  title: string;
  icon: string;
  children: NavItem[];
  url: string;

  type: 'item' | 'dropdown';

  constructor(navItem: any = {}) {
    this.id = navItem.id;
    this.title = navItem.title;
    this.icon = navItem.icon;
    this.children = navItem.children || [];
    this.url = navItem.url;

    this.type = this.children.length > 0 ? 'dropdown' : 'item';
  }
}
