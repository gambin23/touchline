import { NgModule } from '@angular/core';
import { CommonModule as AngularCommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UiModule } from '../../ui/ui.module';
import { CommonModule } from '../../common/common.module';

import { ClubPage } from './ui/club.page';
import { ClubService } from './sdk/club.service';

@NgModule({
    imports: [
        AngularCommonModule,
        RouterModule,
        CommonModule,
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
