import React, { useState } from "react";
import history from "../../history";
import axios from "axios";

//Component to create a new user
const Register = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  //Submit the values to create a user
  const onSubmit = async (e) => {
    e.preventDefault();

    const newUser = {
      name,
      email,
      password,
    };
    const response = await axios.post("/users/register", newUser);
    if (response.status !== 200) {
      console.log(response.data);
      return history.push("/");
    }
    console.log(response.data);
    history.push("/login");
  };

  return (
   
      <form className="row g-2" onSubmit={onSubmit}>
        <div className="col-12">
          <label htmlFor="nameRegister" className="form-label">
            Email
          </label>
          <input
            name="name"
            type="text"
            value={name}
            className="form-control"
            onChange={(e) => setName(e.target.value)}
            id="nameRegister"
            required
            autoComplete="off"
          />
        </div>
        <div className="col-12">
          <label htmlFor="emailLogin" className="form-label">
            Email
          </label>
          <input
            name="email"
            type="text"
            value={email}
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            id="emailLogin"
            required
            autoComplete="off"
          />
        </div>
        <div className="col-12">
          <label htmlFor="passwordLogin" className="form-label">
            Password
          </label>
          <input
            name="password"
            type="password"
            value={password}
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
            id="passwordLogin"
            required
          />
        </div>
        <div className="col-12">
          <button className="btn btn-dark">Login</button>
        </div>
      </form>

  );
};

export default Register;
