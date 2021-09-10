import React, { useState } from 'react';
import { Container, Row, Col, UncontrolledDropdown,
    DropdownToggle, DropdownMenu, DropdownItem, Media
} from 'reactstrap';
import so from '../so.jpg';

export default function CMT(props){
    const cmt = props.Cmt;
    const listCmt = cmt.map((e,i)=>{
        return (
            <Row key={i}>
                <Media>
                    <Media left href="#">
                        <img object src={so} width='32px' height='32px' />
                    </Media>
                    <Media body>
                        <Media heading>
                            <Row>
                            <Col xs={'auto'} >{e.author}</Col>
                            <Col style={{display: (props.user==e.author)?'block':'none'}}>
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