/* eslint-disable @typescript-eslint/no-unused-vars */
import { useQuery } from "react-query";
import { FunctionComponent, useContext, useEffect } from "react";
import { LinearProgress } from "@material-ui/core";
import { RootObject } from "../../types/types";
import CountryItem from "./CountryItem";
import { BorderContext } from "../../context/context";
import { fetchCountries } from "../../services/countriesApi";
import classes from "./CountryList.module.css";

const CountryList: FunctionComponent = () => {
  const { loadingState, countries, filter, sort, addCountry } =
    useContext(BorderContext);
  const { data, isLoading, isSuccess, error } = useQuery<RootObject[]>(
    "countries",
    fetchCountries
  );
  const sortAs = sort;
  let mapping = countries;
 
    mapping = [];
    if (loadingState === true) {
      mapping = countries;
    } else {
      mapping = filter;
    }
 

  if (isLoading) {
    return <LinearProgress />;
  }
  if (isSuccess) {
    if (loadingState) {
      addCountry(data!);
    }

    switch (sortAs) {
      case "population":
        mapping.sort(
          (a: RootObject, b: RootObject) => a.population - b.population
        );

        break;
      case "area":
        mapping.sort((a: RootObject, b: RootObject) => a.area - b.area);
        break;
      case "name":
        mapping.sort((a, b) =>
          a.name > b.name ? 1 : b.name > a.name ? -1 : 0
        );
        break;
    }
  }
  return (
    <div className={classes.country_list}>
      {isSuccess &&
        mapping.map((country: RootObject) => {
          return <CountryItem key={country.name} country={country} />;
        })}
    </div>
  );
};

export default CountryList;
