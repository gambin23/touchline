import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './pages/navigation/navigation.component';
import { HomePage } from './pages/home/home.page';
import { LoginPage } from './pages/login/login.page';
import { UiModule } from './ui/ui.module';
import { ServicesModule } from './services/services.module';
import { AuthenticatedGuard } from './guards/authenticated.guard';

@NgModule({
	declarations: [
		AppComponent,
		NavigationComponent,
		LoginPage,
		HomePage
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		UiModule,
		ServicesModule
	],
	providers: [AuthenticatedGuard],
	bootstrap: [AppComponent]
})
export class AppModule { }
