import React, { FunctionComponent, useContext } from 'react';
import { BorderContext } from '../../../context/context';
import classes from './Sort.module.css'

const Sort:FunctionComponent =() => {
    const global=useContext(BorderContext);
    return (
        <div className={classes.sort}>
            <select onChange={(e)=>global.setSort( e.target.value)} >
                <option selected disabled hidden > Sort by</option>
                <option value="name">Name</option>
                <option value="population">population</option>
                <option value="area">Area</option>
            </select>
        </div>
    );
};

export default Sort;