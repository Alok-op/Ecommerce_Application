import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeautyComponent } from './beauty/beauty.component';
import { HomeAndLivingComponent } from './home-and-living/home-and-living.component';
import { KidsComponent } from './kids/kids.component';
import { MensComponent } from './mens/mens.component';
import { WomenComponent } from './women/women.component';

const routes: Routes = [
  {
    path: "women",
    component: WomenComponent
  },
  {
    path: "men",
    component: MensComponent
  },
  {
    path: "kids",
    component: KidsComponent
  },
  {
    path: "home-&-living",
    component: HomeAndLivingComponent
  },
  {
    path: "beauty",
    component: BeautyComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
