import React from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../../Button/Button';

const orderSummary = (props) => {
    const itemSummary = Object.keys(props.items)
    .map(itKey => {
        return (<li><span  style={{textTransform: 'capitalize'}}>{itKey}</span>:{props.items[itKey]}</li>);
    });
    
    return (
        <Aux>
            <h3>Your Order:</h3>
            <ul>
                {itemSummary}
            </ul>
            <p>Total Price: {props.price}</p>
            <p>Continue to Checkout?</p>
        </Aux>
    );

};

export default orderSummary;