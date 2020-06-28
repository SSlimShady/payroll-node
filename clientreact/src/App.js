import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Button } from "reactstrap";
import Navbar from "./components/AppNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AppNavbar from "./components/AppNavbar";
import AppTable from "./components/AppTable";
import AddUser from "./components/AddUser";
import Login from "./components/login";
import Register from "./components/register";
import DeleteUser from "./components/DeleteUser";
import UpdateRate from "./components/UpdateRate";
import UpdateHours from "./components/UpdateHours";
import UpdateVar from "./components/UpdateVar";
import AppTableVar from "./components/AppTableVar";
import { Link } from "react-router-dom";

class App extends React.Component {
  state = {
    users: [],
  };
  componentDidMount() {
    axios({
      method: "get",
      url: "api/emp/getemp",
    }).then((res) => {
      this.setState({ users: res.data });
    });
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Route
            exact
            path="/"
            render={(props) => (
              <React.Fragment>
                <AppNavbar />
                <AppTable users={this.state.users} />
                <Link style={linkbutton} to="/adduser">
                  Add User
                </Link>{" "}
                <Link style={linkbutton} to="/deleteuser">
                  Delete User
                </Link>{" "}
                <Link style={linkbutton} to="/updateuser">
                  Update Rate
                </Link>{" "}
                <Link style={linkbutton} to="/updatehours">
                  Update Hours
                </Link>{" "}
                <Link style={linkbutton} to="/updatevar">
                  Update Var
                </Link>
              </React.Fragment>
            )}
          />
          <Route
            path="/variation"
            render={(props) => (
              <React.Fragment>
                <AppNavbar />
                <AppTableVar users={this.state.users} />
              </React.Fragment>
            )}
          />
          <Route
            path="/adduser"
            render={(props) => (
              <React.Fragment>
                <AppNavbar />
                <AddUser />
              </React.Fragment>
            )}
          />
          <Route
            path="/deleteuser"
            render={(props) => (
              <React.Fragment>
                <AppNavbar />
                <DeleteUser />
              </React.Fragment>
            )}
          />
          <Route
            path="/updateuser"
            render={(props) => (
              <React.Fragment>
                <AppNavbar />
                <UpdateRate />
              </React.Fragment>
            )}
          />
          <Route
            path="/updatehours"
            render={(props) => (
              <React.Fragment>
                <AppNavbar />
                <UpdateHours />
              </React.Fragment>
            )}
          />
          <Route
            path="/updatevar"
            render={(props) => (
              <React.Fragment>
                <AppNavbar />
                <UpdateVar />
              </React.Fragment>
            )}
          />

          <Route
            path="/login"
            render={(props) => (
              <div className="auth-wrapper">
                <div className="auth-inner">
                  <React.Fragment>
                    <Login />
                  </React.Fragment>{" "}
                </div>{" "}
              </div>
            )}
          />
          <Route
            path="/register"
            render={(props) => (
              <div className="auth-wrapper">
                <div className="auth-inner">
                  <React.Fragment>
                    <Register />
                  </React.Fragment>{" "}
                </div>{" "}
              </div>
            )}
          />
        </div>
      </Router>
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
export default App;
