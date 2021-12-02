import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ComponentsModule } from '../components/components.module';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
// import { SidebarModule } from 'ng-sidebar';
import { RequestComponent } from './request/request.component';
import { E404Component } from './e404/e404.component';


@NgModule({
  declarations: [
    SignUpComponent,
    LoginComponent,
    HomeComponent,
    E404Component,
    
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // SidebarModule
  ]
})
export class PagesModule { }
