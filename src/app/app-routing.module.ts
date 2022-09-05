import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import ModuleHome from "./modules/home/home.module";


const routes: Routes = [
  {path: '', pathMatch: 'full', component:ModuleHome},
  // todo: add error handlers
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
