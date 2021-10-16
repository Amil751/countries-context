import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { RootObject } from "../../types/types";
import classes from "./CountryItem.module.css";
interface IcountryProps {
  country: RootObject;
}

const CountryItem: FunctionComponent<IcountryProps> = (props) => {
  const { country } = props;
  return (
    <div className={classes.country_item}>
      <h3>{country.name}</h3>
      <div className={classes.image}>
        <img src={`${country.flag}`} alt={`${country.name}`} width="100%" />
      </div>
      <ul>
        <li>Population - {country.population}</li>
        <li>
          Area - {country.area} km<sup>2</sup>
        </li>
        <li>Capital - {country.capital}</li>
        <Link to={`detail/${country.name}`}>
          <li>More information...</li>
        </Link>
      </ul>
    </div>
  );
};

export default CountryItem;
