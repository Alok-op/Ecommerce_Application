import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductCheckoutRoutingModule } from './product-checkout-routing.module';
import { CheckoutComponent } from './checkout/checkout.component';
import { ShippingDetailsComponent } from './shipping-details/shipping-details.component';
import { OrderReviewComponent } from './order-review/order-review.component';
import { PaymentComponent } from './payment/payment.component';


@NgModule({
  declarations: [
    CheckoutComponent,
    ShippingDetailsComponent,
    OrderReviewComponent,
    PaymentComponent
  ],
  imports: [
    CommonModule,
    ProductCheckoutRoutingModule
  ]
})
export class ProductCheckoutModule { }
