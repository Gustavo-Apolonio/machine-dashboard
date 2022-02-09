import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-speed-chart',
  templateUrl: './speed-chart.component.html',
  styleUrls: ['./speed-chart.component.scss'],
})
export class SpeedChartComponent implements OnInit {
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
