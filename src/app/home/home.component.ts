import { Component, OnInit } from '@angular/core';
import {BooksService} from '../books.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  books;

  constructor(private booksService: BooksService) { }

  ngOnInit() {
    this.booksService.getList()
      .subscribe((response) => {
          this.books = response;
        },
        error => {
          console.log(error);
        });
  }
}
