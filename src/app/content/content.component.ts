import {
  Component,
  OnInit,
  HostListener,
  Input,
  SimpleChange,
} from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  constructor() {}

  public innerWidth: any;
  public innerHeight: any;
  public fiftyWidth: any;
  public fiftyHeight: any;
  public speedData: any;
  public temperatureData: any;
  public stepData: any;
  public tableData: any;

  @Input() mock = [
    {
      id: 0,
      name: 'Machine 0',
      speed: 0,
      temperature: 0,
      step: 0.0,
      registry_date: '00/00/0000',
      registry_time: '00:00:00',
    },
  ];

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight;

    this.fiftyWidth = this.innerWidth / 2 - 10;
    this.fiftyHeight = (this.innerHeight - (56 + 40)) / 2 - 10;
  }

  ngOnChanges() {
    this.speedData = this.mock.map((machine) => {
      return {
        name: machine.name,
        value: machine.speed,
      };
    });
    this.temperatureData = this.mock.map((machine) => {
      return {
        name: machine.name,
        value: machine.temperature,
      };
    });
    this.stepData = this.mock.map((machine) => {
      return {
        name: machine.name,
        value: machine.step,
      };
    });
    this.tableData = this.mock.map((machine) => {
      return {
        id: machine.id,
        name: machine.name,
        date: machine.registry_date,
        time: machine.registry_time,
      };
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight;

    this.fiftyWidth = this.innerWidth / 2 - 10;
    this.fiftyHeight = (this.innerHeight - (56 + 40)) / 2 - 10;
  }
}
