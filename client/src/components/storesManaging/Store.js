import React from "react";

const Shop = (props) => {
  return (
    <form className="row g-2" onSubmit={(e) => props.onSubmit(e)}>
      <div className="col-12">
        <label htmlFor="nameStore" className="form-label">
          Store Name
        </label>
        <div className="col-sm-12">
          <input
            name="name"
            className="form-control"
            value={props.store.name}
            onChange={(e) => props.onChange(e)}
            id="nameStore"
            required
          />
        </div>
      </div>
      <div className="col-6">
        <label htmlFor="openStore" className="form-label">
          Open Store
        </label>
        <input
          className="form-control"
          name="openStore"
          id="openSotre"
          value={props.store.openStore}
          onChange={(e) => props.onChange(e)}
        />
      </div>
      <div className="col-6">
        <label htmlFor="closeStore" className="form-label">
          Open Store
        </label>
        <input
          className="form-control"
          name="closeStore"
          id="openSotre"
          value={props.store.closeStore}
          onChange={(e) => props.onChange(e)}
        />
      </div>
      <div className="col-12">
        <button className="btn btn-dark">Submit</button>
      </div>
    </form>
  );
};
export default Shop;
