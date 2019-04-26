import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

// import { DataService } from "../../system.service";

@Component({
    selector: "result-token-form",
    templateUrl: "./result.component.html",
    styleUrls: ["./result.component.css"]
})
export class ResultComponent implements OnInit {
    resultForm: FormGroup;

    token: string;

    @Output() sendToken = new EventEmitter<string>();

    constructor(private fb: FormBuilder) {}

    ngOnInit() {
        this.resultForm = this.fb.group({
            token: ""
        });
    }

    onSubmit() {
        console.log(this.resultForm.value);
        this.sendToken.emit(this.resultForm.value.token);
    }
}
