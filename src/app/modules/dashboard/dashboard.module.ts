import { NgModule} from '@angular/core';

import ModuleDashboardRouting from "./dashboard-routing.module";

// Modules
import {ModuleCore} from "../../core/core.module";
// Components
import {ViewDashboardComponent} from "./view/dashboard-view.component";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {RouterLinkWithHref} from "@angular/router";
import {KeyValuePipe, NgForOf} from "@angular/common";

@NgModule({
  declarations: [
    ViewDashboardComponent,
  ],
  imports: [
    ModuleDashboardRouting,
    ModuleCore,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    RouterLinkWithHref,
    KeyValuePipe,
    NgForOf
  ],
  exports: [
    ViewDashboardComponent,
  ],
})
export class ModuleDashboard {}
