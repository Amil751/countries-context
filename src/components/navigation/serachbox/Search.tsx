import {useContext ,useEffect,useRef, useState} from 'react';
import { useQuery } from 'react-query';
import { BorderContext } from '../../../context/context';
import { searchFetch } from '../../../services/countriesApi';
import { RootObject } from '../../../types/types';
import classes from './Search.module.css';

const Search = () => {
    const global=useContext(BorderContext);
    const [searchedData, setSearchedData]=useState<RootObject[]>([])
    const inputRef=useRef<any>();
   
    useEffect(()=>{
        const searchFetch= async () => {
            const response = await fetch(`https://restcountries.com/v3.1/name/Azerbaijan`);
             const data= await response.json();
             setSearchedData(data);
             return data;
          };
        searchFetch();
        
        
    },[])
    const onSearch=()=>{
        console.log('please finish component')
    }
   
    return (
        <div className={classes.search}>
            <label htmlFor="search">Search</label>
            <input type="text" id="search" ref={inputRef} />
            <button onClick={onSearch}>Search</button>
        </div>
    );
};

export default Search;