import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterRoutingModule } from './master-routing.module';
import { MasterComponent } from './master.component';
import { UsersComponent } from './users/users.component';
import { StateComponent } from './state/state.component';


@NgModule({
  declarations: [
    MasterComponent,
    UsersComponent,
    StateComponent
  ],
  imports: [
    CommonModule,
    MasterRoutingModule
  ]
})
export class MasterModule { }
