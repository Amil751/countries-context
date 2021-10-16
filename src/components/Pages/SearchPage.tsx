import { FunctionComponent, useContext } from "react";
import { BorderContext } from "../../context/context";
import { Link } from "react-router-dom";
import { RootObject } from "../../types/types";
import classes from './SearchPage.module.css';
import SerachedCountries from "../navigation/search/SerachedCountries";
const SearchPage = () => {
  const global = useContext(BorderContext);
  const data = global.searchBox[0];
  const showHandler=()=>{
      global.showbar(true);
  }
  console.log(global.searchBox);
  return (
    <div className={classes.search_page}>
      <Link to="/" className={classes.backlink}>
        <p onClick={showHandler}>Back to home</p>
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
