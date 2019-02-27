import { Injectable } from "@angular/core";
import { RecDetails } from "../data/recDetail";
import { isString } from "util";

@Injectable({
    providedIn: "root"
})
export class RecDetailService {
    getRecommederDetails() {
        console.log(RecDetails);
        return RecDetails;
    }

    getRecommenderDetail(id: number | string) {
        if (isString(id)) {
            id = parseInt(id);
        }
        return RecDetails[id - 1];
    }
}
