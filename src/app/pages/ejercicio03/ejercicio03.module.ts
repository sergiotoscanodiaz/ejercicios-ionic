import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ejercicio03PageRoutingModule } from './ejercicio03-routing.module';

import { Ejercicio03Page } from './ejercicio03.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ejercicio03PageRoutingModule
  ],
  declarations: [Ejercicio03Page]
})
export class Ejercicio03PageModule {}
