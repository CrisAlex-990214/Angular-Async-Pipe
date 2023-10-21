import { Component } from '@angular/core';
import { GenericService } from './generic.service';
import { Product } from './result';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {

  result$ = this.service.get<Product>('product');

  constructor(private service: GenericService) { }
}
