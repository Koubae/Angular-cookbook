import { NgModule} from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

// Components
import { ViewDashboardComponent} from "./view/dashboard-view.component";


const routes: Routes = [
  { path: '', component: ViewDashboardComponent, title: 'Dashboard'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export default class ModuleDashboardRouting {}
