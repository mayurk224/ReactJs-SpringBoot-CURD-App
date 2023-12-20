import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewUser() {
    const [user,setUser] = useState({
        name:"",
        email: "",
        username:""
    })
    const{id} = useParams();
    useEffect(()=>{
        loadUser();
    },[]);
    const loadUser = async ()=>{
        const result = await axios.get(`http://localhost:8080/user/${id}`)
        setUser(result.data);
    }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 boarder rounded p-4 mt-2 shadow">
          <h2>User Details</h2>
          <hr />
          <div className="card">
            <div className="card-header">Details of user id :
                <ul className="list-group list-group-flush">
                    <li className="list-group-items">
                        <b>Name:</b>
                        {user.name}
                    </li>
                    <li className="list-group-items">
                        <b>UserName:</b>
                        {user.username}
                    </li>
                    <li className="list-group-items">
                        <b>Email:</b>
                    {user.email}
                    </li>
                </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
