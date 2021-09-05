import React, { useState } from 'react';
import {
  InputGroup,
  InputGroupAddon,
  Input,
  Button,
 } from 'reactstrap';

 export default function AddCmt(props) {
    const [data,setData] = useState('');
    const onChangeData = (e) =>{
        setData(e.target.value);
    }
    const changeCmt = () =>{
        setData(props.editCmtText);
    }

    return(
        <div>
            <InputGroup>
                <Input placeholder="..." type="textarea" defaultValue={props.editCmtText} value={data} onChange={onChangeData} onClick={changeCmt} />
                <InputGroupAddon addonType="append">
                    <Button color="secondary" onClick={e=>props.AddCmtBtn(e, data)}>ADD</Button>
                </InputGroupAddon>
            </InputGroup>
        </div>
    )
 }