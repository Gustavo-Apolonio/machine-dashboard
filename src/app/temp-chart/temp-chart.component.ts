import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp-chart',
  templateUrl: './temp-chart.component.html',
  styleUrls: ['./temp-chart.component.scss'],
})
export class TempChartComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  tempData = [
    {
      name: 'Machine 1',
      value: 5,
    },
    {
      name: 'Machine 2',
      value: 15,
    },
    {
      name: 'Machine 3',
      value: 27,
    },
    {
      name: 'Machine 4',
      value: 69,
    },
    {
      name: 'Machine 5',
      value: 80,
    },
  ];
}
