import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from './components/carousel/carousel.component';

const routes: Routes = [
  { path: "", component: CarouselComponent },
  { path: "products", loadChildren: () => import("./modules/products/products.module").then(m => m.ProductsModule) },
  { path: "profile", loadChildren: () => import("./modules/profile/profile.module").then(m => m.ProfileModule) },
  { path: "shopping-cart", loadChildren: () => import("./modules/shopping-cart/shopping-cart.module").then(m => m.ShoppingCartModule) },
  { path: "checkout", loadChildren: () => import("./modules/product-checkout/product-checkout.module").then(m => m.ProductCheckoutModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
