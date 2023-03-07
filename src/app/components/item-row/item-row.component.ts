import { Component, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-item-row',
  templateUrl: './item-row.component.html',
  styleUrls: ['./item-row.component.sass'],
})
export class ItemRowComponent {
  @Input()
  product: any = {};

  constructor(
    private cartService: CartService,
    private snackBar: MatSnackBar
  ) {}

  addItemToCart(itemId: number): void {
    this.cartService.addItem(itemId);
    this.snackBar.open('Added item to cart', undefined, { duration: 1000 });
  }

  removeItemFromCart(itemId: number) {
    this.cartService.removeItem(itemId);
    this.snackBar.open('Removed item from cart', undefined, { duration: 1000 });
  }

  isItemInCart(itemId: number) {
    return this.cartService.isItemInCart(itemId);
  }

  getQuantityOfAnItemFromCart(itemId: number) {
    return this.cartService.getQuantityOfAnItemFromCart(itemId);
  }

  addOrRemoveItemFromCart(itemId: number) {
    this.isItemInCart(itemId)
      ? this.cartService.removeItem(itemId)
      : this.cartService.addItem(itemId);
  }

  getProductRatingDisplayValue(rating: number) {
    let nFullStars = Math.floor(rating);
    let halfStars = rating - nFullStars > 0.5 ? true : false;
    let nEmptyStars = halfStars ? 5 - (nFullStars + 1) : 5 - nFullStars;
    let result = '';
    for (let i = 0; i < nFullStars; i++) {
      result += '<mat-icon>star</mat-icon>';
    }
    if (halfStars) result += '<mat-icon>star_half</mat-icon>';
    for (let i = 0; i < nEmptyStars; i++) {
      result += '<mat-icon>star_border</mat-icon>';
    }
  }
}
