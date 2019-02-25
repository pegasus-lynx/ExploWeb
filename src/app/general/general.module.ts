import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [PageNotFoundComponent, FooterComponent, ContactComponent, HeaderComponent, HeroComponent, HomeComponent],
  imports: [
    CommonModule
  ]
})
export class GeneralModule { }
