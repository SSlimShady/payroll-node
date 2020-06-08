import React from "react";
import axios from "axios";
import { Button, Alert } from "reactstrap";
import { Link } from "react-router-dom";
class UpdateRate extends React.Component {
  state = {
    name: "",
    rate: "",
    success: false,
  };
  onFormSubmit = (event) => {
    event.preventDefault();
    let name = this.state.name;
    axios({
      method: "put",
      url: "/api/emp/updateemp/" + name,
      data: {
        rate: this.state.rate,
      },
    }).then((res) => {
      this.setState({ name: "", rate: "", success: true });
    });
  };
  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <h1>Update Rate</h1>
        <p>Employee name:</p>
        <input
          type="text"
          value={this.state.name}
          onChange={(event) => this.setState({ name: event.target.value })}
        />
        <p>Employee rate:</p>
        <input
          type="text"
          value={this.state.rate}
          onChange={(event) => this.setState({ rate: event.target.value })}
        />
        <br />
        <br />
        <Button style={linkbutton}>Update</Button>
        <br />
        <br />
        <Link style={linkbutton} to="/">
          Home
        </Link>{" "}
        <br />
        <br />
        <Alert color="success" isOpen={this.state.success ? true : false}>
          {this.state.success ? "Success" : ""}
        </Alert>
      </form>
    );
  }
}
const linkbutton = {
  textDecoration: "none",
  background: "blue",
  color: "white",
  border: "none",
  padding: "7px 15px",
  borderRadius: "5px",
};
export default UpdateRate;
