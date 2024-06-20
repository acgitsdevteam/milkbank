import { Component } from '@angular/core';

@Component({
  selector: 'app-auto-clave-list',
  templateUrl: './auto-clave-list.component.html',
  styleUrls: ['./auto-clave-list.component.css']
})
export class AutoClaveListComponent {
  data = [
    { id:1,Date:'12/03/2024',ItemAutoclaved: 'Bottles',Quantity: '41',Starttime:'10:00AM',EndTime:'11:30AM',AttendBy:'Latha' },
    { id:2,Date:'11/05/2024',ItemAutoclaved: 'Caps',Quantity: '45',Starttime:'9:00AM',EndTime:'10:00AM',AttendBy:'Sandya' },
    { id:3,Date:'11/02/2024',ItemAutoclaved: 'Conocal Flask',Quantity: '01',Starttime:'1:00pM',EndTime:'2:30pM',AttendBy:'Bhuvana' },
    { id:4,Date:'08/04/2024',ItemAutoclaved: 'Beakers',Quantity: '04',Starttime:'11:00AM',EndTime:'12:30AM',AttendBy:'Hema' },
    { id:5,Date:'02/06/2024',ItemAutoclaved: 'Pink Towels',Quantity: '02',Starttime:'3:00pM',EndTime:'4:30pM',AttendBy:'Bindhu' },
    { id:6,Date:'05/03/2024',ItemAutoclaved: 'Soft Towels',Quantity: '02',Starttime:'8:00AM',EndTime:'10:30AM',AttendBy:'Harika' },
    { id:7,Date:'03/08/2024',ItemAutoclaved: 'Gown',Quantity: '01',Starttime:'10:30AM',EndTime:'11:30AM',AttendBy:'Surya' },
    { id:8,Date:'09/05/2024',ItemAutoclaved: 'Gauze',Quantity: '1 tray',Starttime:'8:00AM',EndTime:'10:30AM',AttendBy:'Durga' },
    { id:9,Date:'08/05/2024',ItemAutoclaved: 'Big Tray',Quantity: '1',Starttime:'4:00pM',EndTime:'5:30AM',AttendBy:'Satya' },


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
