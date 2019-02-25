import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { RecommenderDetailCardComponent } from './components/recommender-detail-card/recommender-detail-card.component';

@NgModule({
  declarations: [PageNotFoundComponent, FooterComponent, ContactComponent, HeaderComponent, HeroComponent, HomeComponent, AboutComponent, RecommenderDetailCardComponent],
  imports: [
    CommonModule
  ]
})
export class GeneralModule { }
