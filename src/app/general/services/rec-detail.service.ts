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

    getRecommenderDetail(id: string) {
        var ind: number;
        if (isString(id)) {
            ind = parseInt(id);
        }
        return RecDetails[ind - 1];
    }
}
