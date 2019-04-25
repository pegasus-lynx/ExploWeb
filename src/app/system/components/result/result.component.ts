import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
    selector: "app-result",
    templateUrl: "./result.component.html",
    styleUrls: ["./result.component.css"]
})
export class ResultComponent implements OnInit {
    resultForm: FormGroup;

    constructor(private fb: FormBuilder) {}

    ngOnInit() {
        this.resultForm = this.fb.group({
            token: ""
        });
    }
}
