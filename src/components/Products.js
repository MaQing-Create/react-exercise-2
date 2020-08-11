import React, { Component } from 'react';
import ProductsByBrand from './ProductsByBrand.js'
import "../styles/Products.css"

class Products extends Component{

    render() {
        const brands = [];
        const addToCart = this.props.addToCart;
        this.props.products.forEach(product => {
            if (brands.indexOf(product.category) === -1) brands.push(product.category);
        })
        const productsByBrands = [];
        for (let i = 0; i < brands.length; i++){
            const productsByBrand =[];
            this.props.products.forEach(product =>{
                if (product.category === brands[i]) productsByBrand.push(product)
            })
            productsByBrands.push(productsByBrand)
        }
        return(
            <div className="products">
                {productsByBrands.map(productsByBrand =>
                    (<ProductsByBrand key={productsByBrand[0].category} productsByBrand={productsByBrand} addToCart = {addToCart}/>))}
            </div>
        )
    }
}

export default Products;