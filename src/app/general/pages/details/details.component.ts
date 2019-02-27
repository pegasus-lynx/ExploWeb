import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { RecDetailService } from "../../services/rec-detail.service";
import { RecommenderDetail } from "../../data/recDetail.class";

@Component({
    selector: "app-details",
    templateUrl: "./details.component.html",
    styleUrls: ["./details.component.css"]
})
export class DetailsComponent implements OnInit {
    recdetail: RecommenderDetail;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private detailService: RecDetailService
    ) {}

    ngOnInit() {
        let id = this.route.snapshot.paramMap.get("id");

        this.recdetail = this.detailService.getRecommenderDetail(id);
    }
}
