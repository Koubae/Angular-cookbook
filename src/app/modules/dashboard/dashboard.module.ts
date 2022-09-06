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
import {RouterLinkWithHref, RouterOutlet} from "@angular/router";
import {KeyValuePipe, NgForOf} from "@angular/common";
import { NavbarsComponent } from './components/navbars/navbars.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { LayoutsComponent } from './components/layouts/layouts.component';
import { HeadersComponent } from './components/headers/headers.component';
import { FormsComponent } from './components/forms/forms.component';

@NgModule({
  declarations: [
    ViewDashboardComponent,
    NavbarsComponent,
    ButtonsComponent,
    LayoutsComponent,
    HeadersComponent,
    FormsComponent,
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
    NgForOf,
    RouterOutlet
  ],
  exports: [
    ViewDashboardComponent,
  ],
})
export class ModuleDashboard {}
