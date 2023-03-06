import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductsService } from '../products.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.sass'],
})
export class CategoryComponent {
  constructor(
    private productService: ProductsService,
    private activatedRoute: ActivatedRoute
  ) {}

  productsResult$: Observable<any> = new Observable<any>();

  pageSizeValues: number[] = [2, 3, 4, 5];
  pageSize: number = 5;
  page: number = 1;
  category: string = '';
  pageEvent: PageEvent = new PageEvent();

  ngOnInit(): void {
    this.category = this.activatedRoute.snapshot.paramMap.get('category')!;
    this.productsResult$ = this.productService.getCategoryProducts(
      this.pageSize,
      this.category
    );
  }

  refetch() {
    this.productsResult$ = this.productService.getCategoryProducts(
      this.pageSize,
      this.category,
      this.page
    );
  }
}
