import React from "react";
import axios from "axios";
import { Button, Alert } from "reactstrap";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
class Login extends React.Component {
  state = {
    name: "",
    rate: "",
    success: false,
  };
  onFormSubmit = (event) => {
    event.preventDefault();
    axios({
      method: "post",
      url: "/api/emp/createemp",
      data: {
        name: this.state.name,
        rate: this.state.rate,
      },
    }).then((res) => {
      this.setState({ name: "", rate: "", success: true });
      //   window.location.href = "/login";
    });
  };
  render() {
    if (this.state.success) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <form>
        <h3>Sign In</h3>

        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Submit
        </button>
        <p className="forgot-password text-right">
          Not a member? <a href="/register">Sign Up</a>
        </p>
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
export default Login;
