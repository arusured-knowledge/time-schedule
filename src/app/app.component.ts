import { Component } from '@angular/core';
import { IInfo } from './interfaces/iinfo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'time-schedule';
  info: IInfo[] = [
    {
      startTime: 1000,
      workingHours: 60,
      name: 'Tanaka'
    },
    {
      startTime: 1300,
      workingHours: 150,
      name: 'Yamada'
    }
  ];

  constructor() {}
}
