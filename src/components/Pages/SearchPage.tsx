import { useContext } from "react";
import { BorderContext } from "../../context/context";
import classes from './SearchPage.module.css';
import SerachedCountries from "../search/SerachedCountries";
import Back from "../backtoHome/Back";
const SearchPage = () => {
  const {searchBox} = useContext(BorderContext);
  const data = searchBox[0]
  return (
    <div className={classes.search_page}>
      <Back/>
      {data
        ? searchBox.map((item) => {
            return <SerachedCountries country={item} />;
          })
        : "please enter a valid country name "}
    </div>
  );
};

export default SearchPage;
