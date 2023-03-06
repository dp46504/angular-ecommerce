import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  url: string = 'https://dummyjson.com'

  getProducts(pageSize: number = 10, page: number = 1): Observable<any> {
    let result = this.http.get(`${this.url}/products?limit=${pageSize}${page!=1?`&skip=${(page-1)*pageSize}`:""}`)
    return result
  }

  
  getCategoryProducts(pageSize: number = 10, category: string, page: number = 1): Observable<any> {
    let result = this.http.get(`${this.url}/products/category/${category}?limit=${pageSize}${page!=1?`&skip=${(page-1)*pageSize}`:""}`)
    return result
  }

  getCategories(){
    return this.http.get<string[]>(`${this.url}/products/categories`)
  }

  getProduct(productId: number){
    return this.http.get(`${this.url}/products/${productId}`)
  }

}
