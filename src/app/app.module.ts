import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './modules/base/app.component';

// App-Modules
import { ModuleHome } from "./modules/home/home.module";
import {ModuleErrorPages} from "./modules/errorPages/errorPages.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // App-Modules
    AppRoutingModule,

    // App-Views-Modules
    ModuleHome,
    ModuleErrorPages
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
