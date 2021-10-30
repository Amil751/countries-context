import { Box, MenuItem, Select } from '@material-ui/core';
import React, { FunctionComponent, useContext } from 'react';
import { BorderContext } from '../../../context/context';
import classes from './Sort.module.css'

const Sort:FunctionComponent =() => {
    const {sortHandler}=useContext(BorderContext);
    return (
        <Box className={classes.sort}>
            <Select onChange={sortHandler}  variant="outlined" style={{backgroundColor:'white' ,maxHeight:'30px'}}>
                <MenuItem selected disabled hidden > Sort by</MenuItem>
                <MenuItem value="name">Name</MenuItem>
                <MenuItem value="population">Population</MenuItem>
                <MenuItem value="area">Area</MenuItem>
            </Select>
        </Box>
    );
};

export default Sort;