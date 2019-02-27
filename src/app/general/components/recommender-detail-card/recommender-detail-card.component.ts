import { Component, OnInit } from "@angular/core";
import { RecommenderDetail } from "../../data/recDetail.class";
import { RecDetailService } from "../../services/rec-detail.service";
// import { RecDetails } from "../../data/recDetail";

@Component({
    selector: "app-recommender-detail-card",
    templateUrl: "./recommender-detail-card.component.html",
    styleUrls: ["./recommender-detail-card.component.css"]
})
export class RecommenderDetailCardComponent implements OnInit {
    recdetails: RecommenderDetail[];

    constructor(private detailService: RecDetailService) {
        this.recdetails = this.detailService.getRecommederDetails();
    }

    ngOnInit() {}
}
