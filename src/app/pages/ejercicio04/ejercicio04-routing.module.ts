import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ejercicio04Page } from './ejercicio04.page';

const routes: Routes = [
  {
    path: '',
    component: Ejercicio04Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ejercicio04PageRoutingModule {}
