export type Country = {
    id: number;
    code : string;
    emoji : string;
    name : string;
}

export type CreateCountry = {
    name : string
    code : string
    emoji : string
}