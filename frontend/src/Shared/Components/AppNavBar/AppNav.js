import React, { useState } from 'react';
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
  Col,
  Container
} from 'reactstrap';
import IMG from '../../../IMG.jpg';
import './AppNav.scss'

const AppNav = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
      <div className='divcontainer'>
            <Navbar color="light" light expand="md">
                {/* <img src={IMG} width="150" /> */}
                <NavbarBrand href="/"> Brand </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="#">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Product</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Categories</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Blogs</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">News</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">LOGIN</NavLink>
                    </NavItem>
                    {/* <NavItem>
                        <NavLink href="#">Công Nghệ</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Y Tế</NavLink> */}
                    {/* </NavItem> */}
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                        Khác
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                            Option 1
                            </DropdownItem>
                            <DropdownItem>
                            Option 2
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                            Reset
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
                </Collapse>
            </Navbar>
    </div>
  );
}

export default AppNav;