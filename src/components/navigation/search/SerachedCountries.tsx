import { FunctionComponent } from "react";
import { RootObject } from "../../../types/types";
import classes from "./SerachedCountries.module.css";
interface IcountryProps {
  country: RootObject;
}

const SerachedCountries: FunctionComponent<IcountryProps> = (props) => {
  const { country } = props;

  return (
    <div className={classes.search_item}>
      <div className={classes.image}>
        <img src={`${country.flags.png}`} alt={`${country.name.common}`} />
      </div>
      <ul>
        <li>
          <h3>{country.name.common}</h3>
        </li>
        <li>Population - {country.population}</li>
        <li>
          Area - {country.area} km<sup>2</sup>
        </li>
        <li>Capital - {country.capital}</li>
        <li>
          <a target="_blank" href={`${country.maps.googleMaps}`}>
            look on map
          </a>{" "}
        </li>
      </ul>
    </div>
  );
};

export default SerachedCountries;
