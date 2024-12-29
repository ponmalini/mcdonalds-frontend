import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LoginLayout from "../Layout/LoginLayout";

function Register() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [address, setAddress] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();

        const details = { name, email, mobileNumber,address };
        setLoading(true);
        setErrorMessage("");

        try {
            const res = await axios.post("http://localhost:3001/account/SignUp", details);

            console.log("Response:", res.data);
            alert("Registration successful");


            setName("");
            setEmail("");
            setMobileNumber("");
            setAddress("");

            setLoading(false);
            setErrorMessage("");
            navigate("/login");
        } catch (err) {
            console.error("Error:", err);
            setLoading(false);

            if (err.response) {
                setErrorMessage(err.response.data.message || "Server Error");
            } else if (err.request) {
                setErrorMessage("No response from server");
            } else {
                setErrorMessage("Error occurred while submitting");
            }
        }
    };

    return (
        <LoginLayout>
            <div className="container mt-5">
                <div className="col-12">
                    <label className="fw-bolder fs-1">Create Account</label>
                    <p className="text-warning fw-medium mb-5">Looks like you're new here!</p>
                </div>
                {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="row mb-3">
                        <label htmlFor="inputName" className="col-sm-4 col-form-label ">
                            Name
                        </label>
                        <div className="col-sm-8">
                            <input
                                type="text"
                                className="form-control"
                                id="inputName"
                                value={name}
                                onChange={(e) => setName(e.target.value)}

                            />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputEmail" className="col-sm-4 col-form-label ">
                            Email
                        </label>
                        <div className="col-sm-8">
                            <input
                                type="email"
                                className="form-control"
                                id="inputEmail"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}

                            />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <label htmlFor="inputMobileNumber" className="col-sm-4 col-form-label">
                            Mobile Number
                        </label>
                        <div className="col-sm-8">
                            <input
                                type="text"
                                className="form-control"
                                id="inputMobileNumber"
                                value={mobileNumber}
                                onChange={(e) => setMobileNumber(e.target.value)}

                            />
                        </div>
                        <div className=" row mb-3">
                            <label htmlFor="inputAddress" className="col-sm-4 col-form-label mt-3">
                                Address
                            </label>
                            <div className="col-sm-8 mt-3">
                                <input
                                    className="form-control"
                                    id="inputAddress"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-warning" disabled={loading}>
                        {loading ? "Registering..." : "Register"}
                    </button>


                </form>
                Existing customer?<button type="button" className="btn btn-link" onClick={() => navigate('/Login')}>Sign In</button>
            </div>
        </LoginLayout>
    );
}

export default Register;
