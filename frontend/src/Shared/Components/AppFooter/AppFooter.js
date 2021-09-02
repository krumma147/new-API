import React, { useState } from 'react';
import {Container, Row, Col, List, ListInlineItem} from 'reactstrap'
import '../AppFooter/AppFooter.scss'
import IMG from "../../../IMG.jpg";
import follow from '../../../follow.png'

export default function AppFooter(props){
    return(
        <Container className="FooterContainer">
            <Row className="Footer-catelist-container">
                <Col>
                    <li>Tin 24h</li>
                    <li>Tin 24h</li>
                    <li>Tin 24h</li>
                    <li>Tin 24h</li>
                    <li>Tin 24h</li>
                </Col>

                <Col>
                    <li>Thoi su</li>
                    <li>Thoi su</li>
                    <li>Thoi su</li>
                    <li>Thoi su</li>
                    <li>Thoi su</li>
                </Col>

                <Col>
                    <li>Gioi tre</li>
                    <li>Gioi tre</li>
                    <li>Gioi tre</li>
                    <li>Gioi tre</li>
                    <li>Gioi tre</li>
                </Col>

                <Col>
                    <li>Game</li>
                    <li>Game</li>
                    <li>Game</li>
                    <li>Game</li>
                </Col>
                
                <Col className='hotline'>
                    <Row className='hovered'>HotLine</Row>
                    <Row>1900100Co</Row>
                    <Row className='hovered'>HotLine</Row>
                    <Row>1900100co</Row>
                    <Row><a href='#'> <img src={follow} /> </a></Row>
                </Col>

            </Row>

            <Row className="Footer-info-container" >
                <Col> 
                    <Row><img src={IMG} width={200} /></Row>
                    <Row>sth sth sth</Row>
                    <Row>sth sth sth</Row>
                </Col>

                <Col>
                    <List type="inline" className="right">
                        <ListInlineItem xs="auto"><a href='#'>Dat bao</a></ListInlineItem>
                        <ListInlineItem xs="auto"><a href='#'>Quang cao</a></ListInlineItem>
                        <ListInlineItem xs="auto"><a href='#'>RSS</a></ListInlineItem>
                        <ListInlineItem xs="auto"><a href='#'>Toa soan</a></ListInlineItem>
                        <ListInlineItem xs="auto"><a href='#'>Chinh sach</a></ListInlineItem>
                    </List>

                    <div className="right">
                        <p>Tổng biên tập:<strong>Nguyễn Quang Thông</strong></p>
                        <p>Tổng biên tập:<strong>Nguyễn Quang Thông</strong></p>
                        <p>Tổng biên tập:<strong>Nguyễn Quang Thông</strong></p>
                        <p>Tổng biên tập:<strong>Nguyễn Quang Thông</strong></p>
                        <p>Tổng biên tập:<strong>Nguyễn Quang Thông</strong></p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}