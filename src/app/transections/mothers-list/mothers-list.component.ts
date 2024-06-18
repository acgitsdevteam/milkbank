import { Component } from '@angular/core';

@Component({
  selector: 'app-mothers-list',
  templateUrl: './mothers-list.component.html',
  styleUrls: ['./mothers-list.component.css'],
})
export class MothersListComponent {
  data = [
    {
      motherid: 101,
      date: '05/12/2014',
      name: 'RamaDevi',
      mothertype: 'MOM',
      babycurrentweight: '3kgs',
      donormilkcontainerID: 101,
      pasturized: 'yes',
      amountexpressedml: '1000',
      donateddate: '01/13/2022',
      IDPHM: '0.2ml',
      QuantityPDHMml: '3ml',
      PDHMRequisition: 'Sarala',
      PDHMissued: 'Hard Breast',
    },
    {
      motherid: 101,
      date: '07/09/2011',
      name: 'Vasavi',
      mothertype: 'MOM',
      babycurrentweight: '3.3kgs',
      donormilkcontainerID: 102,
      pasturized: 'yes',
      amountexpressedml: '1500',
      donateddate: '05/06/2022',
      IDPHM: '0.2ml',
      QuantityPDHMml: '5ml',
      PDHMRequisition: 'Saritha',
      PDHMissued: 'Hard Breast',
    },
    {
      motherid: 101,
      date: '05/12/2014',
      name: 'Padma',
      mothertype: 'HD',
      babycurrentweight: '2.8kgs',
      donormilkcontainerID: 103,
      pasturized: 'yes',
      amountexpressedml: '1000',
      donateddate: '03/22/2021',
      IDPHM: '0.1ml',
      QuantityPDHMml: '3ml',
      PDHMRequisition: 'Rajyalakshmi',
      PDHMissued: 'Hard Breast',
    },
    {
      motherid: 101,
      date: '02/21/2010',
      name: 'Srilakshmi',
      mothertype: 'R',
      babycurrentweight: '2.6kgs',
      donormilkcontainerID: 104,
      pasturized: 'yes',
      amountexpressedml: '500',
      donateddate: '02/02/2021',
      IDPHM: '0.2ml',
      QuantityPDHMml: '3ml',
      PDHMRequisition: 'Sarala',
      PDHMissued: 'Hard Breast',
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