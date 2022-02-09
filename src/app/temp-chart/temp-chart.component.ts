import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-temp-chart',
  templateUrl: './temp-chart.component.html',
  styleUrls: ['./temp-chart.component.scss'],
})
export class TempChartComponent implements OnInit {
  constructor() {}

  @Input() width = 900;
  @Input() height = 350;

  @Input() data = [
    {
      name: 'Machine 0',
      value: 0,
    },
  ];

  ngOnInit(): void {}
}
