import {Component, Input, OnInit} from '@angular/core';
import {Book} from '../../models/book';

@Component({
  selector: 'app-columns-text',
  templateUrl: './columns-text.component.html',
  styleUrls: ['./columns-text.component.css']
})
export class ColumnsTextComponent implements OnInit {
  @Input() book: Book;
  @Input() columnsCount: number;

  constructor() { }

  ngOnInit() {
    this.getColumnsStyles();
  }

  getColumnsStyles() {
    return {
      'column-count': this.columnsCount,
      '-moz-column-count': this.columnsCount,
      '-webkit-column-count': this.columnsCount
    };
  }

}
