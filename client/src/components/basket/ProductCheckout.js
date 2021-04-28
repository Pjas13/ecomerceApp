import React from "react";
import { useStateValue } from "../../context/StateProvider";

//Show the products in the basket
//Give a change to delete some products
const ProductCheckout = ({ id, img, name, price }) => {
  const [state, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="col-sm-3">
      <div className="card text-center">
        <img src={img} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            <small className="text-muted">{price}€</small>
          </p>
          <button
            className="btn btn-outline-secondary"
            onClick={removeFromBasket}
          >
            Remove from the Basket
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCheckout;
