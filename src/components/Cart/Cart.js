import React from 'react';
import classes from './Cart.css';
import Button from '../../Button/Button';

const cart = (props) => (
    <div className={classes.Cart}>
        {props.children}
        <Button btnType="Danger" clicked={props.purchaseCanceled}>Continue</Button>
        <Button btnType="Success" clicked={props.purchaseContinued}>Cancel</Button>
        
    </div>

); 

export default cart;