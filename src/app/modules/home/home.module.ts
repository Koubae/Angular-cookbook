import { NgModule} from "@angular/core";

import ModuleHomeRouting from "./home-routing.module";
// Components
import { ViewHomeComponent } from "./view/home.component";


@NgModule({
  imports: [
    ModuleHomeRouting,
  ],
  declarations: [
    ViewHomeComponent,
  ],
  exports: [
    ViewHomeComponent
  ]
})
export class ModuleHome {}
