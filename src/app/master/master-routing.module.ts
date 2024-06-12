import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { StateComponent } from './state/state.component';
import { UserRegistrationComponent } from './users/user-registration/user-registration.component';
import { MothersRegistrationComponent } from './mothers-registration/mothers-registration.component';
import { HospitalComponent } from './hospital/hospital.component';
import { HospitalRegistrationComponent } from './hospital/hospital-registration/hospital-registration.component';

const routes: Routes = [
  {path:'users',component:UsersComponent},
  {path:'state',component:StateComponent},
  {path:'user-registraion', component:UserRegistrationComponent},
  {path:'mother-registration',component:MothersRegistrationComponent},
  {path:'hospital',component:HospitalComponent},
  {path:'hospital-registration',component:HospitalRegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
