export interface ProfileInterface {
    role: number;
    bio: string;
    gender: string;
    department: string;
    institution: string;
    dob: string;
    area_of_interests: string[];
    journals: JournalInterface[];
    confrences: ConfrenceInterface[];
}

export interface JournalInterface {
    title: string;
    year: string;
    jouranal: string;
    author_list: string[];
}

export interface ConfrenceInterface {
    title: string;
    year: string;
    author_list: string[];
}

export interface SideInterface {
    name: string;
    dob: string;
    email: string;
    role: number;
    institution: string;
}
