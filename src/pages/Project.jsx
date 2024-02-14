import React from 'react'
import Header from '../components/Header'
import { Col, Row } from 'react-bootstrap'
import ProjectCard from '../components/ProjectCard'

function Project() {
  return (
    <>
      <Header />
      <div className="d-flex justify-content-center align-items-center flex-column mt-5">
        <h2 className="">All Projects</h2>
        <div className="mt-5 w-25 d-flex">
          <input type="text" placeholder='Search project using Technology' className='form-control' />
          <i class="fa-solid fa-magnifying-glass fa-rotate-90" style={{ marginLeft: '-45px' }}></i>
        </div>
      </div>
      <Row className='mt-5 mb-5 ms-5'>
        <Col sm={12} lg={6} md={6}>
          <ProjectCard />
        </Col>
      </Row>
    </>
  )
}

export default Project