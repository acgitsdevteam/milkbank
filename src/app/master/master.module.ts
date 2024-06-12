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
import { MothersRegistrationComponent } from './mothers-registration/mothers-registration.component';
import { HospitalComponent } from './hospital/hospital.component';
import { HospitalRegistrationComponent } from './hospital/hospital-registration/hospital-registration.component';

@NgModule({
  declarations: [
    MasterComponent,
    UsersComponent,
    StateComponent,
    FilterPipe,
    UserRegistrationComponent,
    MothersRegistrationComponent,
    HospitalComponent,
    HospitalRegistrationComponent
  ],
  imports: [
    CommonModule,
    MasterRoutingModule,
    FormsModule,
    NgxPaginationModule,
    
  ]
})
export class MasterModule { }
