import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MatInputModule } from '@angular/material/input';
import { CategoryComponent } from './category/category.component';
import { MenuComponent } from './menu/menu.component';
import { CategoriesComponent } from './categories/categories.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductComponent } from './product/product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { NgxSkeletonModule } from 'ngx-skeleton';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ItemRowComponent } from './components/item-row/item-row.component';
import { RowItemSkeletonComponent } from './skeletons/row-item-skeleton/row-item-skeleton.component';
import { CategoriesSkeletonComponent } from './skeletons/categories-skeleton/categories-skeleton.component';
import { CartComponent } from './cart/cart.component';
import { CartItemRowComponent } from './components/cart-item-row/cart-item-row.component';
import { MatTableModule } from '@angular/material/table';
import { CartTableSkeletonComponent } from './skeletons/cart-table-skeleton/cart-table-skeleton.component';
import { MtxTooltipModule } from '@ng-matero/extensions/tooltip';
import { ProductSkeletonComponent } from './skeletons/product-skeleton/product-skeleton.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    CategoryComponent,
    MenuComponent,
    CategoriesComponent,
    NotfoundComponent,
    ProductComponent,
    ItemRowComponent,
    RowItemSkeletonComponent,
    CategoriesSkeletonComponent,
    CartComponent,
    CartItemRowComponent,
    CartTableSkeletonComponent,
    ProductSkeletonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxSkeletonLoaderModule.forRoot({
      theme: {
        // Enabliong theme combination
        extendsFromRoot: true,
        // ... list of CSS theme attributes
      },
    }),
    MatTableModule,
    NgxSkeletonModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatProgressBarModule,
    MatSlideToggleModule,
    MatPaginatorModule,
    MatSelectModule,
    MatInputModule,
    MatChipsModule,
    MatBadgeModule,
    MatSnackBarModule,
    MtxTooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
