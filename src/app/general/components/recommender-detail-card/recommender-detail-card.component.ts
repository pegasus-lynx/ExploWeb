import { Component, OnInit } from "@angular/core";

import { RecDetails } from "./mock-rec-detail";

@Component({
    selector: "app-recommender-detail-card",
    templateUrl: "./recommender-detail-card.component.html",
    styleUrls: ["./recommender-detail-card.component.css"]
})
export class RecommenderDetailCardComponent implements OnInit {
    recdetails = RecDetails;

    constructor() {}

    ngOnInit() {}
}
