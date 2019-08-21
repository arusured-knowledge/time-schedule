import {Component, Input, OnInit} from '@angular/core';
import {ItimeBox} from '../interfaces/itime-box';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent implements OnInit {
  @Input()
  box: ItimeBox;

  constructor() { }

  ngOnInit() {
  }

}
