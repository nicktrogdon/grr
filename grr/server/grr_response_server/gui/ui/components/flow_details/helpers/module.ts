import {ClipboardModule} from '@angular/cdk/clipboard';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTooltipModule} from '@angular/material/tooltip';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';

import {ExpandableHashModule} from '../../../components/expandable_hash/module';
import {NetworkConnectionFamilyPipe, NetworkConnectionTypePipe} from '../../../components/flow_details/helpers/network_connection_pipes';
import {HumanReadableSizeModule} from '../../../components/human_readable_size/module';
import {TimestampModule} from '../../../components/timestamp/module';
import {FileModeModule} from '../../data_renderers/file_mode/file_mode_module';
import {CopyButtonModule} from '../../helpers/copy_button/copy_button_module';
import {DrawerLinkModule} from '../../helpers/drawer_link/drawer_link_module';
import {FilterPaginate} from '../../helpers/filter_paginate/filter_paginate';

import {DynamicResultSection} from './dynamic_result_section';
import {FileResultsTable} from './file_results_table';
import {LoadFlowResultsDirective} from './load_flow_results_directive';
import {OsqueryResultsTable} from './osquery_results_table';
import {RegistryResultsTable} from './registry_results_table';
import {ResultAccordion} from './result_accordion';

/**
 * Module for the flow_picker details component.
 */
@NgModule({
  imports: [
    // TODO: re-enable clang format when solved.
    // clang-format off
    // keep-sorted start block=yes
    BrowserAnimationsModule,
    ClipboardModule,
    CommonModule,
    CopyButtonModule,
    DrawerLinkModule,
    ExpandableHashModule,
    FileModeModule,
    FilterPaginate,
    FormsModule,
    HumanReadableSizeModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    MatTooltipModule,
    ReactiveFormsModule,
    RouterModule,
    TimestampModule,
    // keep-sorted end
    // clang-format on
  ],
  declarations: [
    // TODO: re-enable clang format when solved.
    // clang-format off
    // keep-sorted start block=yes
    DynamicResultSection,
    FileResultsTable,
    LoadFlowResultsDirective,
    NetworkConnectionFamilyPipe,
    NetworkConnectionTypePipe,
    OsqueryResultsTable,
    RegistryResultsTable,
    ResultAccordion,
    // keep-sorted end
    // clang-format on
  ],
  exports: [
    // TODO: re-enable clang format when solved.
    // clang-format off
    // keep-sorted start block=yes
    DynamicResultSection,
    FileResultsTable,
    FilterPaginate,
    LoadFlowResultsDirective,
    NetworkConnectionFamilyPipe,
    NetworkConnectionTypePipe,
    OsqueryResultsTable,
    RegistryResultsTable,
    ResultAccordion,
    // keep-sorted end
    // clang-format on
  ],
})
export class HelpersModule {
}
