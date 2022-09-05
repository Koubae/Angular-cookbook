import {NgModule} from "@angular/core";

import ModuleErrorPagesRouting from "./errorPages-routing.module";
// Components
import { ViewErrorPagesComponent } from "./components/errorPages.component";


@NgModule({
  imports: [
    ModuleErrorPagesRouting
  ],
  declarations: [
    ViewErrorPagesComponent
  ]
})
export class ModuleErrorPages {}
