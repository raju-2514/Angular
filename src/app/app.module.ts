import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NoPageComponent } from './no-page/no-page.component';
import { ChildWildCardComponent } from './child-wild-card/child-wild-card.component';
import { AboutChildDetailsComponent } from './about-child-details/about-child-details.component';
import { FooterComponent } from './footer/footer.component';
import {HttpClientModule} from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
    AboutComponent,
    NoPageComponent,
    ChildWildCardComponent,
    AboutChildDetailsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
