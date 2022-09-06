import { NgModule} from "@angular/core";

import ModuleHomeRouting from "./home-routing.module";
// Components
import { ViewHomeComponent } from "./view/home.component";
import { HeaderComponent } from '../../core/components/header/header.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatButtonModule} from "@angular/material/button";
import {NgIf} from "@angular/common";


@NgModule({
  imports: [
    ModuleHomeRouting,
    MatGridListModule,
    MatButtonModule,
    NgIf,
  ],
  declarations: [
    ViewHomeComponent,
    HeaderComponent,
  ],
  exports: [
    ViewHomeComponent
  ]
})
export class ModuleHome {}
