import { Component } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {
  data = [
    { id:1, Itemdiscription: 'plastic', itemtype: 'milkcollectionbottles', ManufacturedBy:'princy', ExpDate:'18months' },
    { id:2, Itemdiscription: 'plastic', itemtype: 'bottle caps', ManufacturedBy:'wipro', ExpDate:'22months' },
    { id:3, Itemdiscription: 'green', itemtype: 'cleaning cloth', ManufacturedBy:'germ free', ExpDate:'6months' },
    { id:4, Itemdiscription: 'pink', itemtype:'towels', ManufacturedBy:'princy', ExpDate:'18months' },
    { id:5, Itemdiscription: 'plastic', itemtype: 'Bins', ManufacturedBy:'chethan', ExpDate:'22months'},
    { id:6, Itemdiscription: 'Apron', itemtype: 'Gown', ManufacturedBy:'Mediline', ExpDate:'6months'},
    { id:7, Itemdiscription: 'Cotton', itemtype: 'Gauze', ManufacturedBy:'Dealmed', ExpDate:'12months'},
    { id:8, Itemdiscription: 'Steel', itemtype: 'Trace', ManufacturedBy:'shire', ExpDate:'5 years' }
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

