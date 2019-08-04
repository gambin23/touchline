import { NgModule } from '@angular/core';

import { AuthenticationService } from './authentication.service';
import { PlayersService } from './players.service';
import { UserService } from './user.service';

@NgModule({
	imports: [],
	providers: [
		AuthenticationService,
		PlayersService,
		UserService
	],
})
export class ServicesModule { }
