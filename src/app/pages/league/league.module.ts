import { NgModule } from '@angular/core';
import { CommonModule as AngularCommonModule } from '@angular/common';

import { UiModule } from '../../ui/ui.module';
import { CommonModule } from '../../common/common.module';

import { LeaguePage } from './ui/league.page';
import { LeagueService } from './sdk/league.service';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        AngularCommonModule,
        RouterModule,
        CommonModule,
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
