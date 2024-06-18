import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MothersListComponent } from './mothers-list/mothers-list.component';
import { MotherRegisterComponent } from './mothers-list/mother-register/mother-register.component';
import { PasteurizationComponent } from './pasteurization/pasteurization.component';
import { PasteurizationRegistrationComponent } from './pasteurization/pasteurization-registration/pasteurization-registration.component';

const routes: Routes = [
  { path: 'mothers-list', component: MothersListComponent },
  { path: 'mother-register', component: MotherRegisterComponent },
  { path: 'pasteurization-list', component: PasteurizationComponent },
  { path: 'pasteurization-registration',component:PasteurizationRegistrationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransectionsRoutingModule { }
