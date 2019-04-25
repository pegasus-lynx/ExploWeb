import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BarcQueryComponent } from "./forms/barc-query/barc-query.component";
import { BarcResultComponent } from "./results/barc-result/barc-result.component";
import { ResultComponent } from "./components/result/result.component";
import { TokenComponent } from "./components/token/token.component";

const systemRoutes: Routes = [
    {
        path: "token",
        component: TokenComponent
    },
    {
        path: "query/barc",
        component: BarcQueryComponent
    },
    {
        path: "result",
        component: ResultComponent
    },
    {
        path: "result/barc/:token",
        component: BarcResultComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(systemRoutes)],
    exports: [RouterModule]
})
export class SystemRoutingModule {}
