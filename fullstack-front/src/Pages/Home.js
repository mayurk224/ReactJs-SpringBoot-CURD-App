import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Home() {
  const [users, setUsers] = useState([]);
  const {id} = useParams();
  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = axios.get("http://localhost:8080/users");
    setUsers((await result).data);
  };
  const deleteuser = async (id)=>{
    await axios.delete(`http://localhost:8080/user/${id}`)
    loadUsers();
  }
  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">Sr.No.</th>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <th scope="row" key={index}>{index+1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <Link to={`/viewuser/${user.id}`} className="btn btn-primary mx-2">View</Link>
                  <Link to={`/edituser/${user.id}`} className="btn btn-outline-primary mx-2">Edit</Link>
                  <button onClick={()=>deleteuser(user.id)} className="btn btn-danger mx-2">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
