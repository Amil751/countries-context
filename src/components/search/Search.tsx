import {useContext ,useEffect,useRef, useState} from 'react';
import { Link } from 'react-router-dom';
import { BorderContext } from '../../context/context';
import { RootObject } from '../../types/types';
import classes from './Search.module.css';

const Search = () => {
    const global=useContext(BorderContext);
    const [searchedData, setSearchedData]=useState("");
    const [getsearchedData,setGetSearchedData]=useState<RootObject[]>([])
   
   
        
          useEffect(()=>{
            const searchFetch= async () => {
                try{
                    if(searchedData!==""){
                const response = await fetch(`https://restcountries.com/v3.1/name/${searchedData}`);
                 const data= await response.json();
                 setGetSearchedData(data);
                 return data;
                    }
                }catch{
                    console.log("no internet conection")
                }
              };
              searchFetch();
          },[searchedData])
     
    //const {data,isSuccess}=useQuery('search',searchFetch) 
        console.log(searchedData);
    const inputChange=(e:any)=>{
          setSearchedData(e.target.value)
    }
    const onSearch=()=>{
       
      
            global.setSearchBox(getsearchedData!);
           global.showbar(false)
    }
   console.log(global.show);
    return (
        <div className={classes.search}>
            <label htmlFor="search">Search</label>
            <input type="text" id="search" onChange={inputChange}/>
            <Link to="/search"><button onClick={onSearch}>Search</button></Link>
        </div>
    );
};

export default Search;