import { Component, OnInit, HostListener } from '@angular/core';

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

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight;

    this.fiftyWidth = this.innerWidth / 2 - 10;
    this.fiftyHeight = (this.innerHeight - (56 + 40)) / 2 - 10;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight;

    this.fiftyWidth = this.innerWidth / 2 - 10;
    this.fiftyHeight = (this.innerHeight - (56 + 40)) / 2 - 10;
  }
}
