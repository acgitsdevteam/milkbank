import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccessRoutingModule } from './access-routing.module';
import { AccessComponent } from './access.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    AccessComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
<<<<<<< Updated upstream
    AccessRoutingModule,
    FormsModule,
    ReactiveFormsModule
    //BrowserModule
=======
    AccessRoutingModule
>>>>>>> Stashed changes
  ],
  exports:[
    LoginComponent
  ]
})
export class AccessModule { }
