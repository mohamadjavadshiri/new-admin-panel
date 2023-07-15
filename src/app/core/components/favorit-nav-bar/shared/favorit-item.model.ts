export class FavoritItem {
  id: string;
  icon: string;
  title: string;

  constructor(favortiItem: any = {}) {
    this.id=favortiItem.id;
    this.icon=favortiItem.icon;
    this.title=favortiItem.title;
  }
}
