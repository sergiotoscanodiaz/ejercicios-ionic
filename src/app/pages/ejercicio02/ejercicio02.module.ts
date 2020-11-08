import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ejercicio02PageRoutingModule } from './ejercicio02-routing.module';

import { Ejercicio02Page } from './ejercicio02.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ejercicio02PageRoutingModule
  ],
  declarations: [Ejercicio02Page]
})
export class Ejercicio02PageModule {}
