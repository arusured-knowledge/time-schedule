import {Component, OnInit} from '@angular/core';
import {ItimeBox} from '../interfaces/itime-box';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  boxes: ItimeBox[] = [
    {type: 'active', length: 20, name: 'あんたがったどこさ'},
    {type: 'inactive', length: 15, name: ''},
    {type: 'active', length: 60, name: '太郎'},
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
