import React from 'react'
import Card from 'react-bootstrap/Card';
import mediaplayerImage from '../assets/img3.jpeg'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Col, Row } from 'react-bootstrap';
import { BASE_URL } from '../services/baseurl';

function Projectcard({project}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Card style={{ width: '18rem' }} onClick={handleShow}>
                
                <Card.Img variant="top" src={`${BASE_URL}/uploads/${project.projectImage}`} />
                <Card.Body>
                    <Card.Title>{project.title}</Card.Title>


                </Card.Body>
            </Card>

            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Media Player</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col md={6} lg={6}>
                            <img src={`${BASE_URL}/uploads/${project?.projectImage}`} alt="" height={"250px"} width={"100%"} />
                        </Col>
                        <Col md={6} lg={6}>
                            <h4>Description</h4>
                            <p>{project.overview}</p>
                            <p><span className='fw-bolder'>Technologies:</span>{project.language}</p>
                        </Col>
                    </Row>
                    <div>
                        <a href={project.website}target='_blank' style={{color:"black",fontSize:"25px"}}>
                        <i class="fa-solid fa-link"></i>
                        </a>
                        <a href={project.github} target='_blank' style={{color:"black",fontSize:"25px"}}>
                        <i class="fa-brands fa-github"></i>
                        </a>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Projectcard