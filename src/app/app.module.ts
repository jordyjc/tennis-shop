import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselShopComponent } from './carousel-shop/carousel-shop.component';
import { ContentShopComponent } from './content-shop/content-shop.component';
import { FooterShopComponent } from './footer-shop/footer-shop.component';
import { HeaderShopComponent } from './header-shop/header-shop.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderShopComponent,
    ContentShopComponent,
    CarouselShopComponent,
    FooterShopComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatIconModule,
    MatFormFieldModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
