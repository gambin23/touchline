import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule as AngularCommonModule } from '@angular/common';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './pages/navigation/navigation.component';
import { NotFoundPage } from './pages/not-found/not-found.page';
import { LoginPage } from './pages/login/login.page';
import { UiModule } from './ui/ui.module';
import { CommonUiModule } from './common-ui/module';
import { CommonSdkModule } from './common-sdk';

import { LeagueModule } from './pages/league/module';
import { PlayerModule } from './pages/player/player.module';
import { ClubModule } from './pages/club/module';
import { TacticsModule } from './pages/tactics/module';
import { FixturesModule } from './pages/fixtures/module';
import { PlayersModule } from './pages/players/module';
import { SettingsModule } from './pages/settings/module';

@NgModule({
	imports: [
		AngularCommonModule,
		BrowserModule,
		AppRoutingModule,
		UiModule,
		CommonUiModule,
		CommonSdkModule,
		LeagueModule,
		ClubModule,
		PlayerModule,
		PlayersModule,
		TacticsModule,
		FixturesModule,
		SettingsModule
	],
	declarations: [
		AppComponent,
		NavigationComponent,
		NotFoundPage,
		LoginPage
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
