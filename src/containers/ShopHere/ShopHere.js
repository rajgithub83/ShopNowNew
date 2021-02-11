import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import Shop from '../../components/Shop/Shop';
import ShopControls from '../../components/Shop/ShopControls/ShopControls';
import Cart from '../../components/Cart/Cart';
import OrderSummary from '../../components/Shop/OrderSummary/OrderSummary'; 

const ITEM_PRICES = {
    samsong : 1500,
    opple : 2500,
    twoPlus : 1000
}

class ShopHere extends Component {
    state = {
        items : {
            samsong: 0,
            opple: 0,
            twoPlus: 0
        },
        totalPrice: 0,
        purchaseable: false,
        purchasing: true
    }

    updatePurchaseState (items) {
        const sum = Object.keys(items)
        .map(itKey => {
            return items[itKey];
        })
        .reduce((sum, el) => {
            return sum + el;
        }, 0);
        this.setState({purchaseable: sum>0});
    }

    addToCartHandler = (type) => {
        const oldCount = this.state.items[type];
        const updatedCount = oldCount + 1;
        const updatedItems = {
            ...this.state.items
        } 
        updatedItems[type] = updatedCount;
        const priceAddition = ITEM_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, items: updatedItems});
        this.updatePurchaseState(updatedItems);
    }

    removeFromCartHandler = (type) => {
        const oldCount = this.state.items[type];
        if(oldCount <= 0)
        {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedItems = {
            ...this.state.items
        } 
        updatedItems[type] = updatedCount;
        const priceDeduction = ITEM_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({totalPrice: newPrice, items: updatedItems});
        this.updatePurchaseState(updatedItems);
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }

    purchaseContinueHandler = () => {
        alert('You Continue!');
    }

    render () {
        const disabledInfo = {
            ...this.state.items
        };

        for(let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <=0
        }

        return (
            <Aux>
                
                <ShopControls 
                itemAdded={this.addToCartHandler}
                itemRemoved={this.removeFromCartHandler}
                disabled={disabledInfo} 
                price={this.state.totalPrice} 
                purchaseable={this.state.purchaseable}
                ordered={this.purchaseContinueHandler}  />
                <Cart>
                    <OrderSummary 
                    ordered={this.purchaseContinueHandler}
                    purchaseCanceled={this.purchaseCancelHandler}
                    purchaseContinued={this.purchaseContinueHandler}
                    items={this.state.items} price={this.state.totalPrice} />
                </Cart>
            </Aux>
        );
    }
}

export default ShopHere;