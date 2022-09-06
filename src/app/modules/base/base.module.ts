import {NgModule} from "@angular/core";
import {BrowserModule} from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

// Components
import {MatGridListModule} from "@angular/material/grid-list";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";

import {ViewBaseComponent} from "./view/base.component";
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import {NavbarComponent} from "./components/navbar/navbar.component";
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";
import {MatSidenavModule} from "@angular/material/sidenav";




@NgModule({
  declarations: [
    ViewBaseComponent,
    SidebarComponent,
    FooterComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    MatGridListModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatSidenavModule,
  ],
  exports: [
    ViewBaseComponent
  ]
})
export class ModuleBase {
}
