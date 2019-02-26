import { RecommenderDetailCard } from "./recommender-detail-card";

export const RecDetails: RecommenderDetailCard[] = [
    {
        id: 1,
        name: "BArC",
        description: `The spectacular growth in scholarly literature is widening the choice sets overwhelmingly for researchers. 
            As a result, the researchers face difficulty in identifying a suitable topic of importance from
            a collection of research topics.We present a recommender system to assist both novice and
            experienced researchers in selecting research topics in their chosen field.`
    },
    {
        id: 2,
        name: "LitRec",
        description: `Researchers typically need to filter several academic papers to find those 
                    relevant to their research. This filtering is cumbersome and time-consuming 
                    because the number of published academic papers is growing exponentially.Some 
                    researchers have focused on developing better recommender systems for academic 
                    papers by using citation analysis and content analysis. Most traditional content 
                    analysis is implemented using a keyword matching process, and thus it cannot consider 
                    the semantic contexts of items. Further, citation analysis-based techniques rely on 
                    the number of links directly citing or being cited in a single-level network. 
                    Consequently, it may be difficult to recommend the appropriate papers when the
                    paper of interest does not have enough citation information. To address these 
                    problems, we propose a recommendation system for academic papers that combines citation analysis and network analysis.
`
    },
    {
        id: 3,
        name: "EAR",
        description: `Scientific conference management involves many complex and multi-faceted activities, 
               which would make highly desirable for the organizing people to have a Web-based management system 
               that makes some of them a little easier to carry out. One of such activities is the assignment of 
               submitted papers to suitable reviewers, involving the authors, the reviewers and the conference chair. 
               Authors that submit the papers usually must fill a form with paper title, abstract and a set of conference 
               topics that fit their submission subject. Reviewers are required to register and declare their expertise 
               on the conference topics (among other things). Finally, the conference chair has to carry 
               out the review assignment taking into account the information provided by both the authors (about their paper) and the reviewers (about their competencies). `
    },
    {
        id: 4,
        name: "RPRS",
        description: `Peer review is an essential part of scientific communications. Scientific manuscripts and 
               research proposals are reviewed by several peer scientists for publication and funding respectively. 
               With steady increase in the number of research domains, scholarly venues, researchers and papers-managing 
               peer review process is becoming a daunting task. Different recommender systems on peer review platform is, 
               therefore, an emerging research area. In this paper, we present a novel decision support system for peer review of articles.`
    },
    {
        id: 5,
        name: "DISCOVER",
        description: "Basic Recommender System..."
    },
    {
        id: 6,
        name: "CNAVER",
        description: `Rapidly developing academic venues make it troublesome for researchers to recognize the ones that are most 
               in-accordance with their scholarly interests and are of high significance. Notwithstanding when the quality or the proposal 
               of a paper is great, the paper is rejected because of a mismatch between the area of the paper and the scope of the journal. 
               Each researcher knows the few best level venues for her specific field of interest, nevertheless a venue recommendation system 
               particularly becomes helpful when exploring a new field or when more choices are required. We propose a hybrid personalized 
               venue recommendation framework CNAVER which just requires title and abstract to assemble the learning base fundamental for 
               generating meaningful recommendations.`
    },
    {
        id: 7,
        name: "DRACoR",
        description: `In academia, researchers collaborate with their peers to improve quality of research and thereby 
               enhance academic profiles. However, information overload in big scholarly data poses a challenge in identifying 
               potential researchers for fruitful collaboration. Consequently, obtaining insightful and effective information 
               on potential collaborators has become a complex task.To recommend the most influential collaborator for researchers, 
               we need to focus  who are the most prolific and active researchers who can provide professional academic guidance for 
               a target researcher.In this article, we introduce a multi-level fusion based model for collaborator recommendation, 
               DRACoR (Deep learning and Random walk based Academic Collaborator Recommender)`
    },
    {
        id: 8,
        name: "HDM",
        description: `In the era of big scholarly data, citation recommendation is going to play a major role as it
            solves information overload issues by automatically suggesting relevant references that align
            with the context of a research paper. Such type of citations recommendation for a manuscript
            is highly valuable since it can substantially improve the efficiency and quality of literature
            search. Accurate citation inclusion is a major challenge for authors. Proper citations are needed
            in order to improve the quality of a paper. Most authors are very good with writing papers, but
            sometimes due to improper citations their papers are not published in high quality journals.
            we present our initiative of building a system which will recommend accurate
            citations at a faster speed for the paper under test. `
    }
];
