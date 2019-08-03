import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPage } from './pages/login/login.page';
import { AuthenticatedGuard } from './guards/authenticated.guard';
import { TacticsPage } from './pages/tactics/ui/tactics.page';
import { PlayersPage } from './pages/players/players.page';
import { PlayerPage } from './pages/player/ui/player.page';
import { SettingsPage } from './pages/settings/settings.page';
import { LeaguePage } from './pages/league/ui/league.page';
import { ClubPage } from './pages/club/ui/club.page';

const routes: Routes = [
	{
		path: 'login',
		component: LoginPage
	},
	{
		path: 'settings',
		component: SettingsPage,
		canActivate: [AuthenticatedGuard]
	},
	{
		path: 'home',
		component: ClubPage,
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
		path: 'league/:id',
		component: LeaguePage,
		canActivate: [AuthenticatedGuard]
	},
	{
		path: 'club/:id',
		component: ClubPage,
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
