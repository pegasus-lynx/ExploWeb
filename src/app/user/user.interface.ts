export interface ProfileInterface {
    role: number;
    bio: string;
    gender: string;
    department: string;
    institution: string;
    dob: string;
    area_of_interests: string[];
    journals: journalInterface[];
    confrences: confrenceInterface[];
}

export interface SideInterface {
    name: string;
    dob: string;
    email: string;
    role: number;
    institution: string;
}

export interface journalInterface {
    title: string;
    year: Date;
    authors_list: string[];
    journal: string;
    indexed_in: string;
}

export interface confrenceInterface {
    title: string;
    year: Date;
    authors_list: string[];
    description: string;
}

export interface profileAddInterface {
    role: number;
    bio: string;
    gender: string;
    department: string;
    institution: string;
    dob: Date;
    area_of_interest: string[];
}
