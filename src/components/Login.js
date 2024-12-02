import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Login.css'

const Login = () => {

  const [mobileNumber, setMobileNumber] = useState('');
  const [isInValid, setIsInValid] = useState(false);
  //const navigate = usenavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (mobileNumber.length != 10) {
      setIsInValid(true);
    }
    // try{
    //   console.log({mobileNumber});
    //   const { data } = await Login({mobileNumber});
    //   console.log(data);
    //   localStorage.setItem('token',data.token);

    // }
  }

  return (
    <div class="container-fluid">
      <div class="row min-vh-100">
        <div className="col col-md-6 vh-100 left-panel d-flex align-content-center  flex-wrap">
          <form class="row g-1 " onSubmit={handleLogin} novalidate>
            <div class="col-12">
              <label class="fw-bolder fs-1">Hi there!</label>
              <p class="text-warning fw-medium">Welcome to Mcdonalds</p>
            </div>

            <div class="col-12">
              <div class="form-floating mb-3">
                <input type="text"
                  maxLength={10}
                  class="form-control"
                  id="mobileNumber" 
                  placeholder='Mobile Number'
                  onChange={(e) => setMobileNumber(e.target.value)}
                  required />
                <label for="mobileNumber">Mobile Number</label>
                {isInValid  &&
                  <div class="text-danger">
                    Please enter valid mobile number.
                  </div>
              }
              </div>
            </div>
            <div class="col-12">
              <button class="btn btn-primary" type="submit">Submit form</button>
            </div>
          </form>
        </div>
      
      <div class="col col-md-6 hide-md" style={{ backgroundColor: '#FFC107' }}>
       <h1 className='text-white mt-5 '>ALL IN ONE ONE FOR ALL</h1>
      <p className='fs-4 fw-bolder'>Get exclusively deals only on our app</p>
      </div>
      </div>
    </div >
  )
}

export default Login