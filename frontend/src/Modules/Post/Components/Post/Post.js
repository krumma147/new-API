import React, { useState } from 'react';
import { Container, Row, Col, UncontrolledDropdown,
    DropdownToggle, DropdownMenu, DropdownItem, Media,Badge
} from 'reactstrap';
import Cmt from '../Cmt/Cmt';

export default function PostItem(props){
    const post = props.post;
    const PostItem = post.map((e,i)=>{
        return (
            <Container key={i}>
                <Row>
                    <Media>
                    <Media left href="#">
                        <Media object data-src="../../../../unknow.jpg" />
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
                                    <DropdownItem onClick>
                                        <span class="material-icons">edit</span>
                                    </DropdownItem>
                                            
                                    <DropdownItem divider />

                                    <DropdownItem onClick>
                                        <span class="material-icons" >delete</span>
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Col>
                            </Row>
                        </Media>
                        {e.content}
                    </Media>
                    </Media>
                </Row>

                <Row>
                    <Col xs={4}>
                        <span class="material-icons">favorite</span>
                    </Col>

                    <Col xs={4} onClick>
                        <Badge> {e.comments.length} </Badge>
                        <span class="material-icons">comment</span>
                    </Col>

                    <Col >
                        <span class="material-icons">favorite</span>
                    </Col>
                </Row>
            </Container>
        )
    })

    return (
    <Container>{PostItem}</Container>
    );
}