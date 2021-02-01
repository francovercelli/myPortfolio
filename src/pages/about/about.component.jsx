import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import context from 'react-bootstrap/esm/AccordionContext';
import Image from 'react-bootstrap/Image'
import Profile from '../../assets/img/profile/profile.jpg'
import './about.style.css'
import Button from "react-bootstrap/Button";
//rsc

const About = () => {
    return (
        <div id='about'>
            <div className = "about"> 
                <h1 className="py-3 text-center font-details pb-3">ABOUT ME</h1>
                <Container>
                    <Row className=" pt-3 pb-5 aling-items-center">                    
                        {  /*profile pick */ } 
                        <Col xs={12} md={6}>
                            <Row className="justify-content-center mb-2 mr-2">
                                <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid />
                            </Row>
                        </Col>
                        { /*About me info */}
                        <Col xs={12} md={6}>
                        <Row className=" align-items-start p-2 my-details rounded">
                                {/*description*/}
                                Hi there! I am <strong>&nbsp;Franco Vercelli</strong>
                                <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias tempore nemo, modi temporibus voluptatibus quam sunt, voluptate molestiae aspernatur dignissimos dolor perferendis, optio facilis recusandae! Quidem architecto repellat animi esse?
                                <br />
                                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus cum quos voluptatum obcaecati dignissimos minus totam aut impedit vit
                                <br />
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus cum quos voluptatum obcaecati dignissimos minus totam aut impedit vit
                                <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus cum quos voluptatum obcaecati dignissimos minus totam aut impedit vit
                                <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus cum quos voluptatum obcaecati dignissimos minus totam aut impedit vit.
                                <br /> <br />
                            </Row>
                            <Row>
                                {/*links buttons */}
                                <Col className="d-flex justify-content-center flex-wrap">
                                <div>
                                    <a href="https://drive.google.com/file/d/1stq-l68et8aTBU3sLAY4iur8mUZ8X2Du/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                    <Button className="m-2" variant="outline-success">
                                        CV English
                                    </Button>
                                    </a>
                                </div>
                                <div>
                                    <a href="https://drive.google.com/file/d/16udXKk3pLH1H_c4ifS0LRnsQT7JBZU_r/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                    <Button className="m-2" variant="outline-success">
                                        CV Español
                                    </Button>
                                    </a>
                                </div>
                                </Col>
                            </Row>
                        
                        </Col>

                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default About;