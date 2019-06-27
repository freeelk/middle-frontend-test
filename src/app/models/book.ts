/**
 * Структура элемента данных, получаемых с сервера
 */
export interface Book {
  ID: number;
  Title: string;
  Description: string;
  Excerpt: string;
  PageCount: number;
  PublishDate: Date;
}
