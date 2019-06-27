import {Component, Input, OnInit} from '@angular/core';

/**
 * Отображение сообщения об ошибке
 */
@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  @Input() show: boolean;
  @Input() message: string;
  constructor() { }

  ngOnInit() {
  }

}
