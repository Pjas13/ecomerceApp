import React, {useState} from "react";
import axios from "axios"

const Product = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [img, setImg] = useState("")

    const onSubmit = async (e) =>{
        e.preventDefault();

        const product = {
            name,
            price,
            img
        }
        const response = await axios.post("/products", product);
        console.log(response)
    }

  return (
    <form onSubmit={(e) => onSubmit(e)} noValidate>
      <div className="row mb-3">
        <label htmlFor="nameStore" className="col-sm-2 col-form-label">
          Product Name
        </label>
        <div className="col-sm-10">
          <input
            name="name"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="nameStore"
            required
          />
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="nameStore" className="col-sm-2 col-form-label">
          Product Image
        </label>
        <div className="col-sm-10">
          <input
            name="name"
            className="form-control"
            value={img}
            onChange={(e) => setImg(e.target.value)}
            id="nameStore"
            required
          />
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="nameStore" className="col-sm-2 col-form-label">
          Product Price
        </label>
        <div className="col-sm-10">
          <input
            name="name"
            className="form-control"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            id="nameStore"
            required
          />
        </div>
      </div>
      <button>Submit</button>
    </form>
  );
};
export default Product;
