import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LupasandiPage } from './lupasandi.page';

const routes: Routes = [
  {
    path: '',
    component: LupasandiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LupasandiPageRoutingModule {}
