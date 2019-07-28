import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationService } from './authentication.service';
import { PlayersService } from './players.service';
import { UserService } from './user.service';
import { RouterModule } from '@angular/router';

@NgModule({
	imports: [],
	providers: [
		AuthenticationService,
		PlayersService,
		UserService
	],
})
export class ServicesModule { }
