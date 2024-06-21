import { Component } from '@angular/core';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css'],
})
export class HospitalComponent {
  data = [
    {
      id: 1,
      name: 'RainBow',
      state: 'AP',
      district: 'Krishna',
      Address1: 'Vijayawada',
      Address2: 'Kanuru',
      pincode: 500009,
    },
    {
      id: 2,
      name: 'Medicare',
      state: 'TG',
      district: 'Rangareddy',
      Address1: 'Hydarabd',
      Address2: 'Miyapur',
      pincode: 500049,
    },
    {
      id: 3,
      name: 'Kims',
      state: 'AP',
      district: 'East godavari',
      Address1: 'Rajamendry',
      Address2: 'DhanavaiPeta',
      pincode: 533103,
    },
    {
      id: 4,
      name: 'Aiims',
      state: 'AP',
      district: 'Krishna',
      Address1: 'Mangalagiri',
      Address2: 'Mangalagiri',
      pincode: 522503,
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
