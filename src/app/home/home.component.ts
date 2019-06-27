import {Component, OnInit} from '@angular/core';
import {BooksService} from '../books.service';
import {Book} from '../models/book';

/**
 * Страница "home"
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  /**
   * Данные, полученные с сервера
   */
  books: Book[];

  /**
   * Сообщение об ошибке
   */
  errorMessage = '';

  /**
   * Флаг ошибки
   */
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
