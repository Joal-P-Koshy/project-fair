import React from 'react'
import Addproject from './Addproject'

function Myprojects() {
  return (
    <>
    <div className="card shadow p-5 ms-3 me-3 mb-5">
      <div className="d-flex">
        <h3 className="text-success ms-3">My Project</h3>
        <div className="ms-auto">
          <Addproject />
        </div>
      </div>
      <div className="">
        <div className="border d-flex align-items-center rounded p-2">
          <h5 className="">Project Title</h5>
          <div className="ms-auto d-flex">
            <button className="btn" style={{border:'none', background:'none'}}><i class="fa-solid fa-pen-to-square text-info"></i></button>
            <button className="btn" style={{border:'none', background:'none'}}><i class="fa-brands fa-github text-success"></i></button>
            <button className="btn" style={{border:'none', background:'none'}}><i class="fa-solid fa-trash text-danger"></i></button>
          </div>
        </div>
        <p className="text-danger fw-bolder fs-4 mt-3">No projects uploaded yet</p>
      </div>
    </div>
    </>
  )
}

export default Myprojects