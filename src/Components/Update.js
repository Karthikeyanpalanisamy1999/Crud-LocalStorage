import React, { useState, useEffect } from "react";

function Update() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    let arr = JSON.parse(localStorage.getItem('create')) || [];
    let i = JSON.parse(localStorage.getItem('in'))
    useEffect(() => {
        
        if (arr.length >= 0) {
            const { name, age, mobile, email } = arr[i];
            setName(name);
            setAge(age);
            setMobile(mobile);
            setEmail(email);
        }
    }, []);

    const Store = (e) => {
        e.preventDefault();
        const updatedData = { name, age, mobile, email };
        const updatedArr = arr.map(item => (item.email === email ? updatedData : item));
        localStorage.setItem('create', JSON.stringify(updatedArr));
        window.location.href = '/';
    };
    

    return (
        <div className="d-flex vh-100 bg-secondary justify-content-center align-items-center">
            <div className="w-50 justify-content-center align-items-center p-3 bg-white">
                <h1 className="d-flex  justify-content-center align-items-center">Update</h1>
                <form onSubmit={Store}>
                    <div className="ms-2 mt-2">
                        <label className="">Name</label>
                        <input type="text" className="form-control mt-2" placeholder="Enter Name..."
                            onChange={(e) => setName(e.target.value)} required value={name}></input>
                    </div>
                    <div className="ms-2 mt-2">
                        <label className="">Age</label>
                        <input type="text" className="form-control mt-2" placeholder="Enter Age..."
                            onChange={(e) => setAge(e.target.value)} required value={age}></input>
                    </div>
                    <div className="ms-2 mt-2">
                        <label className="">MobileNo</label>
                        <input type="text" className="form-control mt-2" placeholder="Enter Mobile no..."
                            onChange={(e) => setMobile(e.target.value)} required value={mobile}></input>
                    </div>
                    <div className="ms-2 mt-2">
                        <label className="">EmailId</label>
                        <input type="email" className="form-control mt-2" placeholder="Enter Emailid..."
                            onChange={(e) => setEmail(e.target.value)} required value={email}></input>
                    </div>
                    <button className="btn btn-success mt-4 ms-2">Update</button>
                </form>
            </div>
        </div>
    )
};

export default Update;
