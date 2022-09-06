import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {AppComponent} from "./app.component";

// App-Views-Modules
import { ModuleBase } from "./modules/base/base.module";
import { ModuleHome } from "./modules/home/home.module";
import { ModuleDashboard } from "./modules/dashboard/dashboard.module";
import {ModuleErrorPages} from "./modules/errorPages/errorPages.module";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // App-Modules
    AppRoutingModule,

    // App-Views-Modules
    ModuleBase,
    ModuleHome,
    ModuleDashboard,
    ModuleErrorPages,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
