import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { BarcQuery } from "../../system.interface";
import { SystemService } from "../../system.service";

@Component({
    selector: "app-barc-query",
    templateUrl: "./barc-query.component.html",
    styleUrls: ["./barc-query.component.css"]
})
export class BarcQueryComponent implements OnInit {
    barcQueryForm: FormGroup;
    loading: boolean = false;
    success: boolean = false;

    resultToken: string;

    constructor(private fb: FormBuilder, private ss: SystemService) {}

    ngOnInit() {
        this.barcQueryForm = this.fb.group({
            title: "",
            abstract: ""
        });
    }

    onSubmit() {
        this.loading = true;

        let barcQuery: BarcQuery = this.barcQueryForm.value;
        let baseUrl: string = "http://127.0.0.1:8000/recommender/request/barc/";

        console.log(barcQuery);

        this.ss.getTokenForBarcQuery(baseUrl, barcQuery).subscribe(data => {
            this.setResultToken(data);
        });

        this.success = true;
    }

    setResultToken(data) {
        this.resultToken = data.result_token;
    }
}
