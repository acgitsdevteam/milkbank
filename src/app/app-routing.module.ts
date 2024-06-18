import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './access/login/login.component';
import { AccessModule } from './access/access.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MasterModule } from './master/master.module';
import { DashboardBodyComponent } from './dashboard/dashboard-body/dashboard-body.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'access',
    loadChildren: () =>
      import('./access/access.module').then((m) => m.AccessModule),
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', component: DashboardBodyComponent },
      {
        path: 'master',
        loadChildren: () =>
          import('./master/master.module').then((m) => m.MasterModule),
      },
      {
        path: 'access',
        loadChildren: () =>
          import('./access/access.module').then((m) => m.AccessModule),
      },
      {
        path: 'transections',
        loadChildren: () =>
          import('./transections/transections.module').then((m) => m.TransectionsModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
