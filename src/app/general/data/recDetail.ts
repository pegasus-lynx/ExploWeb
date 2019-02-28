import { RecommenderDetail } from "./recDetail.class";

export const RecDetails: RecommenderDetail[] = [
    {
        id: 1,
        name: "BArC",
        shortDescription: `The spectacular growth in scholarly literature is widening the choice sets overwhelmingly for researchers. 
            As a result, the researchers face difficulty in identifying a suitable topic of importance from
            a collection of research topics.We present a recommender system to assist both novice and
            experienced researchers in selecting research topics in their chosen field.`,
        longDescription: `Researchers are producing a huge volume of articles. The spectacular growth in
            scholarly literature is widening the choice sets overwhelmingly for researchers. As a
            result, the researchers face difficulty in identifying a suitable topic of importance from
            a collection of research topics. This remains an ill-de??ned problem for researchers due
            to the overload of choices. The problem is even more severe for new researchers due
            to the lack of experience. Hence, there is a definite need for a system that would
            help researchers make decisions on appropriate topics. Recommender systems are
            good options for performing this very task. In this report, we present a recommender
            system to assist both novice and experienced researchers in selecting research topics
            in their chosen field.`,
        schemaImage: "../../../assets/final.png",
        features: [
            "Emerging topics identification",
            "Search literatures",
            "Search top authors,top venues",
            "Identification of datasets and algorithm",
            "Active area identification"
        ]
    },
    {
        id: 2,
        name: "LitRec",
        shortDescription: `Researchers typically need to filter several academic papers to find those 
                    relevant to their research. This filtering is cumbersome and time-consuming 
                    because the number of published academic papers is growing exponentially.Some 
                    researchers have focused on developing better recommender systems for academic 
                    papers by using citation analysis and content analysis. Most traditional content 
                    analysis is implemented using a keyword matching process, and thus it cannot consider 
                    the semantic contexts of items. Further, citation analysis-based techniques rely on 
                    the number of links directly citing or being cited in a single-level network. 
                    Consequently, it may be difficult to recommend the appropriate papers when the
                    paper of interest does not have enough citation information. To address these 
                    problems, we propose a recommendation system for academic papers that combines citation analysis and network analysis.`,
        longDescription: `Researchers typically need to filter several academic papers to find those 
        relevant to their research. This filtering is cumbersome and time-consuming because the number
        of published academic papers is growing exponentially.Some researchers have focused on developing
        better recommender systems for academic papers by using citation analysis and content analysis.
        Most traditional content analysis is implemented using a keyword matching process, and thus
        it cannot consider the semantic contexts of items. Further, citation analysis-based techniques
        rely on the number of links directly citing or being cited in a single-level network.
        Consequently, it may be difficult to recommend the appropriate papers when the paper of interest
        does not have enough citation information. To address these problems, we propose a recommendation
        system for academic papers that combines citation analysis and network analysis.`,
        schemaImage: "../../../assets/LitRec.PNG",
        features: [
            "Search key literatures",
            "Identify problem statements",
            "Related reasearch papers"
        ]
    },
    {
        id: 3,
        name: "EAR",
        shortDescription: `Scientific conference management involves many complex and multi-faceted activities, 
               which would make highly desirable for the organizing people to have a Web-based management system 
               that makes some of them a little easier to carry out. One of such activities is the assignment of 
               submitted papers to suitable reviewers, involving the authors, the reviewers and the conference chair. 
               Authors that submit the papers usually must fill a form with paper title, abstract and a set of conference 
               topics that fit their submission subject. Reviewers are required to register and declare their expertise 
               on the conference topics (among other things). Finally, the conference chair has to carry 
               out the review assignment taking into account the information provided by both the authors (about their paper) and the reviewers (about their competencies). `,
        longDescription: `Recommendation System for Technical paper reviewer assignment is very important 
                for many applications especially in the academic environment and industry. Previous work to build
                the expert finding system based on a paper title. Here we take a scenario of a conference where
        they need some experts who can review the paper for that we identify whether the reviewer is
        expert in that topic or domain to review the paper.Scientific conference management involves
        many complex and multi-faceted activities, which would make highly desirable for the organizing
        people to have a Web-based management system that makes some of them a little easier to carry out.
        One of such activities is the assignment of submitted papers to suitable reviewers, involving the
        authors, the reviewers and the conference chair. Authors that submit the papers usually must fill
        a form with paper title, abstract and a set of conference topics that fit their submission subject.
        Reviewers are required to register and declare their expertise on the conference topics (among other things).
        Finally, the conference chair has to carry out the review assignment taking into account the information
        provided by both the authors (about their paper) and the reviewers (about their competencies). `,
        schemaImage: "../../../assets/ear.png",
        features: [
            "Expert identification",
            "Automatic reviewers assignment",
            "Reviewers for proposals"
        ]
    },
    {
        id: 4,
        name: "RPRS",
        shortDescription: `Peer review is an essential part of scientific communications. Scientific manuscripts and 
               research proposals are reviewed by several peer scientists for publication and funding respectively. 
               With steady increase in the number of research domains, scholarly venues, researchers and papers-managing 
               peer review process is becoming a daunting task. Different recommender systems on peer review platform is, 
               therefore, an emerging research area. In this paper, we present a novel decision support system for peer review of articles.`,
        longDescription: `Peer review is an essential part of scientific communications. Scientific manuscripts and 
        research proposals are reviewed by several peer scientists for publication and funding respectively.In recent years, 
        information overload in scholarly big data, has made it challenging to extract uselful and effective information. 
        Rapid development have been witnessed in the scale of academic entities such as researchers, publications and 
        scholarly venues. This phenomenon has not only created ample opportunities for researchers but also gave birth 
        to new challenges, especially in the area of peer reviewing system for managing peer review process. Different 
        recommender systems on peer review platform is, therefore, an emerging research area.

The rapid growth of data volume and variety requires more advanced tools to help with academic data's exploration, and huge effort has been dedicated to facilitate various types of meaningful applications. Representative works include: reference recommendation, scholars' profiling and academic impact estimation. In addition to the above applications, peer review mining and recommendation has been regarded as an useful application in exploiting academic reviews, which aims to provide an appropriate review specific scores for individual reviews. Inspite of finding individual review sepecific scores, theere is a need of system which can help to decide the final decision of a paper based on the reviews of assigned reviewers. Consequently, obtaining useful and effective information from individual reviews which can influence the overall recomemndation, has become a complex task. Studies confirm that there is a strong relationship between sentiment analysis of reviews and the final recomemndation of the manucript.`,
        schemaImage: "../../../assets/RPRS.png",
        features: [
            "Overall rating of a paper",
            "Final decesion (Accept/Reject/Borderline)",
            "Automatic meta-reviews",
            "Best paper prediction"
        ]
    },
    {
        id: 5,
        name: "DISCOVER",
        shortDescription: "Basic Recommender System...",
        longDescription: ``,
        schemaImage: "../../../assets/discovr.png",
        features: []
    },
    {
        id: 6,
        name: "CNAVER",
        shortDescription: `Rapidly developing academic venues make it troublesome for researchers to recognize the ones that are most 
               in-accordance with their scholarly interests and are of high significance. Notwithstanding when the quality or the proposal 
               of a paper is great, the paper is rejected because of a mismatch between the area of the paper and the scope of the journal. 
               Each researcher knows the few best level venues for her specific field of interest, nevertheless a venue recommendation system 
               particularly becomes helpful when exploring a new field or when more choices are required. We propose a hybrid personalized 
               venue recommendation framework CNAVER which just requires title and abstract to assemble the learning base fundamental for 
               generating meaningful recommendations.`,
        longDescription: `Generally researchers aspire to publish in suitable academic venues which acknowledge high-quality papers, participate in academic conferences or workshops which are relevant to their area of research. In addition to the variety of challenges researchers’ face, an important task is identifying relevant publication opportunities which are further complicated by the continuous increase in the number of research areas and dynamic change in scope of journals. More and more collaborations are taking place between disciplines in the research landscape, which is leading to decreased compartmentalization.  Rapidly developing academic venues make it troublesome for researchers to recognize the ones that are most in-accordance with their scholarly interests and are of high significance. Notwithstanding when the quality or the proposal of a paper is great, the paper is rejected because of a mismatch between the area of the paper and the scope of the journal. Recommending great quality and valuable scholarly venues to researchers empowers them to recognize and partake in important academic conferences assisting them in contributing to influential journals. Each researcher knows the few best level venues for her specific field of interest, nevertheless a venue recommendation system particularly becomes helpful when exploring a new field or when more choices are required. We propose a hybrid personalized venue recommendation framework CNAVER which just requires title and abstract to assemble the learning base fundamental for generating meaningful recommendations.`,
        schemaImage: "../../../assets/CNAVERmini.PNG",
        features: [
            "Suitable journals identification",
            "High quality conferences"
        ]
    },
    {
        id: 7,
        name: "DRACoR",
        shortDescription: `In academia, researchers collaborate with their peers to improve quality of research and thereby 
               enhance academic profiles. However, information overload in big scholarly data poses a challenge in identifying 
               potential researchers for fruitful collaboration. Consequently, obtaining insightful and effective information 
               on potential collaborators has become a complex task.To recommend the most influential collaborator for researchers, 
               we need to focus  who are the most prolific and active researchers who can provide professional academic guidance for 
               a target researcher.In this article, we introduce a multi-level fusion based model for collaborator recommendation, 
               DRACoR (Deep learning and Random walk based Academic Collaborator Recommender)`,
        longDescription: `In academia, researchers collaborate with their peers to improve quality of research and thereby enhance academic profiles. However, information overload in big scholarly data poses a challenge in identifying potential researchers for fruitful collaboration.
Consequently, obtaining insightful and effective information on potential collaborators has become a complex task.
 With a growing number of research areas and dynamic changes in researchers interests, the scenario is getting more complex nowadays.Recommending new collaborators to a target researcher, i.e., researchers with whom the target researched has not worked with yet is a difficult task as potential collaborators need to similar in the research area and also should be easily accessible. Research on big scholarly data and academic, social networks shows that scholars in the context of collaboration prefer collaborators with whom they have not yet worked.

To recommend the most influential collaborator for researchers, we need to focus our study from the perspective of a researcher's needs and development of the particular research area pertaining to the following issues.Who are the most prolific and active researchers who can provide professional academic guidance for a target researcher.How to obtain researchers who are having relevant research interest with target researcher.How to capture rapidly and temporarily changing nature of research trends and research interest of individual researchers?.`,
        schemaImage: "../../../assets/DRACoR.PNG",
        features: [
            "Most potential collaborators(MPCs)",
            "Most valuable collaborators(MVCs)",
            "Prolific and active researcher"
        ]
    },
    {
        id: 8,
        name: "HDM",
        shortDescription: `In the era of big scholarly data, citation recommendation is going to play a major role as it
            solves information overload issues by automatically suggesting relevant references that align
            with the context of a research paper. Such type of citations recommendation for a manuscript
            is highly valuable since it can substantially improve the efficiency and quality of literature
            search. Accurate citation inclusion is a major challenge for authors. Proper citations are needed
            in order to improve the quality of a paper. Most authors are very good with writing papers, but
            sometimes due to improper citations their papers are not published in high quality journals.
            we present our initiative of building a system which will recommend accurate
            citations at a faster speed for the paper under test. `,
        longDescription: `In the era of big scholarly data, citation recommendation is going to play a major role as it
solves information overload issues by automatically suggesting relevant references that align
with the context of a research paper. Such type of citations recommendation for a manuscript
is highly valuable since it can substantially improve the efficiency and quality of literature
search. Accurate citation inclusion is a major challenge for authors. Proper citations are needed
in order to improve the quality of a paper. Most authors are very good with writing papers, but
sometimes due to improper citations their papers are not published in high quality journals.
we present our initiative of building a system which will recommend accurate
citations at a faster speed for the paper under test. 

There are numerous explanations behind its expanding significance. A junior researchers who
are not acquainted with the exceptionally extensive literatures may find it hard to look for
appropriate references. The volume of research attempted and data accessible influence
reference to search hard notwithstanding for senior scientists. A veteran researcher knows her
exploration zone exceptionally well, however when she ventures into another field or works in
Cover Letter an interdisciplinary region, may search for applicable reference. High quality reference
recommendation is challenging and is imperative in scholarly dispersal because of the
accompanying reasons. Correct references display scholarly genuineness by offering credit to
to the work of others. Proper references enable users to follow the source and assess the
referenced works support authors claim.

we present our initiative of building a system which will recommend accurate
citations at a faster speed for the paper under test.`,
        schemaImage: "../../../assets/hdm.png",
        features: [
            "Global citations (references for overall paper)",
            "Local citations (references for given context"
        ]
    }
];
