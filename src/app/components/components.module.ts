import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderLandingComponent } from './header-landing/header-landing.component';
import { ClientsComponent } from './clients/clients.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { StatsComponent } from './stats/stats.component';
import { CountUpModule } from 'ngx-countup';
import { TeamComponent } from './team/team.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { SidebarModule } from 'ng-sidebar';

@NgModule({
  declarations: [
    NavbarComponent,
    HeaderLandingComponent,
    ClientsComponent,
    StatsComponent,
    TeamComponent,
    ReviewsComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    CountUpModule,
    SidebarModule

  ],
  exports:[
    NavbarComponent,
    HeaderLandingComponent,
    ClientsComponent,
    StatsComponent,
    TeamComponent,
    ReviewsComponent
    
  ]
})
export class ComponentsModule { }
