import React from "react";
import axios from "axios";
import { Button, Alert } from "reactstrap";
import { Link } from "react-router-dom";
class UpdateHours extends React.Component {
  state = {
    name: "",
    hours: "",
    month: "",
    success: false,
  };
  onFormSubmit = (event) => {
    event.preventDefault();
    let name = this.state.name;
    axios({
      method: "put",
      url: "/api/emp/updatehours/" + name,
      data: {
        Jan: {
          hours: this.state.hours,
        }
      },
    }).then((res) => {
      this.setState({ name: "", hours: "", month: "", success: true });
    });
  };
  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <h1>Update Hours</h1>
        <p>Employee name:</p>
        <input
          type="text"
          value={this.state.name}
          onChange={(event) => this.setState({ name: event.target.value })}
        />
        <p>Month:</p>
        <input
          type="text"
          value={this.state.month}
          onChange={(event) => this.setState({ month: event.target.value })}
        />
        <p>Employee Hours:</p>
        <input
          type="text"
          value={this.state.hours}
          onChange={(event) => this.setState({ hours: event.target.value })}
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
export default UpdateHours;
