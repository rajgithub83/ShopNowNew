import React from 'react';
import classes from './ShopControls.css';
import ShopControl from './ShopControl/ShopControl';


const controls = [
    { label: 'Samsong', type: 'samsong' },
    { label: 'Opple', type: 'opple' },
    { label: 'TwoPlus', type: 'twoPlus' }
];

const shopControls = (props) => (
    <div className={classes.ShopControls}>
        <p>Current Price: <strong>{props.price}</strong></p>
        {controls.map(ctrl => (
            <ShopControl 
            key={ctrl.label} 
            label={ctrl.label}
            added={() => props.itemAdded(ctrl.type)}
            removed={() => props.itemRemoved(ctrl.type)} 
            disabled={props.disabled[ctrl.type]} />
        ))}
        <button 
        className={classes.OrderButton}
        disabled={!props.purchaseable}
        onClick={props.ordered}>ORDER NOW</button>
    </div>

);

export default shopControls;