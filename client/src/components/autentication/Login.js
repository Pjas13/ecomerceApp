import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import history from "../../history";
import { Context } from "../../context/UserContext";

//This component don't fully work
//Component to login a user
const Login = () => {
  const context = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Submit the values to login a user
  const onSubmit = async (e) => {
    e.preventDefault();
    const user = { email, password };
    const response = await axios.post("/users/login", user);
    if (response.status !== 200) {
      history.push("/login");
    }
    context.changeCurrentUser(response.data);
    history.push("/");
  };

  return (

    <form className="row g-2" onSubmit={onSubmit}>
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
      <div className="col-12">
        <Link className="btn btn-dark" to="/register">
          Create a new user
        </Link>
      </div>
    </form>

  );
};

export default Login;
