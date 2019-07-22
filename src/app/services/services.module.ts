import { NgModule } from '@angular/core';

import { AuthenticationService } from './authentication.service';
import { PlayersService } from './players.service';

@NgModule({
	imports: [],
	providers: [
		AuthenticationService,
		PlayersService
	],
})
export class ServicesModule { }
