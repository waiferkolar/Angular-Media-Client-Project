export class Cart {

  static db = 'cartdb';

  static getDBItems() {
    const items = localStorage.getItem(db);
    if (items == null) {
      return [];
    } else {
      return JSON.parse(items);
    }
  }

  static saveDBItem(product) {
    let items = this.getDBItems();
    let ind = items.findIndex(item => item._id == product._id);
    if (ind == -1) {
      product['count'] = 1;
      items.push(product);
    } else {
      let pro = items[ind];
      pro.count = pro.count + 1;
    }
    console.log(items);
    localStorage.removeItem(db);
    localStorage.setItem(db, JSON.stringify(items));
  }
}
