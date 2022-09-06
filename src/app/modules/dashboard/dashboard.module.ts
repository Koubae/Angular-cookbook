import { NgModule} from '@angular/core';

import ModuleDashboardRouting from "./dashboard-routing.module";

// Modules
import {ModuleCore} from "../../core/core.module";
// Components
import {ViewDashboardComponent} from "./view/dashboard-view.component";

@NgModule({
  declarations: [
    ViewDashboardComponent,
  ],
  imports: [
    ModuleDashboardRouting,
    ModuleCore
  ],
  exports: [
    ViewDashboardComponent,
  ],
})
export class ModuleDashboard {}
