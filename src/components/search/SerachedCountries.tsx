import { Link } from "react-router-dom";
import { FunctionComponent } from "react";
import { RootObject } from "../../types/types";
import classes from '../countries/CountryItem.module.css';
interface IcountryProps {
  country: RootObject;
}

const SerachedCountries: FunctionComponent<IcountryProps> = (props) => {
  const { country } = props;
  return (
    <div className={classes.country_item}>
      <h3>{country.name.common}</h3>
      <div className={classes.image}>
        <img src={`${country.flags.png}`} alt={`${country.name.common}`} width="50%" />
      </div>
      <ul>
        <li>Population - {country.population}</li>
        <li>
          Area - {country.area} km<sup>2</sup>
        </li>
        <li>Capital - {country.capital}</li>
        <li> <a target="_blank" href={`${country.maps.googleMaps}`}>look on map</a> </li>
      </ul>
    </div>
  );
};

export default SerachedCountries;
