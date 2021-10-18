import React, { FunctionComponent, useContext } from 'react';
import { BorderContext } from '../../../context/context';
import classes from './Filter.module.css'

const Filter:FunctionComponent =() => {
    const {filterHandler}=useContext(BorderContext);
    
    return (
        <div className={classes.filter}>
            <select onChange={filterHandler} >
                <option selected disabled hidden > Filter by</option>
                <option value="Europe">Europe</option>
                <option value="Asia">Asia</option>
                <option value="Americas">America</option>
                <option value="Africa">Africa</option>
                <option value="Oceania">Asia</option>
            </select>
        </div>
    );
};

export default Filter;