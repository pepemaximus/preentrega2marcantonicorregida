import CartWidget from "../CartWidget/CartWidget";
import Button from 'react-bootstrap/Button';
import Navbar, { NavbarBrand } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav class="navbar bg-body-tertiary">
            <div class="container-fluid">
                <div>
                    <button variant="dprimary" Link to="/">Home</button>{' '}
                </div>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Categories
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item><Link to="/category/cellphones">Cellphones</Link></Dropdown.Item>
                    <Dropdown.Item><Link to="/category/notebooks">Notebooks</Link></Dropdown.Item>
                    <Dropdown.Item><Link to="/category/others">Others</Link></Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <CartWidget/>
            </div>
        </nav>
    )
}
export default NavBar