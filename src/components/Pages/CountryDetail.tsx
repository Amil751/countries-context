import React, { useContext } from "react";
import { useParams } from "react-router";
import { BorderContext } from "../../context/context";
import Back from "../backtoHome/Back";
import classes from "./CountryDetail.module.css";

const CountryDetail: React.FC = () => {
  const { countries } = useContext(BorderContext);
  const params = useParams<any>();
  const paramsid: string = params.ID;
  const detail = countries.find((item) => item.name === paramsid);

  if (detail) {
    localStorage.setItem("user", JSON.stringify(detail));
  }
  const a: any = localStorage.getItem("user");
  const details = JSON.parse(a);
  return (
    <div className={classes.main_detail}>
      <div className={classes.back}>
        <Back />
      </div>

      <div className={classes.image}>
        <img src={`${details?.flag}`} alt={`${details?.name}`} width="100%" />
      </div>
      <ul>
        <li>
          <h3>{details?.name}</h3>
        </li>
        <li>Population - {details?.population}</li>
        <li>
          Area - {details?.area} km<sup>2</sup>
        </li>
        <li>Capital - {details?.capital}</li>
        <li>Region - {details?.region}</li>
        <li>Gini - {details?.gini}</li>
        <li>
          currency name-{details?.currencies[0].name} currency simbol-
          {details?.currencies[0].symbol}
        </li>
      </ul>
    </div>
  );
};

export default CountryDetail;
