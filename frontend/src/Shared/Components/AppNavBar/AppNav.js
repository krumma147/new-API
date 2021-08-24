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

const AppNav = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Container>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/"> <img src={IMG} width="150" /> </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink href="#">Kinh Tế</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Pháp Luật</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Văn Hóa</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Giáo Dục</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Thể Thao</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Quân Sự</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Khoa Học</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Công Nghệ</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Y Tế</NavLink>
                    </NavItem>
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
    </Container>
  );
}

export default AppNav;