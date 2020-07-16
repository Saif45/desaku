import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MbscModule } from '@mobiscroll/angular';

import { IonicModule } from '@ionic/angular';

import { LupaPageRoutingModule } from './lupa-routing.module';

import { LupaPage } from './lupa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LupaPageRoutingModule,
    MbscModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  declarations: [LupaPage]
})
export class LupaPageModule {}
