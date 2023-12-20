import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function AddUser() {
    let navigate = useNavigate();
    const [user, setUser] = useState({
        name:"",
        username:"",
        email:""
    });
    const {name,username,email}=user;
    const onInputChange=(e)=>{
        setUser({...user,[e.target.name]: e.target.value});
    }
    const onSubmit=async(e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8080/user",user);
        navigate("/");
    }
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 boarder rounded p-4 mt-2 shadow'>
                <h2>Register User</h2>
                <div className='mb-3'>
                <form onSubmit={(e)=>onSubmit(e)}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" value={email} onChange={(e)=>onInputChange(e)} name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text"></div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
    <input type={"text"} onChange={(e)=>onInputChange(e)} name='name' value={name} className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">UserName</label>
    <input type={"text"} onChange={(e)=>onInputChange(e)} value={username} name='username' className="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
  <Link to="/"  className="btn btn-danger mx-2">Cancel</Link>
</form>
                </div>
            </div>
        </div>
    </div>
  )
}
