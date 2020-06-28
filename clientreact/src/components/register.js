import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Alert,
} from "reactstrap";
import axios from "axios";
import { Redirect } from "react-router-dom";
class Register extends React.Component {
  state = {
    name: "",
    password: "",
    password2: "",
    success: false,
    error: false,
  };
  onFormSubmit = (event) => {
    event.preventDefault();
    axios({
      method: "post",
      url: "/api/emp/register",
      data: {
        name: this.state.name,
        password: this.state.password,
        password2: this.state.password2,
      },
    })
      .then((res) => {
        console.log(res);
        if (res.data.success) {
          this.setState({
            name: "",
            password: "",
            password2: "",
            success: true,
          });
        } else {
          this.setState({
            name: "",
            password: "",
            password2: "",
            error: res.data.error,
            success: false,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    if (this.state.success) {
      return <Redirect to="/login" />;
    }
    return (
      <form onSubmit={this.onFormSubmit}>
        <h3>Sign Up</h3>
        <Alert color="danger" isOpen={this.state.error ? true : false}>
          {this.state.error ? this.state.error : ""}
        </Alert>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            required
            value={this.state.name}
            onChange={(event) => this.setState({ name: event.target.value })}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            required
            value={this.state.password}
            onChange={(event) =>
              this.setState({ password: event.target.value })
            }
          />
        </div>

        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Confirm password"
            required
            value={this.state.password2}
            onChange={(event) =>
              this.setState({ password2: event.target.value })
            }
          />
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Sign Up
        </button>
        <p className="forgot-password text-right">
          Already registered? <a href="/login">Sign in</a>
        </p>
      </form>
    );
  }
}
export default Register;
