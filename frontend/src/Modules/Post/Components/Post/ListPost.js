import React, { Component,Fragment} from 'react';
import PostService from "../../Shared/PostService";
import { Container, Row, Col,UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Modal, ModalHeader, ModalBody, Input, ModalFooter, Button, Badge,
    Collapse, Media
} from 'reactstrap';
import './ListPost.scss'
import AddPost from '../../AddPost/AddPost';
import SlideShow from '../../SlideShow/slideshow';
import CMT from '../Cmt/Cmt'
import AddCmt from '../../AddCmt/AddCmt';
import PostItem from '../Post/Post';

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
            cmt:[],
            user:'author unknown',
            editCmtText:'',
            Cmtstatus:false,
            editCmtID:'',
            collapse:false,
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
        this.callCmtApi()
    }

    callAPI = () =>{
        const API = 'http://127.0.0.1:4000/api/post/post/list';
        fetch(API)
            .then(response => response.json())
            .then(e=>this.setState({post:e}))
    }
            //                  < Author Check >
    authorCheck=(author)=>{
        const {user} = this.state;
        if(user == author){return true}else{return false};
    }

    callCmtApi = () => {
        const api ='http://127.0.0.1:4000/api/comment/comment/list';
        fetch(api)
            .then(response => response.json())
            .then(e=>this.setState({cmt:e}))
    }

    postEdit = (e, data) =>{
        e.preventDefault();
        this.setState({gotContent:data});
        const {modal} = this.state;
        console.log('edit', data);
        const api = 'http://127.0.0.1:4000/api/post/post/create';
        fetch(api,{
            method: 'POST',
            body:JSON.stringify({
                author:'author unknown',
                content:data,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
        .then(data=>{
            this.callAPI();
            this.setState({post:data,modal: !modal})
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
                comments: ["7MNQ6ZET"]
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

    AddCmtBtn = (e,data) =>{
        e.preventDefault();
        const {user,Cmtstatus, editCmtID, editCmtText} = this.state;
        const api = 'http://127.0.0.1:4000/api/comment/comment/create';
        if(Cmtstatus){
            //                      < Edit CMT >
            // console.log(editCmtID, editCmtText);
            const api = 'http://127.0.0.1:4000/api/comment/comment/update?id';
            const id = editCmtID; 
            fetch(`${api}=${id}`,{
                method: 'POST',
                body:JSON.stringify({
                    "text":data
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            })
                .then(data=>{
                    this.callCmtApi();
                    this.setState({
                        cmt:data,
                        Cmtstatus: false, 
                        editCmtID: '', 
                        editCmtText:''
                    });
                })
        }else{
            //                      < Add CMT >
            fetch(api,{
                method: 'POST',
                body:JSON.stringify({
                    author:user,
                    text:data,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            })
                .then(data=>{
                    this.callCmtApi();
                    this.setState({cmt:data});
                })
        }
    }

    EditCmtBtn = (e,i) =>{
        e.preventDefault();
        const {cmt} = this.state;
        this.setState({
            editCmtText:cmt[i].text,
            editCmtID:cmt[i].id,
            Cmtstatus:true,
        });
        // console.log(cmt[i].id, cmt[i].text)
    }

    DeleteCmtBtn = (e,i) =>{
        e.preventDefault();
        const {cmt}=this.state;
        console.log('Delete', cmt[i]);
        const id = cmt[i].id;
        const api='http://127.0.0.1:4000/api/comment/comment/delete?id';
        fetch(`${api}=${id}`)
            .then(data=>{
                this.callCmtApi();
                this.setState({cmt:data});
            })
    }

    showCmt = (e,i) =>{
        const {collapse, cmt} = this.state;
        this.setState({collapse: !collapse});
        // console.log(cmt);
    }


    render() {
        let {user, post, modal, editPostContent, collapse, cmt, editCmtText} = this.state;
        post = Object.values(post);
        cmt = Object.values(cmt);
        const suggest = 
            (
                <Container className='suggestNews-container'>
                    <Row>
                        <Col><b>Tin M???i</b></Col>
                        <Col>?????c Nhi???u</Col>
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
            return (
                <Container>
                    <Row key={i} className='post-content'>
                        <Col xs={2}>
                            {e.author}  
                        </Col>

                        <Col xs={7}>
                            {e.content} 
                        </Col>

                        <Col xs={2} onClick={e=>this.showCmt(e,i)} >
                            <Badge> {e.comments.length} </Badge>
                            <span class="material-icons">comment</span>
                        </Col>

                        <Col xs={1} style={{display: (user==e.author)?'block':'none'}}>
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
                    
                    <Media>
                        <Collapse isOpen={collapse}>
                            <CMT user={user} EditCmtBtn={this.EditCmtBtn} DeleteCmtBtn={this.DeleteCmtBtn} Cmt={cmt} />
                            <AddCmt editCmtText={editCmtText}  AddCmtBtn={this.AddCmtBtn} />
                        </Collapse>    
                    </Media>              
                </Container>
            )
        })
            
 
        return (
            <Fragment>
                <Container>

                    <SlideShow />

                    <Row style={{ display: (post.length <= 0)? 'none' : 'flex' }} >
                        <Col xs={5}></Col>
                    
                        <Col className='Addpostbtn'>
                            <AddPost PostStatus={this.PostStatus} postEdit={this.postEdit} />
                        </Col>  

                        <Col xs={5}></Col>
                    </Row>

                    <Row className='PostContainer'>
                        <Col xs={7}>{Post}</Col>
                        {/* <PostItem user={user} cmt={cmt} post={post} showCmt={this.showCmt} /> */}
                        <Col xs={5}>{suggest}</Col>
                    </Row>
                </Container>
                {editPostForm}
            </Fragment>
        );
    }
}

export default ListPost;