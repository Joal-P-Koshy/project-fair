import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Header({dashboard}) {

  const isDashboard = dashboard ? true : false;

  return (
    <>
      <Navbar className="bg-success p-3">
        <Container>
          <Link to={'/'} style={{ textDecoration: "none" }}>
            <Navbar.Brand className='text-light'>
              <i class="fa-brands fa-stack-overflow"></i>
              Project Fair
            </Navbar.Brand>
          </Link>
              {
                isDashboard &&
                <button className="btn btn-warning rounded">Logout</button>
              }
        </Container>
      </Navbar>
    </>
  )
}

export default Header