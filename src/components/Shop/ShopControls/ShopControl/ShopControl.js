import React from 'react';
import shopControls from '../ShopControls';
import classes from './ShopControl.css';

const shopControl = (props) => (
    <div className={classes.ShopControl}>
        <div className={classes.Label}>{props.label}</div>
        <button className={classes.Add} onClick={props.added}>Add</button>
        <button className={classes.Remove} onClick={props.removed} disabled={props.disabled}>Remove</button>
    </div>
); 

export default shopControl;