import React, { Component } from 'react';
import Product from './Product.js'
import "../styles/ProductsByBrand.css"

class ProductsByBrand extends Component {
    render() {
        const addToCart = this.props.addToCart;
        const products = this.props.productsByBrand;
        return (
            <div className="productsByBrand" id = {products[0].category}>
                <h2>{products[0].category}</h2>
                {products.map(product =>
                    (<Product key={product.name} product={product} addToCart = {addToCart} id ={products.indexOf(product)}/>))}
            </div>
            )
    }
}

export default ProductsByBrand;