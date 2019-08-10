import { NgModule } from '@angular/core';
import { CommonModule as AngularCommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UiModule } from '../../ui/ui.module';
import { CommonUiModule } from '../../common-ui';
import { CommonSdkModule } from '../../common-sdk';

import { ClubPage } from './ui/club.page';
import { ClubService } from './sdk/club.service';

@NgModule({
    imports: [
        AngularCommonModule,
        RouterModule,
        CommonUiModule,
        CommonSdkModule,
        UiModule
    ],
    declarations: [
        ClubPage
    ],
    exports: [
        ClubPage
    ],
    providers: [ClubService]
})
export class ClubModule { }
