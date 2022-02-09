import { Component, OnInit } from '@angular/core';

import { MockData, MockChanged } from './mockData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Machine Dashboard';

  public mockData = MockData;

  mock() {
    setTimeout(() => {
      this.mockData = MockData;
      this.changeMock();
    }, 5000);
  }

  changeMock() {
    setTimeout(() => {
      this.mockData = MockChanged;
      this.mock();
    }, 5000);
  }

  ngOnInit(): void {
    this.changeMock();
  }
}
