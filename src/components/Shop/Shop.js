import React from 'react';
import classes from './Shop.css';
import ShopItem from './ShopItem/ShopItem';

const shop = (props) => {
    let transformedItems = Object.keys(props.items)
    .map(itKey => {
        return [...Array(props.items[itKey])].map((_, i) => {
            return <ShopItem key={itKey + i} type={itKey} />;
        });
    })
    .reduce((arr, el) => {
        return arr.concat(el)
    }, []);
    if (transformedItems.length === 0) {
        transformedItems = <p>Lets start shopping!</p>
    }
    return (
        <div className={classes.Shop}>
        <ShopItem />
        {transformedItems}
        </div>
    );


};

export default shop;