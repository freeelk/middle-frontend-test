import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Book} from './models/book';
import {catchError,  map} from 'rxjs/internal/operators';

/**
 * Получение данных с сервера
 */
@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private url = 'https://fakerestapi.azurewebsites.net/api/Books';

  constructor(private http: HttpClient) { }

  getList(): Observable<Book[] | never> {
    return this.http.get(this.url).pipe(
      map(data => {
        const d = data as Book[];
        d.map(book => {
          const b: Book = book as Book;
          b.PublishDate = new Date(b.PublishDate);
          return b;
        });
        return d;
      }),
      catchError(this.handleError));
  }

  /**
   * Обработка ошибок
   */
  handleError(errorResponse: HttpErrorResponse): Observable<never> {
    return throwError(errorResponse.message);
  }

}
