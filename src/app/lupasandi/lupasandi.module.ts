import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MbscModule } from '@mobiscroll/angular';

import { IonicModule } from '@ionic/angular';

import { LupasandiPageRoutingModule } from './lupasandi-routing.module';

import { LupasandiPage } from './lupasandi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LupasandiPageRoutingModule,
    MbscModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  declarations: [LupasandiPage]
})
export class LupasandiPageModule {}
