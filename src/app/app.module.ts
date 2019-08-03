import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule as AngularCommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './pages/navigation/navigation.component';
import { LoginPage } from './pages/login/login.page';
import { UiModule } from './ui/ui.module';
import { ServicesModule } from './services/services.module';
import { AuthenticatedGuard } from './guards/authenticated.guard';
import { PlayersPage } from './pages/players/players.page';
import { CommonModule } from './common/common.module';
import { TacticsPage } from './pages/tactics/tactics.page';
import { SettingsPage } from './pages/settings/settings.page';
import { SettingsBackgroundComponent } from './pages/settings/background/background.component';
import { LeagueModule } from './pages/league/league.module';
import { PlayerModule } from './pages/player/player.module';
import { ClubModule } from './pages/club/club.module';

@NgModule({
	imports: [
		AngularCommonModule,
		BrowserModule,
		AppRoutingModule,
		UiModule,
		ServicesModule,
		CommonModule,
		DragDropModule,
		LeagueModule,
		ClubModule,
		PlayerModule
	],
	declarations: [
		AppComponent,
		NavigationComponent,
		LoginPage,
		PlayersPage,
		TacticsPage,
		SettingsPage,
		SettingsBackgroundComponent
	],
	providers: [AuthenticatedGuard],
	bootstrap: [AppComponent]
})
export class AppModule { }
