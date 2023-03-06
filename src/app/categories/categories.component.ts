import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.sass'],
})
export class CategoriesComponent {
  constructor(
    private productsService: ProductsService,
    private router: Router
  ) {}

  categories$: Observable<string[]> = new Observable<string[]>();

  ngOnInit() {
    this.categories$ = this.productsService.getCategories();
  }

  redirect(category: string) {
    this.router.navigate(['/products', category]);
  }

  getIcon(category: string) {
    switch (category) {
      case 'smartphones':
        return 'phone_iphone';
      case 'laptops':
        return 'laptop';
      case 'fragrances':
        return 'local_florist';
      case 'skincare':
        return 'spa';
      case 'groceries':
        return 'local_grocery_store';
      case 'home-decorations':
        return 'home';
      case 'furniture':
        return 'weekend';
      case 'tops':
        return 'person';
      case 'womens-dresses':
        return 'person';
      case 'womens-shoes':
        return 'directions_walk';
      case 'mens-shirts':
        return 'person';
      case 'mens-shoes':
        return 'directions_walk';
      case 'mens-watches':
        return 'watch_later';
      case 'womens-watches':
        return 'watch_later';
      case 'womens-bags':
        return 'work';
      case 'womens-jewelery':
        return 'stars';
      case 'sunglasses':
        return 'remove_red_eye';
      case 'automotive':
        return 'directions_car';
      case 'motorcycle':
        return 'directions_bike';
      case 'lighting':
        return 'highlight';
      default:
        return 'home';
    }
  }
}
