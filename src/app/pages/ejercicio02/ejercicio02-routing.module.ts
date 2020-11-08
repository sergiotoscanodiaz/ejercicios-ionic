import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ejercicio02Page } from './ejercicio02.page';

const routes: Routes = [
  {
    path: '',
    component: Ejercicio02Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ejercicio02PageRoutingModule {}
