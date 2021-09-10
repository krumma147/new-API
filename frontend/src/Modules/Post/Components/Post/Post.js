import React, { useState } from 'react';
import { Container, Row, Col, UncontrolledDropdown,Collapse,
    DropdownToggle, DropdownMenu, DropdownItem, Media,Badge, 
} from 'reactstrap';
import CMT from '../Cmt/Cmt';
import AddCmt from '../../AddCmt/AddCmt'
import so from '../so.jpg';

export default function PostItem(props){
    const post = props.post;
    const cmt = props.cmt;
    const user = props.user;

    const [collapse,setcollapse] = useState(false);
    const showCmt = () =>{
        setcollapse(!collapse);
    } 

    const PostItem = post.map((e,i)=>{
        return (
            <Container key={i}>
                    <Media>
                        <Media left href="#">
                            <img object src={so} width='64px' height='64px' />
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
                            <hr />
                            <Row>
                                <Col xs={4}>
                                    <span class="material-icons">favorite</span>
                                </Col>

                                <Col xs={4} onClick={showCmt}>
                                    <Badge> {e.comments.length} </Badge>
                                    <span class="material-icons">comment</span>
                                </Col>

                                <Col >
                                    <span class="material-icons">favorite</span>
                                </Col>
                            </Row>
                            <hr />
                        </Media>
                    </Media>

                <section>
                        <Collapse isOpen={collapse}>
                            <CMT user EditCmtBtn DeleteCmtBtn Cmt={cmt} />
                            <AddCmt editCmtText  AddCmtBtn />
                        </Collapse>    
                </section>
            </Container>
        )
    })

    return (
    <Container>{PostItem}</Container>
    );
}