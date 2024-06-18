import { Component } from '@angular/core';

@Component({
  selector: 'app-pasteurization',
  templateUrl: './pasteurization.component.html',
  styleUrls: ['./pasteurization.component.css'],
})
export class PasteurizationComponent {
  data = [
    {
      Slno: 1,
      DateofPasturization: '06/13/2024',
      ExpiryDate: '12/10/2024',
      DonorsMilkContainerID: '101',
      BatchNO: '1234',
      NoofBottlesintheBatch: '30',
      Starttime: '10:04:12am',
      Endtime: '12:12:22pm',
      ReqFormNo: '121',
      Sample10mlsenttolab: 'Yes',
      SmplCollDateAndTime: '06/10/2024 10:22:02am ',
      LabagentMobileNo: 9977664332,
      CultureReport: 'positive',
      ReasforPositive: '',
      TestResDate: '06/12/2024',
      EligibleDiscard: 'eligible',
      OfficerName: 'Saritha',
    },
    {
      Slno: 2,
      DateofPasturization: '05/05/2024',
      ExpiryDate: '11/08/2024',
      DonorsMilkContainerID: '102',
      BatchNO: '1312',
      NoofBottlesintheBatch: '45',
      Starttime: '11:04:12am',
      Endtime: '01:12:22pm',
      ReqFormNo: '122',
      Sample10mlsenttolab: 'No',
      SmplCollDateAndTime: '06/06/2024 11:22:02am ',
      LabagentMobileNo: 6281404678,
      CultureReport: 'positive',
      ReasforPositive: '',
      TestResDate: '06/12/2024',
      EligibleDiscard: 'eligible',
      OfficerName: 'Sailaja',
    },
    {
      Slno: 3,
      DateofPasturization: '02/15/2024',
      ExpiryDate: '08/18/2024',
      DonorsMilkContainerID: '103',
      BatchNO: '132',
      NoofBottlesintheBatch: '25',
      Starttime: '12:22:03am',
      Endtime: '02:12:12pm',
      ReqFormNo: '1234',
      Sample10mlsenttolab: 'Yes',
      SmplCollDateAndTime: '03/23/2024 05:12:02pm',
      LabagentMobileNo: 9977664332,
      CultureReport: 'positive',
      ReasonforPositive: '',
      TestResDate: '04/10/2024',
      EligibleDiscard: 'eligible',
      OfficerName: 'Priyanka',
    },
    {
      Slno: 4,
      DateofPasturization: '03/01/2024',
      ExpiryDate: '09/04/2024',
      DonorsMilkContainerID: '101',
      BatchNO: '1324',
      NoofBottlesintheBatch: '10',
      Starttime: '11:11:12am',
      Endtime: '12:02:22pm',
      ReqFormNo: '126',
      Sample10mlsenttolab: 'No',
      SmplCollDateAndTime: '07/06/2024 11:22:02am ',
      LabagentMobileNo: 7569932266,
      CultureReport: 'positive',
      ReasonforPositive: '',
      TestResDate: '07/27/2024',
      EligibleDiscard: 'eligible',
      OfficerName: 'Rajyalakshmi',
    },
    {
      Slno: 5,
      DateofPasturization: '08/02/2023',
      ExpiryDate: '02/05/2024',
      DonorsMilkContainerID: '106',
      BatchNO: '1345',
      NoofBottlesintheBatch: '36',
      Starttime: '10:00:12am',
      Endtime: '11:30:22pm',
      ReqFormNo: '1244',
      Sample10mlsenttolab: 'Yes',
      SmplCollDateAndTime: '07/16/2024 11:22:02am ',
      LabagentMobileNo: 7687656599,
      CultureReport: 'positive',
      ReasonforPositive: '',
      TestResDate: '06/12/2024',
      EligibleDiscard: 'eligible',
      OfficerName: 'Pavani',
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
