import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from './components/carousel/carousel.component';

const routes: Routes = [
  { path: "", component: CarouselComponent },
  { path: "products", loadChildren: () => import("./modules/products/products.module").then(m => m.ProductsModule) },
  { path: "profile", loadChildren: () => import("./modules/profile/profile.module").then(m => m.ProfileModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
