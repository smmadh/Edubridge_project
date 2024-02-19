import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterUserComponent } from './pages/register-user/register-user.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { MenupageComponent } from './pages/menupage/menupage.component';
import { CartComponent } from './cart/cart.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { PaymentConfirmationComponent } from './payment-confirmation/payment-confirmation.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'menu',component:MenuComponent},
  {path:'register-user',component:RegisterUserComponent},
  {path:'menu/:id',component:MenupageComponent},
  {path:'cart',component:CartComponent},
  {path:'delivery',component:DeliveryComponent},
  {path:'Payment-Confirmation',component:PaymentConfirmationComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactUsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
