import React, { Component,Fragment} from 'react';
import PostService from "../../Shared/PostService";
import { Container, Row, Col,UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Modal, ModalHeader, ModalBody, Input, ModalFooter, Button, Badge
} from 'reactstrap';
import './ListPost.scss'
import AddPost from '../../AddPost/AddPost';
import SlideShow from '../../SlideShow/slideshow';

class ListPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            author: 'author 99',
            content: 'Shared Components AppHeader AppHeader.js',
            post:[],
            gotContent:'',
            PostStatus:false,
            modal: false,
            editPostContent:'',
            editPostID:'',
        }
    }

    componentDidMount() {
        PostService.listPost().then(res => {
            this.setState({
                id: res.data[0].id
            })
            console.log(res.data)
            PostService.getPost(this.state.id).then(r => console.log(r.data))
        });
        this.callAPI();
    }

    callAPI = () =>{
        const API = 'http://127.0.0.1:4000/api/post/post/list';
        fetch(API)
            .then(response => response.json())
            .then(e=>this.setState({post:e}))
    }

    showData = () =>{
        let {post} = this.state;
        post.map((e)=>console.log(e));
    }

    postEdit = (e, data) =>{
        e.preventDefault()
        this.setState({gotContent:data});
        console.log('edit', data);
        const api = 'http://127.0.0.1:4000/api/post/post/create';
        fetch(api,{
            method: 'POST',
            body:JSON.stringify({
                author:'author unknown',
                content:data
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
        .then(data=>{
            this.callAPI();
            this.setState({post:data})
        })
    }

    deleteBTN = (e,i) =>{
        e.preventDefault()
        const {post} = this.state;
        console.log('delete' , post[i].id);
        const id = post[i].id;
        const api = 'http://127.0.0.1:4000/api/post/post/delete?id';
        fetch(`${api}=${id}`)
            .then(data=>{
                this.callAPI();
                this.setState({post: data})
            })
    }

    toggle = (e,i) =>{
        const {post} = this.state;
        const content = post[i].content;
        const id = post[i].id;
        const author = post[i].author;
        this.setState({
            modal: !this.state.modal,
            editPostContent: content,
            editPostID:id,
            editPostAuthor:author,
        })
    }

    onchangeEditPost = (e) =>{
        this.setState({editPostContent:e.target.value});
    }

    submitChange=(e)=>{
        const {editPostContent,editPostID, editPostAuthor, modal} = this.state;
        console.log(editPostContent, editPostID)
        const api = 'http://127.0.0.1:4000/api/post/post/update?id'
        fetch(`${api}=${editPostID}`,{
            method: 'POST',
            body:JSON.stringify({
                author:editPostAuthor,
                content:editPostContent,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
            .then(data=>{
                this.callAPI();
                this.setState({
                    post:data,
                    modal: !modal,
                })
            })
    }

    render() {
        let {post, PostStatus, modal, editPostContent} = this.state;
        post = Object.values(post);
        const suggest = 
            (
                <Container className='suggestNews-container'>
                    <Row>
                        <Col><b>Tin Mới</b></Col>
                        <Col>Đọc Nhiều</Col>
                    </Row>

                    <Row >
                    {post.map(e=>(
                    <Container className='suggestNews-content'>
                        <Row>
                            <Col>{e.ctime}</Col>
                            <Col>{e.content}</Col>
                        </Row>
                    </Container>
                    ))}
                    </Row>
                    
                </Container>
            );

        const editPostForm = (
            <div>
                <Modal isOpen={modal} toggle={(e)=>this.toggle(e,0)} className>
                    <ModalHeader toggle={(e)=>this.toggle(e,0)}>Modal title</ModalHeader>
                    <ModalBody>
                        <Input type="textarea" placeholder={'Something you want to share'} name="post-edit" defaultValue={editPostContent} onChange={e=>this.onchangeEditPost(e)} rows={5} />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={e=>this.submitChange(e)}>Submit</Button>
                        <Button color="secondary" onClick={(e)=>this.toggle(e,0)}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
            );

        const Post = post.map((e,i)=>{
            return(
                <Container>
                    <Row key={i} className='post-content'>
                        <Col xs={2}>
                            {e.author}  
                        </Col>

                        <Col xs={7}>
                            {e.content} 
                        </Col>

                        <Col xs={2}>
                            <Badge> {e.comments.length} </Badge>
                            <span class="material-icons">comment</span>
                        </Col>

                        <Col xs={1}>
                            <UncontrolledDropdown inNavbar>
                                <DropdownToggle nav>
                                <span class="material-icons">more_vert</span>
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem onClick={(e)=>this.toggle(e,i)}>
                                        <span class="material-icons">edit</span>
                                    </DropdownItem>
                                    
                                    <DropdownItem divider />

                                    <DropdownItem onClick={e=>this.deleteBTN(e,i)}>
                                        <span class="material-icons">delete</span>
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Col>
                    </Row>              
                </Container>
            )
        })
 
        return (
            <Fragment>
                <Container>

                    <SlideShow />

                    <Row style={{ display: (post == [])? 'none' : 'flex' }} >
                        <Col xs={5}></Col>
                    
                        <Col className='Addpostbtn'>
                            <AddPost PostStatus={PostStatus} postEdit={this.postEdit} />
                        </Col>  

                        <Col xs={5}></Col>
                    </Row>

                    <Row className='PostContainer'>
                        <Col xs={7}>{Post}</Col>

                        <Col xs={5}>{suggest}</Col>
                    </Row>

                    
                </Container>
                {editPostForm}
            </Fragment>
        );
    }
}

export default ListPost;