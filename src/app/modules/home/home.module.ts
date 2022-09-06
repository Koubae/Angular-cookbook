import { NgModule} from "@angular/core";

import ModuleHomeRouting from "./home-routing.module";
// Components
import { ViewHomeComponent } from "./view/home.component";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatButtonModule} from "@angular/material/button";
import {NgIf} from "@angular/common";
import { HeaderComponent } from '../../core/components/header/header.component';
import { ContentComponent } from '../../core/components/content/content.component';


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
    ContentComponent,
  ],
  exports: [
    ViewHomeComponent
  ]
})
export class ModuleHome {}
