import React, { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom'
import {
    InputGroup,
    InputGroupAddon,
    Input,
    Button,
    Container,
    InputGroupText,
    Row,
    Col
   } from 'reactstrap';

//                  Update using media next time
export default function Login(props) {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const history = useHistory();

    const onChangeUserName = (e) =>{
        setUsername(e.target.value);
    }

    const onChangePassWord = (e) =>{
        setPassword(e.target.value);        
    }

    // useEffect(()=>{
    //     if(localStorage.getItem('user-info')){
    //         alert('pass');
    //     }
    // }, [])

    async function submitBtn(){
        console.log(username, password);
        const data = {username, password}
        const api = 'http://127.0.0.1:4000/api/auth/auth/sign-in';
        let result = await fetch(api,{
            method: 'POST',
            body:JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
        result = await result.json();
        if(result.includes('không')){
            alert(result);
            localStorage.clear();
        }else{
            localStorage.setItem('user-info',JSON.stringify(result));
            props.SetLogin();
            history.push('/app');
        }
        
    }

    return(
        <Container>
            <h2>Welcome</h2>
            <b>User Name</b>
            <Input placeholder="username" value={username} onChange={onChangeUserName} />
            <br />
            <b>Pasword</b>
            <Input type="password" placeholder="password" value={password} onChange={onChangePassWord} />
            <br/>
            <Button color="primary" size="lg" block onClick={submitBtn} >Login</Button>
            <br />
            <a href='#!'>Forgot your password? </a>
            <br />
            <a href='#!'>Do not have an account?</a>
        </Container>
    )
}