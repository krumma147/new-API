import React, { useState } from 'react';
import {Container, Row, Col} from 'reactstrap'
import '../AppFooter/AppFooter.scss'
import IMG from "../../../IMG.jpg";
import follow from '../../../follow.png'

export default function AppFooter(props){
    return(
        <Container className="FooterContainer">
            <Row className="Footer-catelist-container">
                <Col>
                    <Row>Tin 24h</Row>
                    <Row>Tin 24h</Row>
                    <Row>Tin 24h</Row>
                    <Row>Tin 24h</Row>
                    <Row>Tin 24h</Row>
                </Col>

                <Col>
                    <Row>Thoi su</Row>
                    <Row>Thoi su</Row>
                    <Row>Thoi su</Row>
                    <Row>Thoi su</Row>
                    <Row>Thoi su</Row>
                </Col>

                <Col>
                    <Row>Gioi tre</Row>
                    <Row>Gioi tre</Row>
                    <Row>Gioi tre</Row>
                    <Row>Gioi tre</Row>
                    <Row>Gioi tre</Row>
                </Col>

                <Col>
                    <Row>Game</Row>
                    <Row>Game</Row>
                    <Row>Game</Row>
                    <Row>Game</Row>
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

                <Col className="right">
                    <Row>
                        <Col xs="auto"><a href='#'>Dat bao</a></Col>
                        <Col xs="auto"><a href='#'>Quang cao</a></Col>
                        <Col xs="auto"><a href='#'>RSS</a></Col>
                        <Col xs="auto"><a href='#'>Toa soan</a></Col>
                        <Col xs="auto"><a href='#'>Chinh sach</a></Col>
                    </Row>

                    <Row>
                        <Col xs={4}></Col>
                        <Col xs={7}>
                        <Row >Tổng biên tập:<strong>Nguyễn Quang Thông</strong></Row>
                        <Row >Tổng biên tập:<strong>Nguyễn Quang Thông</strong></Row>
                        <Row >Tổng biên tập:<strong>Nguyễn Quang Thông</strong></Row>
                        <Row >Tổng biên tập:<strong>Nguyễn Quang Thông</strong></Row>
                        <Row >Tổng biên tập:<strong>Nguyễn Quang Thông</strong></Row>
                        </Col>
                        <Col xs={1}></Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}