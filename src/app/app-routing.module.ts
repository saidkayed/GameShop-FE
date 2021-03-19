import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//Pages
import {LandingPageComponent} from './landing-page/landing-page.component'
import {LoginComponent} from './pages/login/login.component'

const routes: Routes = [{path: '', component: LandingPageComponent}, {path: 'login', component: LoginComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
