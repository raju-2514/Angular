import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { NoPageComponent } from './no-page/no-page.component';
import { AboutChildDetailsComponent } from './about-child-details/about-child-details.component';
import { ChildWildCardComponent } from './child-wild-card/child-wild-card.component';
const routes: Routes = [
  {
    path:'about',
    component:AboutComponent,
    children:
    [
      {path:'acd', component:AboutChildDetailsComponent},
      {path:'cwd', component:ChildWildCardComponent}
    ]
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'user/:id',
    component:UserComponent
  },
  {
    path:'**',
    component:NoPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
