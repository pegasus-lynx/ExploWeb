import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    DetailComponent,
    ContactComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DetailComponent,
    ContactComponent
  ]
})
export class DetailModule { }
