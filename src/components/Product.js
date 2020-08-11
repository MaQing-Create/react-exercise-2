import React, {Component} from 'react';
import imgUrl from '../assets/product_image_placeholder.png';
import "../styles/Product.css"

class Product extends Component {
    render()
    {
        const {
          product:{price, name},
            id,
            addToCart,
        } = this.props;

        return (
            <div className="product" id={'index'+id}>
                <strong className="name">{name}</strong><br/>
                <img src={imgUrl} alt="Product"/><br/>
                <span className="price">{price}</span>
                <button className="add-to-cart" onClick={addToCart}>add to cart</button>
            </div>
        )
    }
}

export default Product;