import { useContext, useEffect, useState } from "react";

import { RootObject } from "../../../types/types";
import classes from "./Search.module.css";
import { useHistory } from "react-router";
import { BorderContext } from "../../../context/context";
const Search = () => {
  const {searchHandler,visibilityHandler,visibility} = useContext(BorderContext);
  const [searchedData, setSearchedData] = useState("");
  const [getsearchedData, setGetSearchedData] = useState<RootObject[]>([]);
  const history = useHistory();
  useEffect(() => {
    const searchFetch = async () => {
      try {
        if (searchedData !== "") {
          console.log("before fetch", searchedData);
          const response = await fetch(
            `https://restcountries.com/v3.1/name/${searchedData}`
          );
          const data = await response.json();
          setGetSearchedData(data);
          return data;
        }
      } catch {
        console.log("no internet conection");
      }
    };
    searchFetch();
  }, [searchedData]);

  //const {data,isSuccess}=useQuery('search',searchFetch)
  console.log(searchedData);
  const inputChange = (e: any) => {
    setSearchedData(e.target.value);
  };
  const onSearch = () => {
    searchHandler(getsearchedData!);
    visibilityHandler(false);
    history.push("/search");
  };
  const keyDownHandler = (e: any) => {
    if (e.key === "Enter") {
      searchHandler(getsearchedData!);
      visibilityHandler(false);
      history.push("/search");
    }
  };
  useEffect(() => {
    window.onpopstate = () => {
      visibilityHandler(true);
    };
  });

  console.log(visibility);
  return (
    <div className={classes.search}>
      <input
        type="text"
        id="search"
        placeholder="Search"
        onChange={inputChange}
        onKeyDown={keyDownHandler}
      />
     <button onClick={onSearch}>Search</button>
     
    </div>
  );
};

export default Search;
