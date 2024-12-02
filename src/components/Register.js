import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const details = { name, email, mobileNumber };
        setLoading(true);
        setErrorMessage("");

        try {
            const res = await axios.post("http://localhost:3001/SignUp", details);

            console.log("Response:", res.data);
            alert("Registration successful");


            setName("");
            setEmail("");
            setMobileNumber("");

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
        <div className="container mt-5">
            <h2 className="mb-4">Register</h2>
            {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
            <form onSubmit={handleSubmit}>
                <div className="row mb-3">
                    <label for="inputName" className="col-sm-2 col-form-label ">
                        Name
                    </label>
                    <div className="col-sm-5">
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
                    <label For="inputEmail" className="col-sm-2 col-form-label ">
                        Email
                    </label>
                    <div className="col-sm-5">
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
                    <label For="inputMobileNumber" className="col-sm-2 col-form-label">
                        Mobile Number
                    </label>
                    <div className="col-sm-5">
                        <input
                            type="text"
                            className="form-control"
                            id="inputMobileNumber"
                            value={mobileNumber}
                            onChange={(e) => setMobileNumber(e.target.value)}

                        />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary" disabled={loading}>
                    {loading ? "Registering..." : "Register"}
                </button>
            </form>
        </div>
    );
}

export default Register;
