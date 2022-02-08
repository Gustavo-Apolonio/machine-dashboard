import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-step-chart',
  templateUrl: './step-chart.component.html',
  styleUrls: ['./step-chart.component.scss'],
})
export class StepChartComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  stepData = [
    {
      name: 'Machine 1',
      value: 0.01,
    },
    {
      name: 'Machine 2',
      value: 5,
    },
    {
      name: 'Machine 3',
      value: 3,
    },
    {
      name: 'Machine 4',
      value: 2.75,
    },
    {
      name: 'Machine 5',
      value: 4,
    },
  ];
}
