import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addProjectAPI } from '../services/allAPI';

function Addproject() {
  const [token, setToken] = useState("");
  const [preview, setPreview] = useState('');
  const [projectDetails, setProjectDetails] = useState({
    title: "",
    language: "",
    github: "",
    website: "",
    overview: "",
    projectImage: ""
  })
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleAdd = async(e) => {
    e.preventDefault();
    const {title, language, github, website, overview, projectImage} = projectDetails;
    if(!title || !language || !github || !website || !overview || !projectImage){
      toast.warning("Please fill the form completely")
    }
    else{
      // for uploading files we have to send data as form data
      // content type is multipart/form-data
      const reqBody = new FormData();
      reqBody.append('title', title)
      reqBody.append('language', language)
      reqBody.append('github', github)
      reqBody.append('website', website)
      reqBody.append('overview', overview)
      reqBody.append('projectImage', projectImage)

      const reqHeader = {
        "Content-Type" : "multipart/form-data",
        "Authorization" : `Bearer ${token}`
      }
      const result = await addProjectAPI (reqBody, reqHeader)
    }
    console.log(projectDetails);
  }

  useEffect(() => {
    if (projectDetails.projectImage) {
      setPreview(URL.createObjectURL(projectDetails.projectImage));
    }
  }, [projectDetails.projectImage])

  useEffect(()=>{
    setToken(sessionStorage.getItem("token"))
  },[])
  const handleCloseclear = () => {
    setProjectDetails({
      title: "",
      language: "",
      github: "",
      website: "",
      overview: "",
      projectImage: ""
    })
    setPreview('')
  };

  return (
    <>
      <Button variant='success' onClick={handleShow}>Add Project</Button>
      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Add Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-6 d-flex justify-content-center align-items-center">
              <label htmlFor="projectUploadImage">
                <input type="file" style={{ display: "none" }} id='projectUploadImage'
                  onChange={(e) => setProjectDetails({ ...projectDetails, projectImage: e.target.files[0] })} />
                <img
                  src={preview ? preview : "https://cdn.pixabay.com/photo/2016/01/03/00/43/upload-1118929_640.png"}
                  alt="upload icon" width={"100%"} />
              </label>
            </div>
            <div className="col-lg-6 d-flex justify-content-center align-items-center flex-column">
              <div className="w-100 mt-3 mb-3">
                <input
                  value={projectDetails.title}
                  onChange={((e) => setProjectDetails({ ...projectDetails, title: e.target.value }))}
                  type="text" className='form-control' placeholder='project title' />
              </div>
              <div className="w-100 mt-3 mb-3">
                <input type="text"
                  value={projectDetails.language}
                  onChange={((e) => setProjectDetails({ ...projectDetails, language: e.target.value }))}
                  className='form-control' placeholder='languages used' />
              </div>
              <div className="w-100 mt-3 mb-3">
                <input
                  value={projectDetails.github}
                  onChange={((e) => setProjectDetails({ ...projectDetails, github: e.target.value }))}
                  type="text" className='form-control' placeholder='github url' />
              </div>
              <div className="w-100 mt-3 mb-3">
                <input
                  value={projectDetails.website}
                  onChange={((e) => setProjectDetails({ ...projectDetails, website: e.target.value }))}
                  type="text" className='form-control' placeholder='website url' />
              </div>
              <div className="w-100 mt-3 mb-3">
                <textarea
                  value={projectDetails.overview}
                  onChange={((e) => setProjectDetails({ ...projectDetails, overview: e.target.value }))}
                  className='form-control' placeholder='overview'></textarea>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseclear}>
            clear
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Add Project
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        theme="colored" />
    </>
  )
}

export default Addproject