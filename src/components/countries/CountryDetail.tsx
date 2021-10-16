import React, { useContext } from "react";
import { RouteComponentProps, RouteProps, RouterProps, useParams } from "react-router";
import { BorderContext } from "../../context/context";
import classes from "./CountryDetail.module.css";
import { HashRouter, Link } from "react-router-dom";
import { RootObject } from "../../types/types";
 
const CountryDetail: React.FC = () => {
  const global = useContext(BorderContext);
  const params = useParams<any>();
 const paramsid:string=params.ID
  const detail = global.countries.find((item) => item.name === paramsid);
  const showHandler=()=>{
    global.showbar(true);
}
// localStorage.setItem('user', JSON.stringify(detail));
// const a:string|null=localStorage.getItem('user');
// if(a){
//   var details = JSON.parse(a);
// }
if(detail){
  localStorage.setItem('user', JSON.stringify(detail));
  
} 
const a:any=localStorage.getItem('user')
 const details=JSON.parse(a)
  return (
    <div className={classes.main_detail}>
     <Link to="/" className={classes.backlink}>
        <p onClick={showHandler}>Back to home</p>
      </Link>
      <div className={classes.image}>
        <img src={`${details?.flag}`} alt={`${details?.name}` } width="100%"  />
      </div>
      <ul>
        <li> <h3>{details?.name}</h3></li>
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
