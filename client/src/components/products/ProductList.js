import React, { Component } from "react";
import axios from "axios";
import ProductItem from "./ProductItem";

//Component to show a list of products
class ProductList extends Component {
  state = {
    products: [],
  };

  //Get all the products
  componentDidMount = async () => {
    const response = await axios.get("/products");
    const { products } = response.data;
    this.setState({ ...products, products: products });
  };

  renderProducts = () => {
    const storeId = this.props.match.params.id;
    return this.state.products.map((product) => {
      return (
        <ProductItem
          key={product._id}
          storeId={storeId}
          id={product._id}
          img={product.img}
          name={product.name}
          price={product.price}
        />
      );
    });
  };

  render() {
    return (
        <div className="row">{this.renderProducts()}</div>
   
    );
  }
}

export default ProductList;
