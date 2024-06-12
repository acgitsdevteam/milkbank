import { Component } from '@angular/core';

@Component({
  selector: 'app-mother-list',
  templateUrl: './mother-list.component.html',
  styleUrls: ['./mother-list.component.css']
})
export class MotherListComponent {
  data = [
    {
      id: 1,
      name: 'Ramadevi',
      registrationDate: '07/13/2000',
      mothertype: 'HD',
      ipNo: 101,
      dob: '05/07/1980',
      deliverydate: '07/14/2000',
      modeofdelivery: 'SPVD',
    },
    {
      id: 2,
      name: 'Vasavi',
      registrationDate: '07/17/2017',
      mothertype: 'CD',
      ipNo:102,
      dob: '01/13/1996',
      deliverydate: '07/18/2027',
      modeofdelivery: 'NVD',
    },
    {
      id:3,
      name: 'Sitha',
      registrationDate: '05/05/1997',
      mothertype: 'MOM',
      ipNo:103,
      dob: '06/15/1978',
      deliverydate: '05/06/1997',
      modeofdelivery: 'NVD',
    },
    {
      id:4,
      name: 'Padma',
      registrationDate: '01/20/1990',
      mothertype: 'HD',
      ipNo: 104,
      dob: '05/06/1970',
      deliverydate: '01/21/1990',
      modeofdelivery: 'SPVD',
    },
    {
      id:5,
      name: 'Srilakshmi',
      registrationDate: '09/11/2005',
      mothertype: 'HD',
      ipNo: 105,
      dob: '05/07/1984',
      deliverydate: '09/12/1995',
      modeofdelivery: 'SPVD',
    },
    {
      id:6,
      name: 'Rajyalakshmi',
      registrationDate: '12/15/2002',
      mothertype: 'HD',
      ipNo: 106,
      dob: '05/07/1980',
      deliverydate: '12/16/2002',
      modeofdelivery: 'NVD',
    },
    {
      id:7,
      name: 'Nagamani',
      registrationDate: '07/13/1999',
      mothertype: 'HD',
      ipNo: 107,
      dob: '05/07/1975',
      deliverydate: '07/14/1999',
      modeofdelivery: 'NVD',
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