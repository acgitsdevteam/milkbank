import { Component } from '@angular/core';

@Component({
  selector: 'app-baby-list',
  templateUrl: './baby-list.component.html',
  styleUrls: ['./baby-list.component.css']
})
export class BabyListComponent {
  data = [
    {
      id: 1,
      babyofmothername: 'Ramadevi',
      inborn: 'yes',
      birthweight: '3kgs',
      reasonforadmission: 'Milk Expression',
      typesoffeeds: 'spoon',
    },
    {
      id: 2,
      babyofmothername: 'Vsavi',
      inborn: 'yes',
      birthweight: '3.5kgs',
      reasonforadmission: 'Milk Expression',
      typesoffeeds: 'OG',
    },
    {
      id: 3,
      babyofmothername: 'Sitha',
      inborn: 'yes',
      birthweight: '2.5kgs',
      reasonforadmission: 'Milk Expression',
      typesoffeeds: 'spoon',
    },
    {
      id: 3,
      babyofmothername: 'Padma',
      inborn: 'yes',
      birthweight: '3kgs',
      reasonforadmission: 'Hard Breast',
      typesoffeeds: 'OG',
    },
    {
      id: 4,
      babyofmothername: 'Srilakshmi',
      inborn: 'yes',
      birthweight: '3.6kgs',
      reasonforadmission: 'Milk Expression',
      typesoffeeds: 'spoon',
    },
    {
      id: 5,
      babyofmothername: 'Nagamani',
      inborn: 'yes',
      birthweight: '3.3kgs',
      reasonforadmission: 'Hard Breast',
      typesoffeeds: '',
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
