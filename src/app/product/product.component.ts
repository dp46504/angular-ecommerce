import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductsService } from '../products.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass'],
})
export class ProductComponent {
  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService,
    private cartService: CartService,
    private snackBar: MatSnackBar
  ) {}

  productId: number | null = null;
  product$: Observable<any> = new Observable<any>();

  ngOnInit() {
    this.productId = parseInt(
      this.activatedRoute.snapshot.paramMap.get('product_id')!
    );
    this.product$ = this.productsService.getProduct(this.productId);
  }

  getQuantityOfAnItemFromCart(itemId: number) {
    return this.cartService.getQuantityOfAnItemFromCart(itemId);
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
}
