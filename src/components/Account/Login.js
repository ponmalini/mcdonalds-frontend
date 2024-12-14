import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import LoginLayout from '../Layout/LoginLayout';
import { Navigate, useNavigate } from 'react-router-dom';

function Login() {
  const input1 = useRef(null);
  const input2 = useRef(null);
  const input3 = useRef(null);
  const input4 = useRef(null);

  useEffect(() => {
  }, []);
  const navigate = useNavigate();
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');
  const [value4, setValue4] = useState('');

  const [mobileNumber, setMobileNumber] = useState('');
  const [isInValid, setIsInValid] = useState(false);
  const [haveMobileNumber, setHaveMobileNumber] = useState(false);



  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      var otp=value1+value2+value3+value4;
      const res = await axios.post('http://localhost:3001/account/Login', { mobileNumber,otp });
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('userInfo',JSON.stringify(res.data.userDetails));
      navigate('/');
    } catch (err) {
      alert(err.response.data.message);
      console.error('Login failed', err);
    }
  }
  const SendOtp = async (e) => {
    if (mobileNumber.length != 10) {
      setIsInValid(true);
      return;
    }
    if (isNaN(mobileNumber)) {
      setIsInValid(true);
      return;
    }
    try {
      const res = await axios.post('http://localhost:3001/account/sendOtp', { mobileNumber });
      // If successful, log response and alert user
      console.log('Response:', res.data);

      setHaveMobileNumber(true);
    } catch (err) {
      alert(err.response.data.message);
      console.error('Login failed', err);
    }
  }


  return (
    <LoginLayout>
      <div>
        <form className="row  " onSubmit={handleLogin} noValidate>

          <div className="col-12">
            <label className="fw-bolder fs-1">Hi there!</label>
            <p className="text-warning fw-medium mb-5">Welcome to Mcdonalds</p>
          </div>

          {!haveMobileNumber &&
            <div>
              <div className="col-12">
                <div className="form-floating mb-3">
                  <input type="text"
                    maxLength={10}
                    className="form-control"
                    id="mobileNumber"
                    placeholder='Mobile Number'
                    onChange={(e) => setMobileNumber(e.target.value)}
                    required />
                  <label htmlFor="mobileNumber">Mobile Number</label>
                  {isInValid &&
                    <div className="text-danger">
                      Please enter valid mobile number.
                    </div>
                  }
                </div>
              </div>
              <div className="row justify-content-evenly">
                <div className="col-4">
                  <button type="button" className="btn btn-warning" onClick={() => SendOtp()}>Send OTP</button>
                </div>
              </div>
              Existing customer?<button type="button" className="btn btn-link" onClick={() => navigate('/SignUp')}>Start Here</button>
            </div>

          }

          {haveMobileNumber &&
            <div className="row mb-3 ">
              <div className="col-12 mb-3">
                Please enter the OTP sent to <b> {mobileNumber}</b><button type="button" className="btn btn-sm btn-outline-danger m-1" onClick={() => { setMobileNumber(''); setHaveMobileNumber(false); setIsInValid(false); }}>Change</button>
              </div>
              <div className="col-12 d-flex justify-content-center gap-3">
                <div className="col-sm-1 ">
                  <input
                    type="text"
                    ref={input1}
                    id="productName"
                    maxLength={1}
                    className="form-control"
                    value={value1}
                    onChange={(e) => {
                      setValue1(e.target.value);
                      if (e.target.value != '') {
                        input2.current.focus();
                      }
                    }}
                    required
                  />
                </div>
                <div className="col-sm-1 ">
                  <input
                    type="text"
                    ref={input2}
                    id="productName"
                    maxLength={1}
                    className="form-control"
                    value={value2}
                    onChange={(e) => {
                      setValue2(e.target.value)
                      if (e.target.value != '') {
                        input3.current.focus();
                      }
                    }
                    }
                    required
                  />
                </div>
                <div className="col-sm-1 ">
                  <input
                    type="text"
                    ref={input3}
                    id="productName"
                    maxLength={1}
                    className="form-control"
                    value={value3}
                    onChange={(e) => {
                      setValue3(e.target.value)
                      if (e.target.value !== '') {
                        input4.current.focus();
                      }
                    }}
                    required
                  />
                </div>
                <div className="col-sm-1 ">
                  <input
                    type="text"
                    ref={input4}
                    id="productName"
                    maxLength={1}
                    className="form-control"
                    value={value4}
                    onChange={(e) => setValue4(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="col-12 mt-3 d-flex justify-content-center">
                <div className="col-4 off">
                  <button type="submit" className="btn btn-warning" >Verify</button>
                </div>
              </div>
            </div>
          }

        </form>
      </div>
    </LoginLayout>
  )
}

export default Login