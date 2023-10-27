import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgeDeterminationPage } from './age-determination.page';

const routes: Routes = [
  {
    path: '',
    component: AgeDeterminationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgeDeterminationPageRoutingModule {}
