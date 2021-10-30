import { Box, MenuItem, Select } from '@material-ui/core';
import React, { FunctionComponent, useContext } from 'react';
import { BorderContext } from '../../../context/context';
import classes from './Filter.module.css'

const Filter:FunctionComponent =() => {
    const {filterHandler}=useContext(BorderContext);
    
    return (
        <Box className={classes.filter}>
            <Select onChange={(e:any)=>filterHandler(e)} variant="outlined" style={{backgroundColor:'white' ,maxHeight:'30px'}}>
                <MenuItem selected disabled hidden > Filter by</MenuItem>
                <MenuItem value="Europe">Europe</MenuItem>
                <MenuItem value="Asia">Asia</MenuItem>
                <MenuItem value="Americas">America</MenuItem>
                <MenuItem value="Africa">Africa</MenuItem>
                <MenuItem value="Oceania">Oceania</MenuItem>
            </Select>
        </Box>
    );
};

export default Filter;