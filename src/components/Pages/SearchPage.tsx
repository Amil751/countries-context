import { FunctionComponent, useContext } from "react";
import { BorderContext } from "../../context/context";
import { Link } from "react-router-dom";
import { RootObject } from "../../types/types";
import SerachedCountries from "../search/SerachedCountries";

const SearchPage = () => {
  const global = useContext(BorderContext);
  const data = global.searchBox[0];
  const showHandler=()=>{
      global.showbar(true);
  }
  console.log(global.searchBox);
  return (
    <div>
      <Link to="/">
        <p onClick={showHandler}>Back</p>
      </Link>
      {data
        ? global.searchBox.map((item) => {
            return <SerachedCountries country={item} />;
          })
        : "please enter a valid country name "}
    </div>
  );
};

export default SearchPage;
