import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomePage } from './home/home.page';
import { LoginPage } from './login/login.page';
import { UiModule } from './ui/ui.module';

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
		UiModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
