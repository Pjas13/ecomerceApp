import React, { Component } from "react";
import axios from "axios";
import Store from "./Store";
import history from "../../history";

class EditStore extends Component {
  state = {};

  //Get a single store to render
  componentDidMount = async () => {
    const { id } = this.props.match.params;
    const response = await axios.get(`/store/${id}`);
    this.setState(response.data);
  };

  //Deal whit changes on the values
  onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ ...this.state, [name]: value });
  };

  //Submit the changes to edit a store
  onSubmit = async (e) => {
    e.preventDefault();
    const { id } = this.props.match.params;
    const store = this.state;
    const response = await axios.put(`/store/${store._id}`, store);
    if (response.status !== 200) {
      console.log(response.data)
      history.push(`/stores/edit/${id}`);
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

export default EditStore;
