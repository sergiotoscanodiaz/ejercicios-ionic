import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ejercicio03Page } from './ejercicio03.page';

const routes: Routes = [
  {
    path: '',
    component: Ejercicio03Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ejercicio03PageRoutingModule {}
