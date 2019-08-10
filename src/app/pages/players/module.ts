import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule as AngularCommonModule } from '@angular/common';

import { UiModule } from '../../ui/ui.module';
import { CommonUiModule } from '../../common-ui';
import { CommonSdkModule } from '../../common-sdk';

import { PlayersPage } from './ui/players.page';
import { PlayersService } from './sdk/players.service';

@NgModule({
    imports: [
        AngularCommonModule,
        RouterModule,
        CommonUiModule,
        CommonSdkModule,
        UiModule
    ],
    declarations: [
        PlayersPage
    ],
    exports: [
        PlayersPage
    ],
    providers: [PlayersService]
})
export class PlayersModule { }
