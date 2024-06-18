import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransectionsRoutingModule } from './transections-routing.module';
import { TransectionsComponent } from './transections.component';
import { MothersListComponent } from './mothers-list/mothers-list.component';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { MotherRegisterComponent } from './mothers-list/mother-register/mother-register.component';
import { PasteurizationComponent } from './pasteurization/pasteurization.component';
import { PasteurizationRegistrationComponent } from './pasteurization/pasteurization-registration/pasteurization-registration.component';


@NgModule({
  declarations: [
    TransectionsComponent,
    MothersListComponent,
    FilterPipe,
    MotherRegisterComponent,
    PasteurizationComponent,
    PasteurizationRegistrationComponent
  ],
  imports: [
    CommonModule,
    TransectionsRoutingModule,
    FormsModule,
    NgxPaginationModule
    
  ]
})
export class TransectionsModule { }
