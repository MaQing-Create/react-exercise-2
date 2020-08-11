import React, { Component } from 'react';
import './App.scss';
import Products from './components/Products.js'
import Header from './components/Header.js'

class App extends Component {
  state = {
    cartNumber:0,
    products:null,
  }

  addToCart =()=>{
    this.setState({
      cartNumber:this.state.cartNumber +1,
    })
  };

  displayWhenGetData =()=>{
    if (this.state.products !== null)
      return <Products products = {this.state.products} addToCart = {this.addToCart}/>
  }

  componentDidMount() {
    async function fetchData(url){
      const fetchRes = await fetch(url);
      if (fetchRes.status === 200){
        const json = await fetchRes.json();
        return json;
      }
      else console.error("Fetch data failed!")
    }
    const url = "http://localhost:3000/products"
    fetchData(url).then(res => this.getState(res))
  }

  getState=(products)=>{
    this.setState({
      products,
    })
  }

  render() {
    return (
      <main className="app">
        <Header cartNumber = {this.state.cartNumber}/>
        {this.displayWhenGetData()}
      </main>
    );
  }
}

export default App;
