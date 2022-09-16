export interface Country {
    Code: string;
    Code3: string;
    Name: string;
    PhoneCode: string;
}

export interface ListCountrys {
    Count: number;
    Data: Country[];
}
