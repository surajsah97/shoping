
import React from "react";

import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import ProductScreen from "./screens/ProductScreen";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import { useSelector } from "react-redux";
// import productssProductss  from "./productss";

function App() {
    const cart = useSelector(state => state.cart)
    const {cartItems}=cart

  return (
    
    <div className="grid_container">
    <header className="raw">
        <div>
            <Link className="brand" href="/">Shoping </Link>
        </div>
        <div>
            <Link to="/cart">Cart
            {cartItems.length>0&&(
                <span className="badge">{cartItems.length}</span>
            )}
            </Link>
            <Link to="/sign_in">sign in</Link>
        </div>
    </header>
    
    <main>
        <Switch>
        <Route path="/cart/:id?" component={CartScreen}/>
        <Route exact path="/product/:id"  component={ProductScreen}/>
    <Route path="/" component={HomeScreen} exact/>
    </Switch>
    </main>
    <footer className="raw center">
        All right reserved
    </footer>

</div>

  );
}

export default App;
