import { Component } from '@angular/core';

@Component({
  selector: 'app-ammr-list',
  templateUrl: './ammr-list.component.html',
  styleUrls: ['./ammr-list.component.css']
})
export class AmmrListComponent {
  data = [
    { id: 1,
      TranDate: '12/05/2024',
      InfantID: 'NILHYD_2024/05/09_B05',
      InfantName:'Baby of Durga',
      DOB:'17/03/2024',
      InBornorOutBorn:'IB',
      CurrWtingms:'3.5KG',
      ReasonforMilkReq:'HardBreast',
     //  RecMilkContainerID:'2',
     //  Data_TimeofReaction:'12/05/2024',
     //  DetailsofRemarks:'temperature failure',
     //  ReportingTime:'13/05/2024'
   },
 
       { id: 2,
         TranDate: '16/05/2024',
         InfantID: 'NILHYD_2024/05/09_B07',
         InfantName:'Baby of Satya',
         DOB:'19/03/2024',
         InBornorOutBorn:'OB',
         CurrWtingms:'4.8KG',
         ReasonforMilkReq:'Poor Latching',
         // RecMilkContainerID:'5',
         // Data_TimeofReaction:'16/05/2024',
         // DetailsofRemarks:'Storage Failure',
         // ReportingTime:'17/05/2024'
       },
 
       { id: 3,
         TranDate: '22/05/2024',
         InfantID: 'NILHYD_2024/05/09_B08',
         InfantName:'Baby of Hema',
         DOB:'22/02/2024',
         InBornorOutBorn:'OB',
         CurrWtingms:'3.8KG',
         ReasonforMilkReq:'Diet Counselling',
         // RecMilkContainerID:'3',
         // Data_TimeofReaction:'22/05/2024',
         // DetailsofRemarks:'Storage Failure',
         // ReportingTime:'23/05/2024'
       },
 
       { id: 4,
         TranDate: '23/05/2024',
         InfantID: 'NILHYD_2024/05/09_B02',
         InfantName:'Baby of Latha',
         DOB:'02/05/2024',
         InBornorOutBorn:'IB',
         CurrWtingms:'4.KG',
         ReasonforMilkReq:'Counselling',
         // RecMilkContainerID:'4',
         // Data_TimeofReaction:'23/05/2024',
         // DetailsofRemarks:'temperature failure',
         // ReportingTime:'24/05/2024'
       },
 
       { id: 5,
         TranDate: '27/05/2024',
         InfantID: 'NILHYD_2024/05/09_B04',
         InfantName:'Baby of Keerthi',
         DOB:'05/02/2024',
         InBornorOutBorn:'OB',
         CurrWtingms:'4.5',
         ReasonforMilkReq:'Engorged Breast',
         // RecMilkContainerID:'3',
         // Data_TimeofReaction:'27/05/2024',
         // DetailsofRemarks:'Storage Failure',
         // ReportingTime:'28/05/2024'
       },
 
       { id: 6,
         TranDate: '02/06/2024',
         InfantID: 'NILHYD_2024/05/09_B06',
         InfantName:'Baby of Sandya',
         DOB:'21/02/2024',
         InBornorOutBorn:'IB',
         CurrWtingms:'3.8KG',
         ReasonforMilkReq:'Inverted Nipple',
         // RecMilkContainerID:'7',
         // Data_TimeofReaction:'02/06/2024',
         // DetailsofRemarks:'temperature failure',
         // ReportingTime:'03/06/2024'
       },
 
       { id: 7,
         TranDate: '08/06/2024',
         InfantID: 'NILHYD_2024/05/09_B01',
         InfantName:'Baby of Sneha',
         DOB:'27/04/2024',
         InBornorOutBorn:'IB',
         CurrWtingms:'4.KG',
         ReasonforMilkReq:'Diet Counselling',
         // RecMilkContainerID:'4',
         // Data_TimeofReaction:'08/06/2024',
         // DetailsofRemarks:'temperature failure',
         // ReportingTime:'08/06/2024'
       },
 
      {  id: 8,
         TranDate: '11/06/2024',
         InfantID: 'NILHYD_2024/05/09_B03',
         InfantName:'Baby of Priya',
         DOB:'22/04/2024',
         InBornorOutBorn:'OB',
         CurrWtingms:'3.5KG',
         ReasonforMilkReq:'Poor Latching',
         // RecMilkContainerID:'6',
         // Data_TimeofReaction:'11/06/2024',
         // DetailsofRemarks:'Storage Failure',
         // ReportingTime:'12/06/2024'
       }
 
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
