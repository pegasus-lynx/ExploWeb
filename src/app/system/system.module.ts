import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GeneralModule } from "src/app/general/general.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SystemRoutingModule } from "./system-routing.module";

import { SystemComponent } from "./system.component";
import { TokenComponent } from "./components/token/token.component";
import { BarcQueryComponent } from "./forms/barc-query/barc-query.component";
import { ResultComponent } from "./components/result/result.component";
import { BarcResultComponent } from './results/barc-result/barc-result.component';
import { ResultPageComponent } from './pages/result-page/result-page.component';

@NgModule({
    declarations: [
        SystemComponent,
        TokenComponent,
        BarcQueryComponent,
        ResultComponent,
        BarcResultComponent,
        ResultPageComponent
    ],
    imports: [
        CommonModule,
        GeneralModule,
        FormsModule,
        ReactiveFormsModule,
        SystemRoutingModule
    ]
})
export class SystemModule {}
