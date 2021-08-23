import React, { Component,Fragment} from 'react';
import PostService from "../../Shared/PostService";
import { Container, Row, Col,UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem, } from 'reactstrap';
import './ListPost.scss'

class ListPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            author: 'author 99',
            content: 'Shared Components AppHeader AppHeader.js',
            post:[],
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

    onSubmit = () => {
        const data = {
            author: this.state.author,
            content: this.state.content
        }
       PostService.createPost(data).then(res => {
           console.log('thanh cong', res.data);
       })
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

    render() {
        let {post} = this.state;
        const suggest = 
            (
                <Container className>
                    <Row>
                        <Col><b>Tin Mới</b></Col>
                        <Col>Đọc Nhiều</Col>
                    </Row>

                    <Row className='suggestNews-container'>
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
                    <Row key={i} className='postContainer'>
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
                                    <DropdownItem>
                                        <span class="material-icons">edit</span>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <span class="material-icons">delete</span>
                                    </DropdownItem>
                                    <DropdownItem divider />
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            
                        </Col>
                    </Row>              
                </Container>
            )
        })

        return (
            <Fragment>
                <Container >
                    <button onClick={this.onSubmit}> Them bai viet </button>
                    <button onClick={this.showData}> Hien các bài post </button> 
                    <Row>
                        <Col xs={7}>{Post}</Col>

                        <Col xs={5}>{suggest}</Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default ListPost;