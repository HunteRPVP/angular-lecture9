import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mod2Component } from './mod2.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [Mod2Component],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    Mod2Component
  ]
})
export class Mod2Module { }
