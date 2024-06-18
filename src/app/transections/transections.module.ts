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
import { AmmrListComponent } from './ammr-list/ammr-list.component';
import { AmmrRegisterComponent } from './ammr-list/ammr-register/ammr-register.component';
import { AutoClaveListComponent } from './auto-clave-list/auto-clave-list.component';
import { AutoClaveRegisterComponent } from './auto-clave-list/auto-clave-register/auto-clave-register.component';
import { PasteurizationDiscardListComponent } from './pasteurization-discard-list/pasteurization-discard-list.component';
import { PasteurizationDiscardRegisterComponent } from './pasteurization-discard-list/pasteurization-discard-register/pasteurization-discard-register.component';


@NgModule({
  declarations: [
    TransectionsComponent,
    MothersListComponent,
    FilterPipe,
    MotherRegisterComponent,
    PasteurizationComponent,
    PasteurizationRegistrationComponent,
    AmmrListComponent,
    AmmrRegisterComponent,
    AutoClaveListComponent,
    AutoClaveRegisterComponent,
    PasteurizationDiscardListComponent,
    PasteurizationDiscardRegisterComponent
  ],
  imports: [
    CommonModule,
    TransectionsRoutingModule,
    FormsModule,
    NgxPaginationModule
    
  ]
})
export class TransectionsModule { }
