import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPage } from './pages/login/login.page';
import { AuthenticatedGuard } from './common-sdk/guards/authenticated.guard';
import { TacticsPage } from './pages/tactics/ui/tactics.page';
import { PlayersPage } from './pages/players/ui/players.page';
import { PlayerPage } from './pages/player/ui/player.page';
import { SettingsPage } from './pages/settings/ui/settings.page';
import { LeaguePage } from './pages/league/ui/league.page';
import { ClubPage } from './pages/club/ui/club.page';
import { FixturesPage } from './pages/fixtures/ui/fixtures.page';
import { NotFoundPage } from './pages/not-found/not-found.page';

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
		path: 'inbox',
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
		path: 'fixtures',
		component: FixturesPage,
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
		path: 'club/:id/fixtures',
		component: FixturesPage,
		canActivate: [AuthenticatedGuard]
	},
	{
		path: 'player/:id',
		component: PlayerPage,
		canActivate: [AuthenticatedGuard]
	},
	{
		path: '**',
		component: NotFoundPage
	}

];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
