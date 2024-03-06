import React from "react"
import { Link } from "react-router-dom";
function Read() {
    let arr = JSON.parse(localStorage.getItem('create')) || [];
    const handledelete=(index)=>{
        arr.splice(index,1);
        localStorage.setItem('create',JSON.stringify(arr));
        window.location.reload();
    } 

    const Add=(index)=>{
        localStorage.setItem('in',JSON.stringify(index));
    }

  return (
    <div>
        {
            arr.length == 0 ? (    <div className="d-flex vh-100 bg-secondary justify-content-center align-items-center">
            <div className="w-75 bg-white justify-content-center p-2 align-items-center">
               <Link className="btn btn-success m-3" to='/create'>Add</Link>
               <h1 className="d-flex  justify-content-center align-items-center">Details</h1>
                  <table className="table mt-3">     
                      <thead>
                          <tr>
                          <th>Sno</th>
                          <th>Name</th>
                          <th>Age</th>
                          <th>Mobile.no</th>
                          <th>EmailId</th>
                          </tr>
                      </thead>
                      <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>
                            <h3 className="d-flex justify-content-center align-items-center">No Recard was Found</h3>
                            </td>
                            <td></td>
                            <td></td>
                        </tr>
                      </tbody>
                  </table>
            </div>
          </div>):(    <div className="d-flex vh-100 bg-secondary justify-content-center align-items-center">
            <div className="w-75 bg-white justify-content-center p-2 align-items-center">
               <Link className="btn btn-success m-3" to='/create'>Add</Link>
                  <table className="table">
                     
                      <thead>
                          <tr>
                          <th>S.no</th>
                          <th>Name</th>
                          <th>Age</th>
                          <th>Mobile.no</th>
                          <th>EmailId</th>
                          <th>Actions</th>
                          </tr>
                      </thead>
                      <tbody>
                          {
                              arr.map((x,index)=>{
                                  return <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{x.name}</td>
                                        <td>{x.age}</td>
                                        <td>{x.mobile}</td>
                                        <td>{x.email}</td>  
                                        <td>
                                            <Link to={`/update/${index}`} onClick={()=>Add(index)} className="btn btn-warning me-2">Update</Link>
                                          <button className="btn btn-danger" onClick={()=>handledelete(index)}>Delete</button>
                                        </td>
                                  </tr>
                              })
                          }
                      </tbody>
                  </table>
            </div>
          </div>)
        }
    </div>
  )
};

export default Read;
