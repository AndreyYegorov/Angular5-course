export interface BookModel{
    title: string;
    author: string;
    publisher: string;
}

export interface MagazineModel{
    title: string;
    author: string;
    agency: string;
}

export interface PublisherInterface{
    getPublisher(): string;
};

export interface AgencyInterface{
    getAgency(): string;
};