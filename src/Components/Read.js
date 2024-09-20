import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEdit, faTrash, faAdd } from '@fortawesome/free-solid-svg-icons'

library.add(faEdit, faTrash, faAdd)

const Read = () => {
  const [data, setData] = useState([]);
  const header = { "Access-Control-Allow-Origin": "*" };

  const getData = () => {
    axios
      .get(
        "https://66ece591380821644cda9ad8.mockapi.io/api/v1/crud-react",
        header
      )
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(
        `https://66ece591380821644cda9ad8.mockapi.io/api/v1/crud-react/${id}`,
        header
      )
      .then(function (response) {
        getData();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleEdit = (id, name, email, dob) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("dob", dob);
  };

  return (
    <div className="container py-4">
      <div className="row">
        <div className="col">
          <div className="card border-0">
            <div className="card-header">
              <div className="d-flex justify-content-between m-2">
                <h3>User Information</h3>
                <Link to="/">
                  <button type="button" className="btn btn-success">
                    <FontAwesomeIcon icon="add" /> Create
                  </button>
                </Link>
              </div>
            </div>
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Date of Birth</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                  </tr>
                </thead>
                {data.map((item) => {
                  return (
                    <tbody>
                      <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.dob}</td>
                        <td>
                          <Link to="/update">
                              <FontAwesomeIcon 
                                icon="edit" 
                                onClick={() =>
                                  handleEdit(
                                    item.id,
                                    item.name,
                                    item.email,
                                    item.dob
                                  )
                                }
                              />
                          </Link>
                        </td>
                        <td>
                            <FontAwesomeIcon 
                              icon="trash"
                              onClick={() => handleDelete(item.id)}
                            />
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Read;
