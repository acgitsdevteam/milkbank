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

const routes: Routes = [
  {path:'users',component:UsersComponent},
  {path:'state',component:StateComponent},
  {path:'user-registraion', component:UserRegistrationComponent},
  {path:'hospital',component:HospitalComponent},
  {path:'hospital-registration',component:HospitalRegistrationComponent},
  {path:'diseases-list',component:DiseaseListComponent},
  {path:'disease-registration',component:DiseaseRegisterComponent},
  {path:'item-list',component:ItemListComponent},
  {path:'add-item',component:AddItemComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
