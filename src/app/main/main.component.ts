import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.styl']
})
export class MainComponent implements OnInit {
  btnTitle = 'Добавить акцию';
  constructor() { }

  ngOnInit() {
  }

}
