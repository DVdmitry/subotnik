import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-event-published',
  templateUrl: './create-event-published.component.html',
  styleUrls: ['./create-event-published.component.styl']
})
export class CreateEventPublishedComponent implements OnInit {
  references = [
    {name: 'Перейти на страницу акции', ref: '/publish-event-page'},
    {name: 'Поделиться акцией', ref: '/publish-event-page'},
    {name: 'Вернуться на главную страницу', ref: '/main'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
