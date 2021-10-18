import React, { useState } from "react";
import { RootObject, context } from "../types/types";

export const BorderContext = React.createContext<context>({
  visibility: true,
  visibilityHandler: () => {},
  loadingState: true,
  filter: [],
  filterHandler: () => {},
  sort: "",
  sortHandler: () => {},
  searchBox: [],
  searchHandler: () => {},
  countries: [],
  addCountry: () => {},
});

const ContextWrapper: React.FC = (props) => {
  const [country, setCountry] = useState<RootObject[]>([]);
  const [search, setSearch] = useState<RootObject[]>([]);
  const [sortCountry, setSortCountry] = useState<string>("");
  const [filterCountry, setFilterCountry] = useState<RootObject[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [visible, setVisible] = useState<boolean>(true);
  const addCountries = (data: RootObject[]) => {
    setCountry(data);
  };
  const searchHandler= (data: RootObject[]) => {
    setSearch(data);
  };
  const sortHandler = (option: string) => {
    setSortCountry(option);
  };
  const filterHandler = (e: any) => {
    setLoading(false);
    const filter = country.filter(
      (country) => country.region === e.target.value
    );
    setFilterCountry(filter);
    console.log(country);
  };
  const showbarHandler = (data: boolean) => {
    setVisible(data);
  };
  const contextValue: context = {
    visibility: visible,
    visibilityHandler: showbarHandler,
    loadingState: loading,
    filter: filterCountry,
    filterHandler: filterHandler,
    sort: sortCountry,
    sortHandler: sortHandler,
    searchBox: search,
    searchHandler: searchHandler,
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
