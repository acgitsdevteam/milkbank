import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MothersListComponent } from './mothers-list/mothers-list.component';
import { MotherRegisterComponent } from './mothers-list/mother-register/mother-register.component';
import { PasteurizationComponent } from './pasteurization/pasteurization.component';
import { PasteurizationRegistrationComponent } from './pasteurization/pasteurization-registration/pasteurization-registration.component';
import { AmmrListComponent } from './ammr-list/ammr-list.component';
import { AmmrRegisterComponent } from './ammr-list/ammr-register/ammr-register.component';
import { AutoClaveListComponent } from './auto-clave-list/auto-clave-list.component';
import { AutoClaveRegisterComponent } from './auto-clave-list/auto-clave-register/auto-clave-register.component';
import { PasteurizationDiscardListComponent } from './pasteurization-discard-list/pasteurization-discard-list.component';
import { PasteurizationDiscardRegisterComponent } from './pasteurization-discard-list/pasteurization-discard-register/pasteurization-discard-register.component';

const routes: Routes = [
  { path: 'mothers-list', component: MothersListComponent },
  { path: 'mother-register', component: MotherRegisterComponent },
  { path: 'pasteurization-list', component: PasteurizationComponent },
  { path: 'pasteurization-registration',component:PasteurizationRegistrationComponent },
  { path: 'ammr-list',component:AmmrListComponent},
  { path: 'ammr-register',component:AmmrRegisterComponent},
  { path: 'auto-clave-list',component:AutoClaveListComponent},
  { path: 'auto-clave-register',component:AutoClaveRegisterComponent},
  { path: 'pasteurization-discard-list',component:PasteurizationDiscardListComponent},
  { path: 'pasteurization-discard-register',component:PasteurizationDiscardRegisterComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransectionsRoutingModule { }
