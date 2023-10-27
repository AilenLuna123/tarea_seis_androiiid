import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgeDeterminationPageRoutingModule } from './age-determination-routing.module';

import { AgeDeterminationPage } from './age-determination.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgeDeterminationPageRoutingModule
  ],
  declarations: [AgeDeterminationPage]
})
export class AgeDeterminationPageModule {}
