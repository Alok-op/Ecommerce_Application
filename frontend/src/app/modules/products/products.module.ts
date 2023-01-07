import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { MensComponent } from './mens/mens.component';
import { WomenComponent } from './women/women.component';
import { KidsComponent } from './kids/kids.component';
import { HomeAndLivingComponent } from './home-and-living/home-and-living.component';
import { BeautyComponent } from './beauty/beauty.component';


@NgModule({
  declarations: [
    MensComponent,
    WomenComponent,
    KidsComponent,
    HomeAndLivingComponent,
    BeautyComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
