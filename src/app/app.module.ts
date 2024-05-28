import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardBodyComponent } from './dashboard/dashboard-body/dashboard-body.component';

import { authInterceptorProviders } from './helpers/auth.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    DashboardBodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  exports:[
    FormsModule,
    BrowserModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]

})
export class AppModule { }
