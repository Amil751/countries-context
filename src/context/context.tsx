import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
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
  const location = useLocation();
  const history = useHistory();
  const urlSearchParams = new URLSearchParams(location.search);
  const a = urlSearchParams.get("filter");
  const b = urlSearchParams.get("sort");
  const addCountries = (data: RootObject[]) => {
    setCountry(data);
  };
  const searchHandler = (data: RootObject[]) => {
    setSearch(data);
  };

  //-------sort-----------
  const sortHandler = (e: any) => {
    if(a){
      history.push(`?filter=${a}&sort=${e.target.value}`)
    }
    else{
      history.push(`?sort=${e.target.value}`)
    }
       
  };
  useEffect(()=>{
    if(b){
      setSortCountry(b);
      }
  },[b])
  //------sort----------------------


  //----------filter -------------

  const filterHandler = (e: any) => {
    setLoading(false);
    history.push(`?filter=${e.target.value}&sort=${b}`);
  };
  
  useEffect(() => {
    if (country.length && a) {
      const filter = country.filter((item) => item.region === a);
      setFilterCountry(filter);
      setLoading(false);
    }
  }, [country, a]);
  // ---------filter----------

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
