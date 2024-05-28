import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccessRoutingModule } from './access-routing.module';
import { AccessComponent } from './access.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    AccessComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AccessRoutingModule,
    FormsModule
    //BrowserModule
  ]
})
export class AccessModule { }
