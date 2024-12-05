import React, { useState } from 'react';
import Login from './Login'
import Register from './Register'
import Product from './ProductForm'
import './LoginPage.css'
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [landingPage, setLandingPage] = useState('Login');


  return (
    <div class="container-fluid">
      <div class="row min-vh-100">
        <div className="col col-md-6 vh-100 left-panel d-flex align-content-center  flex-wrap ">
          <div className='row mx-auto'>


            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class={"carousel-item " + (landingPage == "Login" ? 'active' : '')}>
                  <Login />

                  New customer?<button type="button" class="btn btn-link" onClick={() => setLandingPage('Register')}>Start Here</button>

                </div>
                <div class={"carousel-item " + (landingPage == "Register" ? 'active' : '')}>
                  <Register />

                  Existing customer?<button type="button" class="btn btn-link" onClick={() => setLandingPage('Login')}>Start Here</button>

                </div>
                <div class={"carousel-item " + (landingPage == "SendOtp" ? 'active' : '')}>
                  <Product />
                </div>
              </div>
            </div>


            <button type='button' onClick={() => setLandingPage('SendOtp')}  >Three</button>
          </div>
        </div>

        <div class="col col-md-6 hide-md" style={{ backgroundColor: '#FFC107' }} onClick={() => setLandingPage('Register')}>
          <img src='https://c38blhej2h.execute-api.ap-south-1.amazonaws.com/dev/png/1912/Untitled_3.png' width={"100%"} />
        </div>
      </div>
    </div >
  )
}

export default LoginPage