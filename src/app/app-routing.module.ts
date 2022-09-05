import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ModuleHome} from "./modules/home/home.module";
import {ViewHomeComponent} from "./modules/home/components/home.component";


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/home/home.module').then(m => m.ModuleHome),
    title: "Home"

  },
  {
    path: '**',
    redirectTo: 'error',
    title: "Error"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
