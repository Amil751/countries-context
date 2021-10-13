import { useContext } from "react";
import { BorderContext } from "../context/context";
// const global=useContext(BorderContext)
// const a=global.searchBox;
export const fetchCountries = async () => {
    const response = await fetch("https://restcountries.com/v2/all");
    return await response.json();
  };

  export const searchFetch = async () => {
    const response = await fetch("https://restcountries.com/v3.1/name/");
    return await response.json();
  };
