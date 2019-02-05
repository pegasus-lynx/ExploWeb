import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppbarComponent } from './appbar/appbar.component';
import { HeroComponent } from './hero/hero.component';
import { FooterComponent } from './footer/footer.component';
import { DetailsComponent } from './details.component';
import { BodyComponent } from './body/body.component';
import { IntroComponent } from './intro/intro.component';

@NgModule({
  declarations: [AppbarComponent, HeroComponent, FooterComponent, DetailsComponent, BodyComponent, IntroComponent],
  imports: [
    CommonModule
  ]
})
export class DetailsModule { }
