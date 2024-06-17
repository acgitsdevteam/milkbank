import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent {
  data = [
    {
      EmpName: 'Geetha',
      HospitalID: '1234',
      IsUser: 'yes',
      username: 'Geetha.D',
      password: 'Geetha12',
      Role: 'Lactation Counselor',
      IsActive: 'yes',
      Designation: 'senior doctor',
      Mobile: '9234567890',
    },
    {
      EmpName: 'seetha',
      HospitalID: '2331',
      IsUser: 'no',
      username: 'seetha.S',
      password: 'seetha09',
      Role: 'Admin',
      IsActive: 'yes',
      Designation: 'junior doctor',
      Mobile: '9187654321',
    },
    {
      EmpName: 'supritha',
      HospitalID: '3211',
      IsUser: 'no',
      username: 'supritha.R',
      password: 'supritha25',
      Role: 'Manager/Director',
      IsActive: 'no',
      Designation: 'nurse',
      Mobile: '8345678901',
    },
    {
      EmpName: 'Amulya',
      HospitalID: '2345',
      IsUser: 'yes',
      username: 'Amulya.P',
      password: 'Amulya98',
      Role: 'Manager/Director',
      IsActive: 'no',
      Designation: 'ward sweeper',
      Mobile: '8456789012',
    },
    {
      EmpName: 'Surya',
      HospitalID: '2341',
      IsUser: 'yes',
      username: 'Surya.K',
      password: 'Surya23',
      Role: 'Lactation Counselor',
      IsActive: 'yes',
      Designation: 'ward sweeper',
      Mobile: '9956789123',
    },
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
