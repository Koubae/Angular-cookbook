import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

// Components
import {ViewDashboardComponent} from "./view/dashboard-view.component";
import {NavbarsComponent} from "./components/navbars/navbars.component";
import {ButtonsComponent} from "./components/buttons/buttons.component";
import {LayoutsComponent} from "./components/layouts/layouts.component";
import {HeadersComponent} from "./components/headers/headers.component";
import {FormsComponent} from "./components/forms/forms.component";


const routes: Routes = [
  {
    path: '',
    component: ViewDashboardComponent,
    title: 'Dashboard',
    children: [
      {path: 'nav-bars', component: NavbarsComponent, title: 'Navbars'},
      {path: 'buttons', component: ButtonsComponent, title: 'Buttons'},
      {path: 'layouts', component: LayoutsComponent, title: 'Layouts'},
      {path: 'headers', component: HeadersComponent, title: 'Headers'},
      {path: 'forms', component: FormsComponent, title: 'Forms'},
    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export default class ModuleDashboardRouting {
}
