import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsService } from '../products.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass'],
})
export class CartComponent {
  constructor(
    private productsService: ProductsService,
    private cartService: CartService
  ) {}

  products$: Observable<any> = new Observable<any>();
  displayedColumns: string[] = ['id', 'name', 'quantity', 'price', 'delete'];

  ngOnInit() {
    this.products$ = this.productsService.getProductsByIds(
      this.cartService.getCartItemsIds()
    );
  }

  refetch() {
    this.products$ = this.productsService.getProductsByIds(
      this.cartService.getCartItemsIds()
    );
  }

  removeItemFromCart(itemId: number) {
    this.cartService.deleteItem(itemId);
    this.refetch();
  }

  stringify(product: any) {
    return JSON.stringify(product);
  }

  getTotalCost(products: any) {
    return products.reduce((acc: any, curr: any) => {
      return acc + curr.price * curr.quantity;
    }, 0);
  }

  removeOneOfAnItemFromCart(itemId: number) {
    this.cartService.removeItem(itemId);
  }
  addOneMoreOfAnItemToCart(itemId: number) {
    this.cartService.addItem(itemId);
  }

  wrapDataToTableFormat(products: any): any {
    return products.map((item: any) => {
      return {
        ...item,
        quantity: this.cartService.getQuantityOfAnItemFromCart(item.id),
      };
    });
  }
}
