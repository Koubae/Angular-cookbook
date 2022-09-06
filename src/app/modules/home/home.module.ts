import { NgModule} from "@angular/core";

import ModuleHomeRouting from "./home-routing.module";
// Components
import { ViewHomeComponent } from "./view/home.component";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatButtonModule} from "@angular/material/button";
import {NgClass, NgIf} from "@angular/common";
import { HeaderComponent } from '../../core/components/header/header.component';
import { ContentComponent } from '../../core/components/content/content.component';
import {MatCardModule} from "@angular/material/card";
import {RouterLink} from "@angular/router";
import { PaperComponent } from '../../core/components/paper/paper.component';


@NgModule({
  imports: [
    ModuleHomeRouting,
    MatGridListModule,
    MatButtonModule,
    NgIf,
    MatCardModule,
    RouterLink,
    NgClass,
  ],
  declarations: [
    ViewHomeComponent,
    HeaderComponent,
    ContentComponent,
    PaperComponent,
  ],
  exports: [
    ViewHomeComponent
  ]
})
export class ModuleHome {}
