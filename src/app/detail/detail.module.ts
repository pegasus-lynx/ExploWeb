import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail.component';
import { ContactComponent } from './contact/contact.component';
import { IntroComponent } from './intro/intro.component';
import { RecDetailCardComponent } from './rec-detail-card/rec-detail-card.component';

@NgModule({
  declarations: [
    DetailComponent,
    ContactComponent,
    IntroComponent,
    RecDetailCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DetailComponent,
    ContactComponent,
    IntroComponent
  ]
})
export class DetailModule { }
