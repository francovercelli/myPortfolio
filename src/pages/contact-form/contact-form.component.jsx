import React from 'react';
import './component-form.style.css'
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Contact = () => {
    return (
        <div>
        <div id="contact">
            <h1 className="pt-3 text-center font-details-b pb-3">CONTACT ME</h1>
            <Jumbotron className="contact-jumbotron">
                <Row>
                <Col className="d-flex justify-content-center flex-wrap">
                    <div className="m-2">
                    <a href="mailto:vercellifranco@gmail.com" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline-danger" title="vercellifranco@gmail.com">
                        <i className="fas fa-envelope-square"></i> Email Me
                        </Button>
                    </a>
                    </div>
                    <div className="m-2">
                    <a href="https://www.linkedin.com/in/francovercelli/" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline-primary" title="Visit my LinkenIn">
                        <i className="fab fa-linkedin"></i> LinkedIn
                        </Button>
                    </a>
                    </div>
                    
                    <div className="m-2">
                    <a href="https://github.com/francovercelli" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline-dark" title="My other projects">
                        <i className="fab fa-github-square"></i> GitHub
                        </Button>
                    </a>
                    </div>
                     <div className="m-2">
                    <a href="https://www.facebook.com/jfev.franco" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline-primary" title="Say hello on FB">
                        <i className="fab fa-facebook-square"></i> FaceBook
                        </Button>
                    </a>
                    </div>
                </Col>
                </Row>
            </Jumbotron>
        </div>
        </div> 
    );
};

export default Contact;