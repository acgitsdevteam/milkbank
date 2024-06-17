import { Component } from '@angular/core';

@Component({
  selector: 'app-district-list',
  templateUrl: './district-list.component.html',
  styleUrls: ['./district-list.component.css'],
})
export class DistrictListComponent {
  data = [
    {
      state: 'AP',
      district: 'Eluru',
    },
    {
      state: 'TG',
      district: 'Hanumakonda',
    },
    {
      state: 'AP',
      district: 'Krishna',
    },
    {
      state: 'AP',
      district: 'East Godavari',
    },
    {
      state: 'Karnataka',
      district: 'Chamarajanagar',
    },
    {
      state: 'TG',
      district: 'Jagitial',
    },
  ];

  // Search functionality
  searchTerm: string = '';

  // Pagination
  currentPage: number = 1;
  itemsPerPage: number = 5;

  // Function to add new item
  addItem() {
    // Implement logic to add new item here
  }
}
