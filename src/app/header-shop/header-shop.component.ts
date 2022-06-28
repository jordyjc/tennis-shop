import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-shop',
  templateUrl: './header-shop.component.html',
  styleUrls: ['./header-shop.component.scss']
})
export class HeaderShopComponent {
  headerDescription = 'Las mejores raquetas para jugar';
  headerSpan = 'Tennis'
  buttonLabel = 'acerca de nosotros'
}
