import React, { Component } from 'react';

class CartNumber extends Component {
    render() {
        const number = this.props.cartNumber;
        return (
            <div className="cartNumber">
                <strong>购物车数量：{number}</strong>
            </div>
        )
    }
}

export default CartNumber;