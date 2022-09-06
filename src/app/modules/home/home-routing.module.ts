import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import {ViewHomeComponent} from "./view/home.component";


const routes: Routes = [
  { path: '', component: ViewHomeComponent, title: 'Home' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export default class ModuleHomeRouting {}
