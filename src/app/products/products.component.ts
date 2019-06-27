import { Component, OnInit } from '@angular/core';
import {Book} from '../models/book';
import {BooksService} from '../books.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  books: Book[];

  errorMessage = '';
  dataRetrieveError = false;

  constructor(private booksService: BooksService) { }

  ngOnInit() {
    this.booksService.getList()
      .subscribe((response) => {
          this.books = response;
          this.errorMessage = '';
          this.dataRetrieveError = false;
        },
        error => {
          this.errorMessage = error;
          this.dataRetrieveError = true;
        });
  }

}
