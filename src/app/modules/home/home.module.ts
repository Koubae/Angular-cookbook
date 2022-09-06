import {NgModule} from "@angular/core";

import ModuleHomeRouting from "./home-routing.module";
// Material UI
import {MatGridListModule} from "@angular/material/grid-list";
import {MatButtonModule} from "@angular/material/button";
import {NgClass, NgIf} from "@angular/common";
import {MatCardModule} from "@angular/material/card";
import {RouterLink} from "@angular/router";

// Modules
import {ModuleCore} from "../../core/core.module";
// Components
import {ViewHomeComponent} from "./view/home.component";


@NgModule({
  declarations: [
    ViewHomeComponent
  ],
  imports: [
    ModuleHomeRouting,
    ModuleCore,
    MatGridListModule,
    MatButtonModule,
    NgIf,
    MatCardModule,
    RouterLink,
    NgClass,
  ],
  exports: [
    ViewHomeComponent
  ]
})
export class ModuleHome {}
