import { NgModule } from '@angular/core';
import { CommonModule as AngularCommonModule } from '@angular/common';

import { CountryPipe } from './pipes/country.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';

import { LetDirective } from './directives/let.directive';

import { AuthenticatedGuard } from './guards/authenticated.guard';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api/api.service';
import { AuthenticationService } from './authentication/authentication.service';
import { UserService } from './authentication/user.service';

@NgModule({
	imports: [
		AngularCommonModule,
		BrowserModule,
		HttpClientModule
	],
	declarations: [
		CountryPipe,
		TruncatePipe,
		LetDirective
	],
	exports: [
		CountryPipe,
		TruncatePipe,
		LetDirective
	],
	providers: [
		AuthenticatedGuard,
		ApiService,
		AuthenticationService,
		UserService
	]
})
export class CommonSdkModule { }
