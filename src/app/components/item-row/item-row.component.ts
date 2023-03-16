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
  fullStars: number[] = [];
  halfStar: number = 0;
  emptyStars: number[] = [];
  highlightBoolean: boolean = false;

  constructor(
    private cartService: CartService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    let nOfStarsArray: number[] = this.getProductRatingDisplayValue(
      this.product.rating
    );
    this.fullStars = Array(nOfStarsArray[0]).fill(0);
    this.halfStar = nOfStarsArray[1];
    this.emptyStars = Array(nOfStarsArray[2]).fill(0);
    let res = Math.random();
    console.log(res);
    if (res > 0.8) {
      this.highlightBoolean = true;
    }
  }

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

  getProductRatingDisplayValue(rating: number): number[] {
    let nFullStars = Math.floor(rating);
    let halfStars = rating - nFullStars > 0.5 ? true : false;
    let nEmptyStars = halfStars ? 5 - (nFullStars + 1) : 5 - nFullStars;
    let result = [0, 0, 0];
    for (let i = 0; i < nFullStars; i++) {
      result[0] += 1;
    }
    if (halfStars) result[1] += 1;
    for (let i = 0; i < nEmptyStars; i++) {
      result[2] += 1;
    }
    return result;
  }
}
