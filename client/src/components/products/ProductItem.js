import React from "react";
import { useStateValue } from "../../context/StateProvider";

const ProductItem = ({ id, img, name, price, storeId }) => {
  const [state, dispatch] = useStateValue();

  //Add the values to the basket using context
  //to have access in all the application
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        img: img,
        name: name,
        price: price,
        storeId: storeId,
      },
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
          <button className="btn btn-outline-secondary" onClick={addToBasket}>Add to card</button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
