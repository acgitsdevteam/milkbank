import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  data = [
    { id: 1, name: 'John Doe', Hospitalname: 'Medicare', age: 30 },
    { id: 2, name: 'Jane Doe', Hospitalname: 'Apollo', age: 25 },
    { id: 3, name: 'John Doe', Hospitalname: 'Rainbow', age: 30 },
    { id: 4, name: 'Jane Doe', Hospitalname: 'RNC', age: 25 },
    { id: 5, name: 'John Doe', Hospitalname: 'Gandhi', age: 30 },
    { id: 6, name: 'Jane Doe', Hospitalname: 'Osmaniya', age: 25 },
    { id: 7, name: 'John Doe', Hospitalname: 'PulsHeart', age: 30 },
    { id: 8, name: 'Jane Doe', Hospitalname: 'Nexgen', age: 25 },
    { id: 9, name: 'John Doe', Hospitalname: 'Shouryas', age: 30 },
    { id: 10, name: 'Jane Doe', Hospitalname: 'Srijana', age: 25 },
    { id: 11, name: 'John Doe', Hospitalname: 'Kims', age: 30 },
    { id: 12, name: 'Jane Doe', Hospitalname: 'Yashodha', age: 25 },
    { id: 13, name: 'John Doe', Hospitalname: 'Sidvin', age: 30 },
    { id: 14, name: 'Jane Doe', Hospitalname: 'Vasavi', age: 25 },
    { id: 15, name: 'John Doe', Hospitalname: 'Avira', age: 30 },
    { id: 16, name: 'mahi', age: 25 },
    // Add more data as needed
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
