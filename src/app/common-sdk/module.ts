import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule as AngularCommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { CountryPipe } from './pipes/country.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';

import { LetDirective } from './directives/let.directive';

import { AuthenticatedGuard } from './guards/authenticated.guard';
import { ApiService } from './api/api.service';
import { AuthenticationService } from './authentication/authentication.service';
import { UserService } from './authentication/user.service';

import { reducers } from './store/reducers';
import { environment } from 'src/environments/environment';
import { LoaderStateModule } from './store/loader/loader.module';

@NgModule({
	imports: [
		AngularCommonModule,
		BrowserModule,
		HttpClientModule,
		StoreModule.forRoot(reducers),
		EffectsModule.forRoot([]),
		environment.production ? [] : StoreDevtoolsModule.instrument(),
		LoaderStateModule
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
