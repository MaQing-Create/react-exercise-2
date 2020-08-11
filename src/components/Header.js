import React, { Component } from 'react';
import CartNumber from "../components/CartNumber.js";
import "../styles/Header.css"

class Header extends Component{
    render(){
        return(
            <div className="header">
                <h1>Store</h1>
                <CartNumber cartNumber = {this.props.cartNumber}/>
            </div>
        )
    }
}

export default Header;