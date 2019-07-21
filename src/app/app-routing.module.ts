import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPage } from './login/login.page';
import { HomePage } from './home/home.page';


const routes: Routes = [
	{
		path: 'login',
		component: LoginPage
	},
	{
		path: 'home',
		component: HomePage
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
