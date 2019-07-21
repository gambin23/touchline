import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPage } from './pages/login/login.page';
import { HomePage } from './pages/home/home.page';
import { AuthenticatedGuard } from './guards/authenticated.guard';


const routes: Routes = [
	{
		path: 'login',
		component: LoginPage
	},
	{
		path: 'home',
		component: HomePage,
		canActivate: [AuthenticatedGuard]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
