import { NgModule } from '@angular/core';
import { CommonModule as AngularCommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UiModule } from '../../ui/ui.module';
import { CommonUiModule } from '../../common-ui';
import { CommonSdkModule } from '../../common-sdk';

import { LeaguePage } from './ui/league.page';
import { LeagueService } from './sdk/league.service';

@NgModule({
    imports: [
        AngularCommonModule,
        RouterModule,
        CommonUiModule,
        CommonSdkModule,
        UiModule
    ],
    declarations: [
        LeaguePage
    ],
    exports: [
        LeaguePage
    ],
    providers: [LeagueService]
})
export class LeagueModule { }
