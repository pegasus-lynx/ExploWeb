import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { UserService } from "../../user.service";
import { Router } from "@angular/router";
import { journalInterface } from "../../user.interface";

@Component({
    selector: "add-journals",
    templateUrl: "./add-journals.component.html",
    styleUrls: ["./add-journals.component.css"]
})
export class AddJournalsComponent implements OnInit {
    addJournalForm: FormGroup;

    constructor(
        private fb: FormBuilder,
        private serve: UserService,
        private router: Router
    ) {}

    ngOnInit() {
        this.addJournalForm = this.fb.group({
            title: "",
            year: "",
            authors_list: "",
            journal: "",
            indexed_in: ""
        });
    }

    onSubmit() {
        const details: journalInterface = this.preprocessData(
            this.addJournalForm.value
        );
        let baseUrl: string = "http://127.0.0.1:8000/user/profile/create/";
        this.serve.addJournal(baseUrl, details).subscribe(
            data => {
                console.log(data);
                this.router.navigateByUrl("/user/dashboard");
                window.location.reload();
            },
            err => {
                console.log(err);
            }
        );
    }

    preprocessData(rawDetails) {
        let str = rawDetails.authors_list;
        rawDetails.authors_list = this.convertToArray(str);
        return rawDetails;
    }

    convertToArray(str: string) {
        return str.split(",");
    }
}
