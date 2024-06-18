import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { StateComponent } from './state/state.component';
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

const routes: Routes = [
  {path:'users',component:UsersComponent},
  {path:'state',component:StateComponent},
  {path:'user-registraion', component:UserRegistrationComponent},
  {path:'hospital',component:HospitalComponent},
  {path:'hospital-registration',component:HospitalRegistrationComponent},
  {path:'diseases-list',component:DiseaseListComponent},
  {path:'disease-registration',component:DiseaseRegisterComponent},
  {path:'item-list',component:ItemListComponent},
  {path:'add-item',component:AddItemComponent},
  {path:'mothers-list',component:MotherListComponent},
  {path:'mothers-registration',component:MotherRegistrationComponent},
  {path:'baby-list',component:BabyListComponent},
  {path:'baby-register',component:BabyRegisterComponent},
  {path:'district-list',component:DistrictListComponent},
  {path:'district-registration',component:DistrictRegistrationComponent},
  {path:'employee-list',component:EmployeeListComponent},
  {path:'employee-registration',component:EmployeeRegistrationComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
