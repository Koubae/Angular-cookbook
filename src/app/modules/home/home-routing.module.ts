import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import {ViewHomeComponent} from "./components/home.component";


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: ViewHomeComponent, title: 'Home' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export default class ModuleHomeRouting {}
