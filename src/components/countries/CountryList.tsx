import { useQuery } from "react-query";
import { FunctionComponent, useContext } from "react";
import { LinearProgress } from "@material-ui/core";
import { RootObject } from "../../types/types";
import CountryItem from "./CountryItem";
import { BorderContext } from "../../context/context";
import { fetchCountries } from "../../services/countriesApi";
import classes from "./CountryList.module.css";
import { Link } from "react-router-dom";

const CountryList: FunctionComponent = () => {
  const global = useContext(BorderContext);
  const { data, isLoading, isSuccess, error } = useQuery<RootObject[]>(
    "countries",
    fetchCountries
  );
  const sortAs = global.sort;
  let mapping: RootObject[] = [];
  if (global.loadingState === true) {
    mapping = global.countries;
  } else {
    mapping = global.filter;
  }
  // console.log(sortAs);
  if (isLoading) {
    return <LinearProgress />;
  }
  if (isSuccess) {
    if (global.loadingState) {
      global.addCountry(data!);
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

  // useEffect(() => {
  //
  //       setCountries(data);
  //     } catch (error) {
  //       console.log("error");
  //     }
  //   };
  //   fetchCountries();
  // }, []);
  return (
    <div className={classes.country_list}>
      {isSuccess &&
        mapping.map((country: RootObject) => {
          return (
              <CountryItem key={country.name} country={country} />
          );
        })}
    </div>
  );
};

export default CountryList;
