import React, { useState } from 'react';

function Login() {

    const [mobileNumber, setMobileNumber] = useState('');
    const [isInValid, setIsInValid] = useState(false);
   
    const handleLogin = async (e) => {
      e.preventDefault();
      if (mobileNumber.length != 10) {
        setIsInValid(true);
      }
      try{
        console.log({mobileNumber});
        const { data } = await Login({mobileNumber});
        console.log(data);
        localStorage.setItem('token',data.token);
    }catch (err) {
      console.error('Login failed',err);
    }
    }
      


  return (
    <div>
        <form class="row  " onSubmit={handleLogin} novalidate>
            <div class="col-12">
              <label class="fw-bolder fs-1">Hi there!</label>
              <p class="text-warning fw-medium mb-5">Welcome to Mcdonalds</p>
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
                {isInValid &&
                  <div class="text-danger">
                    Please enter valid mobile number.
                  </div>
                }
              </div>
            </div>
            <div class="row justify-content-evenly">
              <div class="col-4">
              <button type="button" class="btn btn-secondary">Send OTP</button>
              </div>
            </div>
          </form>
    </div>
  )
}

export default Login