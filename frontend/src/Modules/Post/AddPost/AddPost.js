import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';

export default function AddPost(props){
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const[post,setPost] = useState("")
    const onChangePost = (e) => {
        setPost(e.target.value);
    }
    return (
        <div>
            <Form inline onSubmit={(e) => e.preventDefault()}>
                <Input type="text" onClick={toggle} placeholder={'What do ya thinking?'}></Input>
            </Form>
            <Modal isOpen={modal} toggle={toggle} className>
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                    <Input type="textarea" placeholder={'Something you want to share'} name="post" value={post} onChange={onChangePost}  rows={5} />
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={e => props.postEdit(e, post)}>Submit</Button>
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );

}

