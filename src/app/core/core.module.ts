import {NgModule} from "@angular/core";

// Material UI
import {MatCardModule} from "@angular/material/card";
import {NgClass} from "@angular/common";
import {MatGridListModule} from "@angular/material/grid-list";

// Components
import {HeaderComponent} from "./components/header/header.component";
import {ContentComponent} from "./components/content/content.component";
import {PaperComponent} from "./components/paper/paper.component";



@NgModule({
  declarations: [
    HeaderComponent,
    ContentComponent,
    PaperComponent
  ],
  imports: [
    MatCardModule,
    NgClass,
    MatGridListModule
  ],
  exports: [
    HeaderComponent,
    ContentComponent,
    PaperComponent
  ]
})
export class ModuleCore {}
