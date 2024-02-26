import React, { useState } from "react"

function Create() {
    const [name,setName] = useState('');
    const [age,setAge] = useState('');
    const [mobile,setMobile] = useState('');
    const [email,setEmail] = useState('');

    const Store=(e)=>{
        e.preventDefault();
        let arr1= JSON.parse(localStorage.getItem('create')) || [];

        let arr2={
            name:name,age:age,mobile:mobile,email:email
        }
        arr1.push(arr2);
        localStorage.setItem("create",JSON.stringify(arr1))
        window.location.href='/';
    }

  return (
    <div className="d-flex vh-100 bg-secondary justify-content-center align-items-center">
      <div className="w-50 justify-content-center align-items-center p-3 bg-white">
           <h1 className="d-flex  justify-content-center align-items-center">Create</h1>
            <form onSubmit={Store}>
                <div className="ms-2 mt-2">
                    <label className="">Name</label>
                    <input type="text" className="form-control mt-2" placeholder="Enter Name..."
                    onChange={(e)=>setName(e.target.value)} required value={name}></input>
                </div>
                <div className="ms-2 mt-2">
                    <label className="">Age</label>
                    <input type="text" className="form-control mt-2" placeholder="Enter Age..."
                    onChange={(e)=>setAge(e.target.value)} required value={age}></input>
                </div>
                <div className="ms-2 mt-2">
                    <label className="">Mobile.No</label>
                    <input type="text" className="form-control mt-2" placeholder="Enter Mobile no..."
                    onChange={(e)=>setMobile(e.target.value)} required value={mobile}></input>
                </div>
                <div className="ms-2 mt-2">
                    <label className="">EmailId</label>
                    <input type="email" className="form-control mt-2" placeholder="Enter Emailid..."
                    onChange={(e)=>setEmail(e.target.value)} required value={email}></input>
                </div>
                <button className="btn btn-success mt-4 ms-2">Add</button>
            </form>
      </div>
    </div>
  )
};

export default Create;
