import { FunctionComponent } from "react";
import { RootObject } from "../../types/types";
import classes from '../countries/CountryItem.module.css';
interface IcountryProps {
  country: RootObject;
}

const SerachedCountries: FunctionComponent<IcountryProps> = (props) => {
  const { country } = props;
 console.log(country);
  return (
    <div className={classes.country_item}>
      <h3>{country.name.common}</h3>
      <div className={classes.image}>
        <img src={`${country.flags.png}`} alt={`${country.name.common}`} width="100%" />
      </div>
      <ul>
        <li>Population - {country.population}</li>
        <li>
          Area - {country.area} km<sup>2</sup>
        </li>
        <li>Capital - {country.capital}</li>

        {/* <li>
          {country.borders &&
            country.borders.map((border) => (
              <p key={Math.random()}>{border}</p>
            ))}
        </li> */}
      </ul>
    </div>
  );
};

export default SerachedCountries;
