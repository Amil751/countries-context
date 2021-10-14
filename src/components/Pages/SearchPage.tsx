import { FunctionComponent, useContext } from "react";
import { BorderContext } from "../../context/context";

import { RootObject } from "../../types/types";
import SerachedCountries from "./SerachedCountries";

const SearchPage = () => {
  const global=useContext(BorderContext)
  const data=global.searchBox[0];

  return (
    <div >
        {data ? <SerachedCountries country={global.searchBox[0]}/>:"qiymet verilmeyib"}
   
    </div>
  );
};

export default SearchPage;
