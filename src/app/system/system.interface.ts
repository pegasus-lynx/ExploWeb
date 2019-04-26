// Result interfaces:

export interface BarcResult {
    title: string;
    abstract: string;
    top_papers: string[];
    top_authors: string[];
    active_areas: string[];
    top_confrences: string[];
}

// export class BarcResultClass implements BarcResult {
//     title: string;
//     abstract: string;
//     top_papers: string[];
//     top_authors: string[];
//     active_areas: string[];
//     top_confrences: string[];

//     constructor(data: BarcResult) {
//         this.title = data["title"];
//         this.abstract = data["abstract"];
//         this.top_authors = data["top_authors"];
//         this.top_confrences = data["top_confrences"];
//         this.top_papers = data["top_papers"];
//     }
// }

// Query interfaces:

export interface BarcQuery {
    title: string;
    abstract: string;
}
