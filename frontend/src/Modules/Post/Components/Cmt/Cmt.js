import React, { useState } from 'react';
import { Container, Row, Col, UncontrolledDropdown,
    DropdownToggle, DropdownMenu, DropdownItem, Media
} from 'reactstrap';
import * as unknowimg from '../../../../unknow.jpg';

export default function CMT(props){
    const cmt = props.Cmt;
    const listCmt = cmt.map((e,i)=>{
        return (
            <Row key={i}>
                <Media>
                <Media left href="#">
                    <Media object data-src={unknowimg} alt="Generic placeholder image" />
                </Media>
                <Media body>
                    <Media heading>
                        <Row>
                        <Col xs={10} >{e.author}</Col>
                        <Col xs={2} style={{display: (props.user==e.author)?'block':'none'}}>
                        <UncontrolledDropdown inNavbar>
                            <DropdownToggle nav>
                                <span class="material-icons">more_vert</span>
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem onClick={e=>props.EditCmtBtn(e,i)}>
                                    <span class="material-icons">edit</span>
                                </DropdownItem>
                                        
                                <DropdownItem divider />

                                <DropdownItem onClick={e=>props.DeleteCmtBtn(e,i)}>
                                    <span class="material-icons" >delete</span>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Col>
                        </Row>
                    </Media>
                    {e.text}
                </Media>
                </Media>
            </Row>
        )
    })

    return (
    <Container>{listCmt}</Container>
    );
}