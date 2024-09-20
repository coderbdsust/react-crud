import React,{ useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Update = () => {
    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [dob, setDOB] = useState("");

    useEffect(()=>{
        setId(localStorage.getItem("id"));
        setName(localStorage.getItem("name"));
        setEmail(localStorage.getItem("email"));
        setDOB(localStorage.getItem("dob"));
    },[]);

    const navigate = useNavigate();
  
    const header = { "Access-Control-Allow-Origin" : "*" };
  
    const handleSubmit = (e)=>{
      e.preventDefault();
      axios.put(`https://66ece591380821644cda9ad8.mockapi.io/api/v1/crud-react/${id}`, {
          name: name,
          email: email,
          dob: dob,
        },header)
        .then(function (response) {
          console.log(response);
          navigate("/read");
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  
    return (
      <div className='container py-4'>
          <div className="row">
              <div className="col">
                  <div className="card border-0">
                      <div className="card-header">
                          <h3>Update Information</h3>
                      </div>
                      <div className="card-body">
                          <form>
                              <div className="mb-3">
                                  <label htmlFor="name" className="form-label">Name</label>
                                  <input type="text" className="form-control" id="name" value={name} placeholder="John Doe" 
                                  onChange={(e)=>setName(e.target.value)}
                                  />
                              </div>
                              <div className="mb-3">
                                  <label htmlFor="exampleFormControlInput" className="form-label">Email</label>
                                  <input type="email" className="form-control" id="exampleFormControlInput" value={email} placeholder="name@example.com"
                                  onChange={(e)=>setEmail(e.target.value)} />
                              </div>
                              <div >
                                  <label htmlFor="dob" className="form-label">Date of Birth</label>
                                  <input type="dob" className="form-control" id="dob" value={dob} placeholder="20/12/1980"
                                   onChange={(e)=>setDOB(e.target.value)} />
                              </div>
                              <div className="row">
                                  <div className='col p-3'>
                                      <button type="button" className="btn btn-primary" onClick={handleSubmit}>Update</button>
                                      <Link to="/read">
                                        <button type="button" className="btn btn-secondary m-2" >Cancel</button>
                                      </Link>
                                  </div>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    )
}

export default Update;
