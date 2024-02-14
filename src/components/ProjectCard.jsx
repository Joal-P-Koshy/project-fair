import React from 'react'
import Card from 'react-bootstrap/Card';
import mediaplayerimg from '../Assets/mediaplayer.png'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Col, Row } from 'react-bootstrap';


function ProjectCard() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Card style={{ width: '18rem' }} onClick={handleShow} size='lg'>
        <Card.Img variant="top" src={mediaplayerimg} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>

        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Media Player</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={6} lg={6}>
              <img src={mediaplayerimg} width={"100%"} height={"250px "} alt="" />
            </Col>
            <Col md={6} lg={6}>
              <h4>Description</h4>
              <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad saepe repellendus quas iure totam voluptatum labore quaerat, culpa inventore, reiciendis ullam sit recusandae dolore, eaque ducimus explicabo odit impedit reprehenderit.</p>
            </Col>
          </Row>
          <div className="d-flex mt-3">
            <a href="www.google.com" target='_blank' style={{color:'black', fontSize:'25px'}}>
              <i class="fa-brands fa-github"></i></a>
            <a href="www.google.com" target='_blank' style={{color:'black', fontSize:'25px'}}>
            <i class="fa-solid fa-link"></i>
            </a>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ProjectCard