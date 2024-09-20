import React,{ useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Create = () => {
    
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDOB] = useState("");
  const navigate = useNavigate();

  const header = { "Access-Control-Allow-Origin" : "*" };

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log("Submit");
    axios.post('https://66ece591380821644cda9ad8.mockapi.io/api/v1/crud-react', {
        name: name,
        email: email,
        dob:dob,
      },header)
      .then(function (response) {
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
                        <div className='d-flex justify-content-between m-2'>
                             <h3>Create</h3>
                             <Link to="/read">
                                <button type="button" className="btn btn-success">User Information</button>
                             </Link>
                        </div>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" className="form-control" id="name" placeholder="John Doe" 
                                onChange={(e)=>setName(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput" className="form-label">Email</label>
                                <input type="email" className="form-control" id="exampleFormControlInput" placeholder="name@example.com"
                                onChange={(e)=>setEmail(e.target.value)} />
                            </div>
                            <div >
                                <label htmlFor="dob" className="form-label">Date of Birth</label>
                                <input type="dob" className="form-control" id="dob" placeholder="27/12/1994"
                                 onChange={(e)=>setDOB(e.target.value)} />
                            </div>
                            <div className="row">
                                <div className='col p-3'>
                                    <button type="button" className="btn btn-primary" onClick={handleSubmit}>Save</button>
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

export default Create;