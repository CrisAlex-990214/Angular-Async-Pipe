import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Product, Result } from './result';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  createDb(): { product: Result<Product> } {
    // return { product: { isSuccess: true, value: { id: 1, price: 20, name: 'T-shirt'} }}
    return { product: { isSuccess: false, messages: ['The product is out of stock'] } }
  }
}
