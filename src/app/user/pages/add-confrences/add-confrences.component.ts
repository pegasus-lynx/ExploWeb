import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { UserService } from "../../user.service";
import { Router } from "@angular/router";
import { confrenceInterface } from "../../user.interface";

@Component({
    selector: "add-confrences",
    templateUrl: "./add-confrences.component.html",
    styleUrls: ["./add-confrences.component.css"]
})
export class AddConfrencesComponent implements OnInit {
    addConfrenceForm: FormGroup;

    constructor(
        private fb: FormBuilder,
        private serve: UserService,
        private router: Router
    ) {}

    ngOnInit() {
        this.addConfrenceForm = this.fb.group({
            title: "",
            year: "",
            authors_list: "",
            description: ""
        });
    }

    onSubmit() {
        const details: confrenceInterface = this.preprocessData(
            this.addConfrenceForm.value
        );
        let baseUrl: string = "http://127.0.0.1:8000/user/self/confrences/";
        this.serve.addConfrence(baseUrl, details).subscribe(
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
