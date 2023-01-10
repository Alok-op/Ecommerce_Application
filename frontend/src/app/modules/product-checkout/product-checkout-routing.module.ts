import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderReviewComponent } from './order-review/order-review.component';
import { PaymentComponent } from './payment/payment.component';
import { ShippingDetailsComponent } from './shipping-details/shipping-details.component';

const routes: Routes = [
  {
    path: "",
    component: CheckoutComponent,
    children: [
      {
        path: "shipping-details",
        component: ShippingDetailsComponent
      },
      {
        path: "order-review",
        component: OrderReviewComponent
      },
      {
        path: "payment",
        component: PaymentComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductCheckoutRoutingModule { }
