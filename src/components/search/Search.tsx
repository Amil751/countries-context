import { useContext, useEffect, useState } from "react";

import { RootObject } from "../../types/types";
import classes from "./Search.module.css";
import { useHistory, useLocation } from "react-router";
import { BorderContext } from "../../context/context";
import { Button } from "@material-ui/core";
const Search = () => {
  const { searchHandler, visibilityHandler, visibility } =
    useContext(BorderContext);
  const [searchedData, setSearchedData] = useState("");
  const [getsearchedData, setGetSearchedData] = useState<RootObject[]>([]);
  const history = useHistory();
  const location=useLocation();
  const urlSearchParams = new URLSearchParams(location.search);
  const c=urlSearchParams.get('search');
  useEffect(() => {
    const searchFetch = async () => {
      try {
        if (searchedData !== ""&& searchedData!==' ') {
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

  useEffect(()=>{
    if(c){
      setSearchedData(c);
    }
   
  },[c])
  //const {data,isSuccess}=useQuery('search',searchFetch)
  const inputChange = (e: any) => {
    history.push(`/search/?search=${e.target.value}`);
  };
  searchHandler(getsearchedData!);
  const onSearch = () => {
    
    visibilityHandler(false);
    history.push(`/search/?search=${searchedData}`);
  };
  const keyDownHandler = (e: any) => {
    if (e.key === "Enter") {
      visibilityHandler(false);
      history.push(`/search/?search=${searchedData}`);
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
        style={{
          backgroundClip: "white",
          height: "30px",
          border: "none",
          marginRight: "5px",
        }}
        placeholder="Search"
        onChange={inputChange}
        onKeyDown={keyDownHandler}
      />
      <Button
        onClick={onSearch}
        color="default"
        variant="contained"
        style={{ maxHeight: "30px" }}
      >
        Search
      </Button>
    </div>
  );
};

export default Search;
