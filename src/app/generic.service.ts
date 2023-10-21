import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of, switchMap, throwError } from 'rxjs';
import { Result, Product } from './result';

@Injectable({
  providedIn: 'root'
})
export class GenericService {

  constructor(private http: HttpClient) { }

  get<T>(controller: string) {
    return this.http.get<Result<T>>(`api/${controller}`).pipe(
      // switchMap(() => throwError(() => ['DbConnection failed'])),
      catchError((e) => of(<Result<T>>{ isSuccess: false, messages: [`An unexpected error occurred: ${e}`] }))
    );
  }
}
