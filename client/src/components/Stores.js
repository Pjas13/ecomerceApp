import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Context } from "../context/UserContext";

const Stores = () => {
  const context = useContext(Context);
  const [stores, setStores] = useState([]);

  //Get all the stores to render a the first time
  useEffect(() => {
    const getStores = async () => {
      const store = await axios.get("/store");
      const { stores } = store.data;
      setStores(stores);
    };
    getStores();
  }, []);

  //Render dinamic the stores
  const renderStores = () => {
    return stores.map((store) => {
      return (
        <div className="col-sm" key={store._id}>
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">{store.name}</h5>
              <p className="card-text">
                Open:{store.openStore} Close:{store.closeStore}
              </p>
            <Link className="card-link btn btn-outline-primary" to={`/stores/${store._id}`} id={store._id}>
              Go to the Store
            </Link>
            {context.currentUser.isAdmin === true ? (
              <Link className="card-link btn btn-outline-primary" to={`/stores/edit/${store._id}`} id={store._id}>
                Edit the Store
              </Link>
            ) : null}
            </div>
          </div>
        </div>
      );
    });
  };

  return <div className="row row-cols-3">{renderStores()}</div>;
};

export default Stores;
