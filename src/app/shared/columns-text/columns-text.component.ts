import {Component, Input, OnInit} from '@angular/core';
import {Book} from '../../models/book';

/**
 * Отображение элемента данных, полученных с сервера
 */
@Component({
  selector: 'app-columns-text',
  templateUrl: './columns-text.component.html',
  styleUrls: ['./columns-text.component.css']
})
export class ColumnsTextComponent implements OnInit {
  /**
   * Данные
   */
  @Input() book: Book;

  /**
   * Количество колонок для отображения текста
   */
  @Input() columnsCount: number;

  constructor() { }

  ngOnInit() {
    this.getColumnsStyles();
  }

  /**
   * Формирует стили, определяющие количество колонок для отображения текста
   */
  getColumnsStyles() {
    return {
      'column-count': this.columnsCount,
      '-moz-column-count': this.columnsCount,
      '-webkit-column-count': this.columnsCount
    };
  }

}
