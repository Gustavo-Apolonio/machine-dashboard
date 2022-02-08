import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-speed-chart',
  templateUrl: './speed-chart.component.html',
  styleUrls: ['./speed-chart.component.scss'],
})
export class SpeedChartComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  speedData = [
    {
      name: 'Machine 1',
      value: 1500,
    },
    {
      name: 'Machine 2',
      value: 3000,
    },
    {
      name: 'Machine 3',
      value: 1750,
    },
    {
      name: 'Machine 4',
      value: 3000,
    },
    {
      name: 'Machine 5',
      value: 4500,
    },
  ];
}
