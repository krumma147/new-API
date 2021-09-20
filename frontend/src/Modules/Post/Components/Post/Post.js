import React, { useState } from 'react';
import { Container, Row, Col, UncontrolledDropdown,Collapse,
    DropdownToggle, DropdownMenu, DropdownItem, Media,Badge,
    Modal, ModalHeader, ModalBody, Input, ModalFooter, Button
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

    const [modal,setmodal] =useState(false);
    const [editPostContent,seteditPostContent] = useState('');

    const onchangeEditPost=(e)=>{
        seteditPostContent(e.target.value);
    }

    const toggle = () =>{
        setmodal(!modal);
    }

    const EditPostBtn = (e,i) =>{
        // const {post} = this.state;
        // const content = post[i].content;
        // const id = post[i].id;
        // const author = post[i].author;
        console.log(i);
        // this.setState({
        //     editPostContent: content,
        //     editPostID:id,
        //     editPostAuthor:author,
        // })
    }

    const editPostForm = (
        <div>
            <Modal isOpen={modal} toggle={toggle} className>
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                    <Input type="textarea" placeholder={'Something you want to share'} name="post-edit" defaultValue={editPostContent} onChange={e=>onchangeEditPost(e)} rows={5} />
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={e=>props.submitChange(e)}>Submit</Button>
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
        );

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
                                                <DropdownItem onClick={EditPostBtn(e,i)}>
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
                            <CMT user={user} EditCmtBtn DeleteCmtBtn Cmt={cmt} />
                            <AddCmt editCmtText  AddCmtBtn />
                        </Collapse>    
                </section>
                {editPostForm}
            </Container>
        )
    })

    return (
    <Container>{PostItem}</Container>
    );
}