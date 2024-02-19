import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { RegisterUserComponent } from './pages/register-user/register-user.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { MenupageComponent } from './pages/menupage/menupage.component';
import { PaymentConfirmationComponent } from './payment-confirmation/payment-confirmation.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './pages/about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    RegisterUserComponent,
    NavbarComponent,
    FooterComponent,
    CartComponent,
    MenupageComponent,
    PaymentConfirmationComponent,
    DeliveryComponent,
    AboutComponent,
    ContactUsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
