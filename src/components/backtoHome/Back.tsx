import React, { useContext } from 'react';
import { Link} from 'react-router-dom';
import { BorderContext } from '../../context/context';
import classes from './Back.module.css'
const Back = (props:any) => {
    const {visibilityHandler}=useContext(BorderContext);
    return (
        <div className={classes.back} onClick={()=>visibilityHandler(true)}>
            <Link to='/' >Back to home</Link>
        </div>
    );
};

export default Back;