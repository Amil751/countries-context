import { useContext } from "react";
import { BorderContext } from "../../context/context";
import { Link } from "react-router-dom";
import classes from './SearchPage.module.css';
import SerachedCountries from "../navigation/search/SerachedCountries";
const SearchPage = () => {
  const {visibilityHandler,searchBox} = useContext(BorderContext);
  const data = searchBox[0]
  const showHandler=()=>{
      visibilityHandler(true);
  }
  console.log(searchBox);
  return (
    <div className={classes.search_page}>
      <Link to="/" className={classes.backlink}>
        <p onClick={showHandler}>Back to home</p>
      </Link>
      {data
        ? searchBox.map((item) => {
            return <SerachedCountries country={item} />;
          })
        : "please enter a valid country name "}
    </div>
  );
};

export default SearchPage;
