import React, { useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useStateValue } from "../../context/StateProvider";
import { Context } from "../../context/UserContext";
import history from "../../history";

const Header = () => {
  const context = useContext(Context);
  console.log(context);

  //Using the basket to have access to the length of products
  //and show next to the cart
  const [{ basket }] = useStateValue();

  const logOut = async () => {
    const response = await axios.get("/users/logout");
    context.changeCurrentUser(response.data);
    history.push("/");
  };

  return (
    <nav className="navbar sticky-top navbar-expand-md navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          GlazedApp
        </Link>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {!context || context.currentUser === "LoggedOut" ? (
                <Link className="nav-link btn btn-dark" to="/login">LogIn</Link>
              ) : (
                <button className="nav-link btn btn-dark" onClick={logOut}>LogOut</button>
              )}
            </li>
            <li className="nav-item">
              {context && context.currentUser.isAdmin === true ? (
                <Link className="nav-link btn btn-dark" to="/stores/new">Create Store</Link>
              ) : null}
            </li>
            <li className="nav-item">
              <Link className="nav-link btn btn-dark" to="/cart">
                Cart<span>{basket.length}</span>
              </Link>
            </li>
          </ul>
        </div>
  
    </nav>
  );
};

export default Header;
