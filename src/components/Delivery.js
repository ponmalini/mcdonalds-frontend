import React, { useEffect, useState } from "react";
import Layout from "./Layout/Layout";
import { useNavigate } from "react-router-dom";
import './Delivery.css';

const Delivery = () => {
  const navigate = useNavigate();
  const [orderNo, setOrderNo] = useState(Math.floor(Math.random() * 10000000000));
  const userData = localStorage.getItem('userInfo');
  const [user, setUser] = useState('undefined');

  useEffect(() => {
    setUser(JSON.parse(userData));
  }, []);

  return (
    <Layout>
      <div className="card-main-heading shadow p-1 mb-2 bg-body rounded">
        <h2 className="card-title">  <label className="fw-bolder fs-3rem  m-3">Order Confirmed</label></h2>
        <h4 className="m-4">Order No : {orderNo}</h4>
        <div className="col-sm-11 text-end">
        </div>
      </div>
     
      <div className="mcd-body">
        <div className="mcd-container">
          <div className="mcd-progress-container">
            <div className="mcd-progress" id="progress"></div>

            <div className="mcd-circle active"><img src="https://nytrea.com/idm216-codepen-content/full-egg.png" className="mcd-item-img" /></div>
            <div className="mcd-circle">
              <img src="https://nytrea.com/idm216-codepen-content/cracked-egg.png" className="mcd-item-img" /></div>

            <div className="mcd-circle"><img src="https://nytrea.com/idm216-codepen-content/logo.png" className="mcd-item-img" /></div>
          </div>

        </div>
      </div>
      <div className="mydiv mb-5" >
        <div className="sucess-card shadow w-25" >
          <div >
            <i className="checkmark i">✓</i>
          </div>
          <h1 className="h1">Success</h1>
          <h5 className="fw-bold fs-3">Delivering to {user.name}</h5>
          <p className="fst-italic">{user.address}</p>
          <p className="p">We received your order request;<br /> we will delivery order items shortly!</p>
          <button type="button" className="btn btn-warning m-3" onClick={() => navigate('/Order')}>Click to OrderDetails</button>
        </div>
      </div>
    </Layout>
  );
};

export default Delivery;
