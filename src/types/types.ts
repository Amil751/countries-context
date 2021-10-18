export interface context {
  visibility:boolean,
  visibilityHandler:(data:boolean)=>void
  loadingState: boolean;
  filter: RootObject[];
  filterHandler: (filter: any) => void;
  sort: string;
  sortHandler: (data: string) => void;
  searchBox: RootObject[];
  searchHandler: (data: RootObject[]) => void;
  countries: RootObject[];
  addCountry: (data: RootObject[]) => void;
}
export interface Currency {
  code: string;
  name: string;
  symbol: string;
}

export interface Language {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}

export interface Translations {
  br: string;
  pt: string;
  nl: string;
  hr: string;
  fa: string;
  de: string;
  es: string;
  fr: string;
  ja: string;
  it: string;
  hu: string;
}

export interface RegionalBloc {
  acronym: string;
  name: string;
}
export interface Flag {
  png: string;
  svg: string;
}
export interface RootObject {
  name: any | string;
  topLevelDomain: string[];
  alpha2Code: string;
  alpha3Code: string;
  callingCodes: string[];
  capital: string;
  altSpellings: string[];
  region: string;
  continent: string;
  population: number;
  latlng: number[];
  demonym: string;
  area: number;
  gini: number;
  timezones: string[];
  borders: string[];
  nativeName: string;
  numericCode: string;
  currencies: Currency[];
  languages: Language[];
  translations: Translations;
  flag: string[];
  regionalBlocs: RegionalBloc[];
  cioc: string;
  independent: boolean;
  flags:Flag;
  maps:any;
}
