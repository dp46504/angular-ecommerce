import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass'],
})
export class CartComponent {
  constructor(private productsService: ProductsService) {}

  products$: Observable<any> = new Observable<any>();

  ngOnInit() {
    this.products$ = this.productsService.getProductsByIds([1, 2, 3, 4]);
  }

  stringify(product: any) {
    return JSON.stringify(product);
  }
}
