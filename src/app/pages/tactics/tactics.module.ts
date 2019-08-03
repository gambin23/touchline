import { NgModule } from '@angular/core';
import { CommonModule as AngularCommonModule } from '@angular/common';

import { UiModule } from '../../ui/ui.module';
import { CommonModule } from '../../common/common.module';

import { TacticsService } from './sdk/tactics.service';
import { TacticsPage } from './ui/tactics.page';

@NgModule({
    imports: [
        AngularCommonModule,
        CommonModule,
        UiModule
    ],
    declarations: [
        TacticsPage
    ],
    exports: [
        TacticsPage
    ],
    providers: [TacticsService]
})
export class TacticsModule { }
