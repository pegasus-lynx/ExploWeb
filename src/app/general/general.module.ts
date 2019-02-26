import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// Components.
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ContactComponent } from "./components/contact/contact.component";
import { HeaderComponent } from "./components/header/header.component";
import { HeroComponent } from "./components/hero/hero.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { AboutComponent } from "./components/about/about.component";
import { RecommenderDetailCardComponent } from "./components/recommender-detail-card/recommender-detail-card.component";
import { ContactCardComponent } from "./components/contact-card/contact-card.component";
import { ContactFooterComponent } from "./components/contact-footer/contact-footer.component";

// Pages.
import { HomeComponent } from "./pages/home/home.component";
import { ContactUsComponent } from "./pages/contact-us/contact-us.component";

// Routing.
import { GeneralRoutingModule } from "./general-routing.module";
import { DetailsComponent } from './pages/details/details.component';

@NgModule({
    imports: [CommonModule, GeneralRoutingModule],
    declarations: [
        PageNotFoundComponent,
        FooterComponent,
        ContactComponent,
        HeaderComponent,
        HeroComponent,
        HomeComponent,
        AboutComponent,
        NavbarComponent,
        RecommenderDetailCardComponent,
        ContactCardComponent,
        ContactFooterComponent,
        ContactUsComponent,
        DetailsComponent
    ]
})
export class GeneralModule {}
