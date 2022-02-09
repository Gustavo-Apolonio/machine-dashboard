import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-date-table',
  templateUrl: './date-table.component.html',
  styleUrls: ['./date-table.component.scss'],
})
export class DateTableComponent implements OnInit {
  constructor() {}

  @Input() data = [
    {
      id: 0,
      name: 'Machine 0',
      date: '00/00/0000',
      time: '00:00:00',
    },
  ];

  ngOnInit(): void {}
}
