import { Component } from '@angular/core';

@Component({
  selector: 'app-disease-list',
  templateUrl: './disease-list.component.html',
  styleUrls: ['./disease-list.component.css']
})
export class DiseaseListComponent {

  data = [
    { id: 1, Description: 'diabeties', mastertype: 'MI' },
    { id: 2, Description: 'hypertension', mastertype: 'P' },
    { id: 3, Description: 'thyroid', mastertype: 'RMV' },
    { id: 4, Description: 'hypertension', mastertype: 'TG' },
    { id: 5, Description: 'diabeties', mastertype: 'PDHM' },
    { id: 6, Description: 'thyroid', mastertype: 'RMV' },
    { id: 7, Description: 'diabeties', mastertype: 'MI' },
  ]
  searchTerm: string = '';

  // Pagination
  currentPage: number = 1;
  itemsPerPage: number = 5;

  // Function to add new item
  addItem() {
    // Implement logic to add new item here
  }

}

