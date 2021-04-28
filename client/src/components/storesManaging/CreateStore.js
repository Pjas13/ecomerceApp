import React, { Component } from "react";
import axios from "axios";
import Store from "./Store";
import history from "../../history";

class CreateStore extends Component {
  state = {};

  //Deal whit changes on the values
  onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  };

  //Submit the values to create a new store
  onSubmit = async (e) => {
    e.preventDefault();
    const newStore = this.state;
    console.log(newStore);
    const response = await axios.post("/store/new", newStore);
    if (response.status !== 200) {
      console.log(response.data)
      history.push("/stores/new");
    }
    history.push("/")
  };

  render() {
    return (
      <Store
        onChange={this.onChange}
        onSubmit={this.onSubmit}
        store={this.state}
      />
    );
  }
}

export default CreateStore;
