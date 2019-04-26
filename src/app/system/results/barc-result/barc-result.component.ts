import { Component, OnInit, DoCheck } from "@angular/core";

import { SystemService } from "../../system.service";

import { BarcResult, BarcResultClass } from "../../system.interface";

@Component({
    selector: "app-barc-result",
    templateUrl: "./barc-result.component.html",
    styleUrls: ["./barc-result.component.css"]
})
export class BarcResultComponent implements OnInit, DoCheck {
    resultToken: string = "none";
    oldResultToken: string = "none";
    showResult: boolean = false;
    public res: BarcResultClass;
    public errorMsg;

    constructor(private ss: SystemService) {}

    ngOnInit() {}

    ngDoCheck() {
        if (this.resultToken !== this.oldResultToken) {
            this.oldResultToken = this.resultToken;

            let baseUrl = "http://127.0.0.1:8000/recommender/result/barc/";

            this.ss.getBarcResult(baseUrl, this.resultToken).subscribe(data => {
                this.showResult = true;
                this.updateResult(data);
                console.log(this.res);
                console.log(this.res.title);
            });
        }
    }

    updateResult(data) {
        // this.res = new BarcResultClass(data);
        this.res = data.result;
    }

    getToken(token: string) {
        this.resultToken = token;
    }
}
