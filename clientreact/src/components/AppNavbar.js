import React from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Container,
} from "reactstrap";

class AppNavbar extends React.Component {
  render() {
    return (
      <Navbar color="dark" dark expand="sm" className="mb-5">
        <Container>
          <NavbarBrand href="/">Home</NavbarBrand>
          <NavbarBrand href="/variation">Allowance/Deduction</NavbarBrand>
          <Nav className="ml-auto" navbar></Nav>
        </Container>
      </Navbar>
    );
  }
}
const linkcss = {
  color: "#fff",
  textDecoration: "none",
};
export default AppNavbar;
