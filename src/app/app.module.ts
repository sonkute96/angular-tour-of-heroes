import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './service/hero.service';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from "./dashboard.component";
import { AppRoutingModule } from "./app-routing.module";


@NgModule({
  declarations: [
   AppComponent,
   HeroesComponent,
   HeroDetailComponent,
   DashboardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
