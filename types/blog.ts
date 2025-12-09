export interface MainForCard {
    success:    boolean;
    message:    string;
    data:       BlogForCard[];
    pagination: Pagination;
}

export interface BlogForCard {
    _id:           string;
    title:         string;
    caption:       string;
    category:      Category;
    FeaturedImage: string;
    slug:          string;
    createdAt:     Date;
    updatedAt:     Date;
}

export interface Category {
    _id:  string;
    name: string;
}

export interface Pagination {
    total:      number;
    page:       number;
    limit:      number;
    totalPages: number;
}
