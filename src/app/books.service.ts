import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private url = 'https://fakerestapi.azurewebsites.net/api/Books';

  constructor(private http: HttpClient) { }

  getList() {
    return this.http.get(this.url);
  }

}
