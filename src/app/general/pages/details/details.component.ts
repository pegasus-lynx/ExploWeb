import { Component, OnInit, DoCheck } from "@angular/core";
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
    cur_id: string;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private detailService: RecDetailService
    ) {}

    ngOnInit() {
        let id = this.route.snapshot.paramMap.get("id");
        this.cur_id = id;
        this.recdetail = this.detailService.getRecommenderDetail(id);
    }

    ngDoCheck() {
        let new_id = this.route.snapshot.paramMap.get("id");
        if (new_id != this.cur_id) {
            window.location.reload();
        }
    }
}
