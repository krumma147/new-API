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
    Row,
    Container
  } from 'reactstrap';

export default function Test() {
    const linklist = ['Link 1', 'Link 2', 'Link 3', 'Link 4'];
    const renedrLinks = linklist.map(e=>{
        return(
            <li>
                <a href="#" class="btn text-light btn-floating m-1">{e}</a>
            </li>
        )
    })

    return(
        <footer class="bg-dark text-center text-white">
            <Container class="p-4">
                <section class="mb-4">
                    {/* <!-- Facebook --> */}
                    <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                        <i class="fab fa-facebook-f"></i>
                    </a>

                    {/* <!-- Twitter --> */}
                    <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                        <i class="fab fa-twitter"></i>
                    </a>

                    {/* <!-- Google --> */}
                    <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                        <i class="fab fa-google"></i>
                    </a>

                    {/* <!-- Instagram --> */}
                    <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                        <i class="fab fa-instagram"></i>
                    </a>

                    {/* <!-- Linkedin --> */}
                    <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                        <i class="fab fa-linkedin-in"></i>
                    </a>

                    {/* <!-- Github --> */}
                    <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                        <i class="fab fa-github"></i>
                    </a>
                </section>
                
                <section>
                    <Row>
                        <Col xs='12' sm="6" md="3">
                            <h5 class="text-uppercase">Links</h5>

                            <ul class="list-unstyled mb-0">
                                {renedrLinks}
                            </ul>
                        </Col>
                        <Col xs='12' sm="6" md="3">
                            <h5 class="text-uppercase">Links</h5>

                            <ul class="list-unstyled mb-0">
                                {renedrLinks}
                            </ul>
                        </Col>
                        <Col xs='12' sm="6" md="3">
                            <h5 class="text-uppercase">Links</h5>

                            <ul class="list-unstyled mb-0">
                                {renedrLinks}
                            </ul>
                        </Col>
                        <Col xs='12' sm="6" md="3">
                            <h5 class="text-uppercase">Links</h5>

                            <ul class="list-unstyled mb-0">
                                {renedrLinks}
                            </ul>
                        </Col>
                    </Row>
                </section>
            </Container>
            <div class="text-center p-3" style={{"background-color": "rgba(0, 0, 0, 0.2)"}}>
                © 2021 Copyright:
                <a class="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
            </div>
        </footer>
    )
}