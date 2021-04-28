import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./autentication/Login";
import Register from "./autentication/Register";
import CreateStore from "./storesManaging/CreateStore";
import EditStore from "./storesManaging/EditStore";
import Header from "./header/Header";
import Basket from "./basket/Basket";
import Home from "./Home";
import DeliverSelector from "../components/basket/DeliverSelector";
import ProductList from "./products/ProductList";
import CreateProduct from "../components/products/CreateProduct";

import history from "../history";

function App() {
  return (
    <Router history={history}>
      <Header />
      <div className="container">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/stores/new" component={CreateStore} />
          <Route path="/stores/edit/:id" exact component={EditStore} />
          <Route path="/stores/:id" exact component={ProductList} />
          <Route path="/cart" exact component={Basket} />
          <Route path="/checkout" component={DeliverSelector} />
          <Route pathe="/product/new" exact component={CreateProduct} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
