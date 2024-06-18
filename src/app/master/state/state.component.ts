import { Component } from '@angular/core';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent {
  data = [
    { state:'Andrapradesh',statecode: 'AP'},
    { state:'Telangana',statecode: 'TS'},
    { state:'Uttar pradesh',statecode: 'UP' },
    { state:'Madyapradesh',statecode: 'MP'},
    { state:'Tripura',statecode: 'TR'},
    { state:'Uttarakhand',statecode: 'UA'},
    
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
