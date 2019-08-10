import { NgModule } from '@angular/core';
import { CommonModule as AngularCommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UiModule } from '../../ui/ui.module';
import { CommonUiModule } from '../../common-ui';
import { CommonSdkModule } from '../../common-sdk';

import { PlayerPage } from './ui/player.page';
import { PlayerDetailsComponent } from './ui/details/details.component';
import { PlayerService } from './sdk/player.service';

@NgModule({
    imports: [
        AngularCommonModule,
        RouterModule,
        CommonUiModule,
        CommonSdkModule,
        UiModule
    ],
    declarations: [
        PlayerPage,
        PlayerDetailsComponent
    ],
    exports: [
        PlayerPage,
        PlayerDetailsComponent
    ],
    providers: [PlayerService]
})
export class PlayerModule { }
