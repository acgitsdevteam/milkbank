import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-body',
  templateUrl: './dashboard-body.component.html',
  styleUrls: ['./dashboard-body.component.css']
})
export class DashboardBodyComponent {
  cards = [
    { id: 1, text: 'Hello Satya', imgSrc: '...' },
    { id: 2, text: 'Hello Satya', imgSrc: '...' },
    { id: 3, text: 'Hello Satya', imgSrc: '...' }
    // Add more cards as needed
  ];

}
