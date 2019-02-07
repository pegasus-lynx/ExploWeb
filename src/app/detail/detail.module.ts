import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { DetailComponent } from './detail.component';

@NgModule({
  declarations: [
    NavbarComponent,
    DetailComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class DetailModule { }
