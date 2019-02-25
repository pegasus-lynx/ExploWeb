import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

import { DetailModule } from "./detail/detail.module";
import { GeneralModule } from "./general/general.module";

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, DetailModule, GeneralModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
