import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-shop',
  templateUrl: './content-shop.component.html',
  styleUrls: ['./content-shop.component.scss'],
})
export class ContentShopComponent {
  tennis = 'tennis';
  description = 'Raquetas.Accesorios.Pelotas.';
  history =
    'Conoce nuestras raquetas y aprende a jugar Tennis cómo un profesional.';
    buttonHistory = 'historia'
}
