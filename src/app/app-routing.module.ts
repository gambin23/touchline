import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPage } from './pages/login/login.page';
import { HomePage } from './pages/home/home.page';
import { AuthenticatedGuard } from './guards/authenticated.guard';
import { TacticsPage } from './pages/tactics/tactics.page';
import { PlayersPage } from './pages/players/players.page';
import { PlayerPage } from './pages/player/player.page';


const routes: Routes = [
	{
		path: 'login',
		component: LoginPage
	},
	{
		path: 'home',
		component: HomePage,
		canActivate: [AuthenticatedGuard]
	},
	{
		path: 'players',
		component: PlayersPage,
		canActivate: [AuthenticatedGuard]
	},
	{
		path: 'tactics',
		component: TacticsPage,
		canActivate: [AuthenticatedGuard]
	},
	{
		path: 'player/:id',
		component: PlayerPage,
		canActivate: [AuthenticatedGuard]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
