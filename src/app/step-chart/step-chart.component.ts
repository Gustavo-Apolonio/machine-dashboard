import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-step-chart',
  templateUrl: './step-chart.component.html',
  styleUrls: ['./step-chart.component.scss'],
})
export class StepChartComponent implements OnInit {
  constructor() {}

  @Input() width = 900;
  @Input() height = 350;

  @Input() data = [
    {
      name: 'Machine 0',
      value: 0.0,
    },
  ];

  ngOnInit(): void {}
}
