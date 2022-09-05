import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { ViewErrorPagesComponent} from "./view/errorPages.component";

const routes: Routes = [
  { path: 'error', component: ViewErrorPagesComponent,  title: "Error" }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export default class ModuleErrorPagesRouting {}
