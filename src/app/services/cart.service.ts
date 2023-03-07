import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems: { itemId: number; quantity: number }[] = [];

  constructor() {
    let ls = localStorage.getItem('cartItems')!;
    if (!ls) {
      localStorage.setItem('cartItems', JSON.stringify([]));
    } else {
      this.cartItems = JSON.parse(ls);
    }
  }

  addItem(itemId: number) {
    let existingEntry = this.cartItems.filter(
      (item) => item.itemId === itemId
    )[0];
    if (existingEntry) {
      let idx = this.cartItems.indexOf(existingEntry);
      this.cartItems[idx]['quantity'] += 1;
      localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    } else {
      this.cartItems.push({ itemId: itemId, quantity: 1 });
      localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    }
  }

  removeItem(itemIdToRemove: number) {
    let existingEntry = this.cartItems.filter(
      (item) => item.itemId === itemIdToRemove
    )[0];
    if (existingEntry.quantity === 1) {
      this.cartItems = this.cartItems.filter(
        (item) => item.itemId !== itemIdToRemove
      );
      localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    } else {
      let idx = this.cartItems.indexOf(existingEntry);
      this.cartItems[idx]['quantity'] -= 1;
      localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    }
  }

  isItemInCart(itemId: number) {
    let existingEntry = this.cartItems.filter(
      (item) => item.itemId === itemId
    )[0];
    if (existingEntry) return true;
    return false;
  }

  getQuantityOfAnItemFromCart(itemId: number) {
    let existingEntry = this.cartItems.filter(
      (item) => item.itemId === itemId
    )[0];
    return existingEntry ? existingEntry.quantity : 0;
  }

  getNOfItemsInCart() {
    return this.cartItems.length;
  }
}
