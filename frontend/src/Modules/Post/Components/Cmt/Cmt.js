import React, { useState } from 'react';
import { Container, Row, Col, UncontrolledDropdown,
    DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';

export default function CMT(props){
    const cmt = props.Cmt;
    const listCmt = cmt.map((e,i)=>{
        return (
            <Row key={i}>
                <Col xs={3} >{e.author}</Col>
                <Col xs={6} >{e.text}</Col>
                <Col xs={1}>
                    <UncontrolledDropdown inNavbar>
                        <DropdownToggle nav>
                            <span class="material-icons">more_vert</span>
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem onClick>
                                <span class="material-icons">edit</span>
                            </DropdownItem>
                                    
                            <DropdownItem divider />

                            <DropdownItem onClick>
                                <span class="material-icons">delete</span>
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Col>
            </Row>
        )
    })

    return (
    <Container>{listCmt}</Container>
    );
}