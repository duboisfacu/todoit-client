import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PanelComponent } from './pages/panel/panel.component';
import { RequestComponent } from './pages/request/request.component';
import { StatusComponent } from './pages/status/status.component';
import { HistoryComponent } from './pages/history/history.component';
import { ComponentsModule } from './components/components.module';

import { CountUpModule } from 'ngx-countup';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SidebarModule } from 'ng-sidebar';

@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    RequestComponent,
    StatusComponent,
    HistoryComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    ComponentsModule,
    CountUpModule,
    BrowserAnimationsModule,
    SidebarModule
 ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
