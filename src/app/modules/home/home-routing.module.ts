import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import ViewHomeComponent from "./components/home.component";


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: ViewHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export default class ModuleHomeRouting {}
