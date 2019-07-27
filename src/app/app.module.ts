import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule as AngularCommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './pages/navigation/navigation.component';
import { HomePage } from './pages/home/home.page';
import { LoginPage } from './pages/login/login.page';
import { UiModule } from './ui/ui.module';
import { ServicesModule } from './services/services.module';
import { AuthenticatedGuard } from './guards/authenticated.guard';
import { PlayersPage } from './pages/players/players.page';
import { PlayerPage } from './pages/player/player.page';
import { CommonModule } from './common/common.module';
import { TacticsPage } from './pages/tactics/tactics.page';

@NgModule({
	imports: [
		AngularCommonModule,
		BrowserModule,
		AppRoutingModule,
		UiModule,
		ServicesModule,
		CommonModule,
		DragDropModule
	],
	declarations: [
		AppComponent,
		NavigationComponent,
		LoginPage,
		HomePage,
		PlayersPage,
		TacticsPage,
		PlayerPage
	],
	providers: [AuthenticatedGuard],
	bootstrap: [AppComponent]
})
export class AppModule { }
