import React, { useState } from "react";
import { RootObject, context } from "../types/types";

export const BorderContext = React.createContext<context>({
  loadingState: true,
  filter: [],
  setFilter: () => {},
  sort: "",
  setSort: () => {},
  searchBox: [],
  setSearchBox: () => {},
  countries: [],
  addCountry: () => {},
});

const ContextWrapper: React.FC = (props) => {
  const [country, setCountry] = useState<RootObject[]>([]);
  const [search, setSearch] = useState<RootObject[]>([]);
  const [sortCountry, setSortCountry] = useState<string>("");
  const [filterCountry, setFilterCountry] = useState<RootObject[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const addCountries = (data: RootObject[]) => {
   
      setCountry(data);
    
  };
  const onSearch = (data:RootObject[]) => {
    setSearch(data);
  };
  const onSort = (option: string) => {
    setSortCountry(option);
  };
  const changeFilter = (e: any) => {
    setLoading(false);
    const filter = country.filter(
      (country) => country.region === e.target.value
    );
    setFilterCountry(filter)
    console.log(country);
  };

  const contextValue: context = {
    loadingState: loading,
    filter: filterCountry,
    setFilter: changeFilter,
    sort: sortCountry,
    setSort: onSort,
    searchBox: search,
    setSearchBox: onSearch,
    countries: country,
    addCountry: addCountries,
  };
  return (
    <BorderContext.Provider value={contextValue}>
      {props.children}
    </BorderContext.Provider>
  );
};
export default ContextWrapper;
