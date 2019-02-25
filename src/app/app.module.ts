import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

import { GeneralModule } from "./general/general.module";

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, GeneralModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
