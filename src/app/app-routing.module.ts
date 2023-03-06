import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryComponent } from './category/category.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path:"homepage", pathMatch:"full", component: HomepageComponent},
  {path: "products/:category", component: CategoryComponent},
  {path: "products/product/:product_id", component: ProductComponent},
  {path: "categories", component: CategoriesComponent},
  {path:"404", component: NotfoundComponent},
  {path: "**", redirectTo: "404"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
