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
    return(
        <div>
            <InputGroup>
                <Input placeholder="..." type="textarea" value={data} onChange={onChangeData} />
                <InputGroupAddon addonType="append">
                    <Button color="secondary" onClick={e=>props.AddCmtBtn(e, data)}>ADD</Button>
                </InputGroupAddon>
            </InputGroup>
        </div>
    )
 }