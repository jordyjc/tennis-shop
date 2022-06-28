import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ContentShopComponent } from './content-shop/content-shop.component';
import { HeaderShopComponent } from './header-shop/header-shop.component';
import { MatIconModule } from '@angular/material/icon'
import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselShopComponent } from './carousel-shop/carousel-shop.component';
import { FooterShopComponent } from './footer-shop/footer-shop.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderShopComponent,
    ContentShopComponent,
    CarouselShopComponent,
    FooterShopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
