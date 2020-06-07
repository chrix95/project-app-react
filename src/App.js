import React, { useState } from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route
 } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import CartContainer from './components/CartContainer'
import Home from './views/Home'
import About from './views/About'
import Cart from './views/Cart'
import Product from './views/Product'

function App() {
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)

  const updateCart = (payload) => {
    setCart([...cart, payload])
    const sumTotal = Number(total) + Number(payload.price)
    setTotal(sumTotal.toFixed(2))
  }

  const updateSum = (price) => {
    const sumTotal = Number(total) - Number(price)
    setTotal(sumTotal.toFixed(2))
    if (cart.length === 0) {
      setTotal(0)
      return
    }
  }

  const removeCart = (id) => {
    const getPrice = cart.find(item => item.id === id).price
    const newCart = cart.filter(item => item.id !== id)
    updateSum(getPrice)
    setCart(newCart)
  }

  return (
    <div className="relative pb-10 min-h-screen">
      <Router>
        <Header />
        <div className="p-3">
          <CartContainer count={cart.length} />
          <Switch>
            <Route exact path="/">
              <Home addToCart={updateCart} />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/product/:id">
              <Product />
            </Route>
            <Route path="/cart">
              <Cart cart={cart} total={total} removeCartItem={removeCart} />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
