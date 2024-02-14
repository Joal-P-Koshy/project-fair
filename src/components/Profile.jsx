import React from 'react'
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';

function Profile() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div className="card shadow p-5">
                <div className="d-flex justify-content-between">
                    <h2>Profile</h2>
                    <button className="btn btn-outline-info" 
                    onClick={() => setOpen(!open)}><i class="fa-solid fa-angle-down"></i></button>
                </div>

                <Collapse in={open}>
                    <div className="">
                        <label htmlFor="profile">
                            <input type="file" id='profile' style={{ display: 'none' }} />
                            <i class="fa-solid fa-user" style={{ fontSize: '50px', cursor: 'pointer', borderRadius:'50%' }}></i>
                        </label>

                        <div className="d-flex flex-column">
                            <input type="text" placeholder='Github Link' className='form-control mt-3' />
                            <input type="text" placeholder='Linkedin Link' className='form-control mt-3' />
                            <button className="btn btn-warning mt-3">Update</button>
                        </div>

                    </div>
                </Collapse>
            </div>
        </>
    )
}

export default Profile