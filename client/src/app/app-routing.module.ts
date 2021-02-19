import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {ComplaintComponent} from './complaint/complaint.component'
import {HomeComponent} from './home/home.component'
import {DashboardComponent} from './dashboard/dashboard.component'
import { LoginComponent } from './login/login.component';

const routes: Routes = [
	{
		path:'home',
		component: HomeComponent
	},
	{
		path:'',
		component: HomeComponent
	},
	{
		path:'dashboard',
		component: DashboardComponent
	},
	{
		path:'complaint',
		component: ComplaintComponent
	},
	{
		path:'login',
		component: LoginComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
