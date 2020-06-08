import React from "react";
import axios from "axios";
import { Button, Alert } from "reactstrap";
import { Link } from "react-router-dom";
class DeleteUser extends React.Component {
  state = {
    name: "",
    success: false,
  };
  onFormSubmit = (event) => {
    event.preventDefault();
    let name = this.state.name;
    axios({
      method: "delete",
      url: "/api/emp/deleteemp/" + name,
    }).then((res) => {
      this.setState({ name: "", success: true });
    });
  };
  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <h1>Delete Employee</h1>
        <p>Employee name:</p>
        <input
          type="text"
          value={this.state.name}
          onChange={(event) => this.setState({ name: event.target.value })}
        />
        <br />
        <br />
        <Button style={linkbutton}>Delete</Button>
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
export default DeleteUser;
