import React from "react";
import { Link } from "react-router-dom";
import ProductCheckout from "./ProductCheckout";
import { useStateValue } from "../../context/StateProvider";

//Component to show the products in the cart
//Show the total value of the cart and the amount of items
const Cart = () => {
  const [{ basket }] = useStateValue();

  const totalPrice = (basket) => {
    let total = 0;
    basket.map((item) => {
      return (total = parseInt(item.price) + total);
    });
    return total;
  };

  const renderProduct = () => {
    return basket.map((item) => {
      return (
        <ProductCheckout
          key={item.id}
          id={item.id}
          name={item.name}
          img={item.img}
          price={item.price}
        />
      );
    });
  };

  return (
    <div>
      <div className="row ">{renderProduct()}</div>
      <div className="row justify-content-md-center">
        <div className="col col-md-auto">
          <h4 className="h4">{`Subtotal(${basket.length} items): ${totalPrice(basket)}€`}</h4>
        </div>
        <div className="col col-md-auto">
          <Link className="btn btn-dark" to="/checkout">Checkout</Link>
        </div>
      </div>
    </div>
  );
};



export default Cart;
