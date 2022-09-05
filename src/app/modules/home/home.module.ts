import { NgModule} from "@angular/core";

// Components
import ViewHomeComponent from "./components/home.component";
import ModuleHomeRouting from "./home-routing.module";


@NgModule({
  imports: [
    ModuleHomeRouting,
  ],
  declarations: [
    ViewHomeComponent,
  ]
})
export default class ModuleHome {}
