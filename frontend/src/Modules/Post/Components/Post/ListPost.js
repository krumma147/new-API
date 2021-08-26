import React, { Component,Fragment} from 'react';
import PostService from "../../Shared/PostService";
import { Container, Row, Col,UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem, } from 'reactstrap';
import './ListPost.scss'
import AddPost from '../../AddPost/AddPost';
import SlideShow from '../../SlideShow/slideshow';
import EditPost from '../../EditPost/EditPost'

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

    editBTN = (e,i) =>{
        this.setState({PostStatus:true})
        const {post} = this.state;
        const content = post[i].content;
        const id = post[i].id;
        console.log('edit', content);
        
    }

    render() {
        let {post, PostStatus} = this.state;
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

        const Post = post.map((e,i)=>{
            return(
                <Container>
                    <Row key={i} className='post-content'>
                        <Col xs={2}>
                            {e.author}  
                        </Col>

                        <Col xs={9}>
                            {e.content} 
                        </Col>

                        <Col xs={1}>
                            <UncontrolledDropdown inNavbar>
                                <DropdownToggle nav>
                                <span class="material-icons">more_vert</span>
                                </DropdownToggle>
                                <DropdownMenu right>
                                    {/* <DropdownItem onClick={e=>this.editBTN(e,i)}>
                                        <span class="material-icons">edit</span>
                                    </DropdownItem> */}

                                    <EditPost onClick={e=>this.editBTN} />
                                    
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

                    <Row className='PostContainer'>
                        <Col xs={7}>{Post}</Col>

                        <Col xs={5}>{suggest}</Col>
                    </Row>

                    <Row >
                        <Col xs={5}></Col>
                    
                        <Col className='Addpostbtn'>
                            <AddPost PostStatus={PostStatus} postEdit={this.postEdit} />
                        </Col>  

                        <Col xs={5}></Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default ListPost;