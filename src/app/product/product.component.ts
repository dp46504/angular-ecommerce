import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent {

constructor(private activatedRoute: ActivatedRoute, private productsService: ProductsService){}


productId: number|null = null;
product$: Observable<any> = new Observable<any>();

ngOnInit(){
  this.productId = parseInt(this.activatedRoute.snapshot.paramMap.get('product_id')!)
  this.product$ = this.productsService.getProduct(this.productId)
}

}
