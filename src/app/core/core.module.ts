import {NgModule} from "@angular/core";

// Material UI
import {MatCardModule} from "@angular/material/card";
import {NgClass, NgIf} from "@angular/common";
import {MatGridListModule} from "@angular/material/grid-list";

// Components
import {HeaderComponent} from "./components/header/header.component";
import {ContentComponent} from "./components/content/content.component";
import {PaperComponent} from "./components/paper/paper.component";
import {RouterLinkWithHref} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    HeaderComponent,
    ContentComponent,
    PaperComponent
  ],
  imports: [
    MatCardModule,
    NgClass,
    MatGridListModule,
    NgIf,
    RouterLinkWithHref,
    MatButtonModule
  ],
  exports: [
    HeaderComponent,
    ContentComponent,
    PaperComponent
  ]
})
export class ModuleCore {}
