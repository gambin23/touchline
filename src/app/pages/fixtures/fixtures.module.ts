import { NgModule } from '@angular/core';
import { CommonModule as AngularCommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UiModule } from '../../ui/ui.module';
import { CommonModule } from '../../common/common.module';

import { FixturesPage } from './ui/fixtures.page';
import { FixturesService } from './sdk/fixtures.service';

@NgModule({
    imports: [
        AngularCommonModule,
        RouterModule,
        CommonModule,
        UiModule
    ],
    declarations: [
        FixturesPage
    ],
    exports: [
        FixturesPage
    ],
    providers: [FixturesService]
})
export class FixturesModule { }
