import { Component } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {
  data = [
    { id:1, Itemdiscription: 'plastic', itemtype: 'milkcollectionbottles', ManufacturedBy:'princy', ExpDate:'12/07/2025' },
    { id:2, Itemdiscription: 'plastic', itemtype: 'bottle caps', ManufacturedBy:'wipro', ExpDate:'25/03/2025' },
    { id:3, Itemdiscription: 'green', itemtype: 'cleaning cloth', ManufacturedBy:'germ free', ExpDate:'11/09/2024' },
    { id:4, Itemdiscription: 'pink', itemtype:'towels', ManufacturedBy:'princy', ExpDate:'18/06/2025' },
    { id:5, Itemdiscription: 'plastic', itemtype: 'Bins', ManufacturedBy:'chethan', ExpDate:'22/04/2025'},
    { id:6, Itemdiscription: 'Apron', itemtype: 'Gown', ManufacturedBy:'Mediline', ExpDate:'6/11/2024'},
    { id:7, Itemdiscription: 'Cotton', itemtype: 'Gauze', ManufacturedBy:'Dealmed', ExpDate:'12/12/25'},
    { id:8, Itemdiscription: 'Steel', itemtype: 'Trace', ManufacturedBy:'shire', ExpDate:'5/07/2025' }
    // Add more data as needed
  ];

  // Search functionality
  searchTerm: string = '';

  // Pagination
  currentPage: any = 1;
  itemsPerPage: any = 5;

  // Function to add new item
  addItem() {
    // Implement logic to add new item here
  }
  

}

