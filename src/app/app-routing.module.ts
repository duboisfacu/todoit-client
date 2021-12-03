import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './pages/history/history.component';
import { LoginComponent } from './pages/login/login.component';
import { PanelComponent } from './pages/panel/panel.component';
import { RequestComponent } from './pages/request/request.component';
import { StatusComponent } from './pages/status/status.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { E404Component } from './pages/e404/e404.component';
import { BlockLandingGuard } from './guards/block-landing.guard';



const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: [BlockLandingGuard]},
  {path: 'login', component: LoginComponent, canActivate: [BlockLandingGuard]},
  {path: 'register', component: SignUpComponent, canActivate: [BlockLandingGuard]},
  {path: 'panel', component: PanelComponent, canActivate: [AuthGuard] },
  {path: 'request', component: RequestComponent, canActivate: [AuthGuard] },
  {path: 'status', component: StatusComponent, canActivate: [AuthGuard] },
  {path: 'history', component: HistoryComponent, canActivate: [AuthGuard] },
  {path: '404', component: E404Component},
  {path: '**', redirectTo: '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
