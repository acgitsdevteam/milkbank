import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterRoutingModule } from './master-routing.module';
import { MasterComponent } from './master.component';
import { UsersComponent } from './users/users.component';
import { StateComponent } from './state/state.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterPipe } from './filterpipe.pipe';
import { UserRegistrationComponent } from './users/user-registration/user-registration.component';
import { HospitalComponent } from './hospital/hospital.component';
import { HospitalRegistrationComponent } from './hospital/hospital-registration/hospital-registration.component';
import { DiseaseListComponent } from './disease-list/disease-list.component';
import { DiseaseRegisterComponent } from './disease-list/disease-register/disease-register.component';
import { ItemListComponent } from './item-list/item-list.component';
import { AddItemComponent } from './item-list/add-item/add-item.component';
import { MotherListComponent } from './mother-list/mother-list.component';
import { MotherRegistrationComponent } from './mother-list/mother-registration/mother-registration.component';
import { BabyListComponent } from './baby-list/baby-list.component';
import { BabyRegisterComponent } from './baby-list/baby-register/baby-register.component';
import { DistrictListComponent } from './district-list/district-list.component';
import { DistrictRegistrationComponent } from './district-list/district-registration/district-registration.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeRegistrationComponent } from './employee-list/employee-registration/employee-registration.component';

@NgModule({
  declarations: [
    MasterComponent,
    UsersComponent,
    StateComponent,
    FilterPipe,
    UserRegistrationComponent,
    HospitalComponent,
    HospitalRegistrationComponent,
    DiseaseListComponent,
    DiseaseRegisterComponent,
    ItemListComponent,
    AddItemComponent,
    MotherListComponent,
    MotherRegistrationComponent,
    BabyListComponent,
    BabyRegisterComponent,
    DistrictListComponent,
    DistrictRegistrationComponent,
    EmployeeListComponent,
    EmployeeRegistrationComponent,
  ],
  imports: [
    CommonModule,
    MasterRoutingModule,
    FormsModule,
    NgxPaginationModule,
    
  ]
})
export class MasterModule { }
