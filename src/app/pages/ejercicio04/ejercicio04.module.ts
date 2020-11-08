import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ejercicio04PageRoutingModule } from './ejercicio04-routing.module';

import { Ejercicio04Page } from './ejercicio04.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ejercicio04PageRoutingModule
  ],
  declarations: [Ejercicio04Page]
})
export class Ejercicio04PageModule {}
