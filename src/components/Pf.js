import React, { useState, useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import Layout from './Layout/Layout'
function Pf() {
    const userData = localStorage.getItem('userInfo');
    const [user, setUser] = useState('undefined');
    const navigate = useNavigate();
    useEffect(() => {
        if (userData != null && userData != undefined) {
            setUser(JSON.parse(userData));
        }
    }, []);
    return (
        <Layout>
            <div className='m-5'>
                <div className=' bg-white text-start m-5' style={{ height: '124px', padding: '28px' }}>
                    <h4 className='fw-bold'>Personal Details</h4>
                    <p>Your Personal data</p>
                </div>
                <div className="container mt-5">
      <div className="card p-4 shadow-sm" style={{ maxWidth: '800px', margin: 'auto' }}>
      <div className="card" style={{width: "18rem;"}}>
  <img src="https://hrpl-production-mds-assets.s3.ap-south-1.amazonaws.com/images/user.svg" className="card-img-top" alt="Profile Pic" style={{height:"100px"}}/>
  <div className="card-body">
    <h5 className="card-title">{user.name}</h5>
    <p className="card-text">#{user._id}</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">{user.mobileNumber}</li>
    <li className="list-group-item">{user.email}</li>
  </ul>
  <div className="card-body">
    <a href="#" className="card-link" onClick={() => navigate('/')} > Home </a>
  </div>
</div>
      </div>
</div>
            </div>
            
        </Layout>
    );
};

export default Pf