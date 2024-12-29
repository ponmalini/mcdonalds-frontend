import React, { useState, useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
function Layout({ children }) {

    const userData = localStorage.getItem('userInfo');
    const [userName, setuserName] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (userData != null && userData != undefined) {
            setuserName(JSON.parse(userData).name);
        }

    }, []);

    const logOut = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userInfo');
        navigate('/Login');
    }

    const handleClick = () => {
        Swal.fire({
            icon: 'success',
            title: 'App Download Success',
            confirmButtonText: 'OK'
        }); // Replace this with your desired action
    };
    return (
        <div className='card-main-heading'>
            <header>
                <nav className="navbar navbar-expand-lg navbar-light " style={{ backgroundColor: "#f5f5f5" }}>
                    <div className="container-fluid">
                        <a className="navbar-brand mx-5" href="#" >
                            <img src="https://hrpl-production-mds-assets.s3.ap-south-1.amazonaws.com/logo/McDeliveryLogo.png" alt="" width="65" height="65" />
                        </a>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            </ul>
                            <form className="d-flex">
                                {userName && <div >  <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            {userName}
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                            <li><button className="dropdown-item" href="#" onClick={() => navigate('/Pf')}>Profile</button></li>
                                            {/* <li><a class="dropdown-item" href="#">Orders</a></li> */}
                                            <li><hr className="dropdown-divider" /></li>
                                            <li><a className="dropdown-item" href="#" onClick={() => logOut()}>LogOut</a></li>
                                        </ul>
                                    </li>
                                </ul> </div>}
                                {!userName && <button className="btn btn-primary btn-md " type="button" onClick={() => navigate('/Login')}> Login
                                </button>}

                            </form>
                        </div>
                    </div>
                </nav>

            </header>


            <main>{children}</main>


            <footer className="bg-warning text-black pt-4 ">
                <div className="container text-center">
                    <div className="row">
                        {/* QR Code Section */}
                        <div className="col-md-6 mb-3">
                            <img
                                src="https://tse2.mm.bing.net/th/id/OIP.V81YaH_nGzVG4PVxpSEkoAHaFB?rs=1&pid=ImgDetMain"
                                alt="QR Code"
                                style={{ width: '150px' }}
                            />
                            <p className="mt-2 text-white fw-bold">CLICK ON QR CODE TO <br /> ENLARGE.</p>
                        </div>

                        {/* Discover Section */}
                        <div className="col-md-6 mb-3 text-lg-start">
                            <h5 className='text-danger'>DISCOVER WITH US</h5>
                            <p className='fw-bold fs-4'>Tell us about your experience.<br />Scan this QR code to discover more with us.</p>
                            <button className="btn btn-dark fw-bold rounded-pill" onClick={handleClick}>Download the app</button>
                        </div>
                    </div>
                </div>

                {/* Footer Links */}
                <div className="bg-dark text-white mt-4 py-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 text-sm-start">
                                <p className="mb-2">
                                    <a href="#privacy-policy" className="text-white text-decoration-none me-3">Privacy Policy<span>┃</span></a>
                                    <a href="#terms" className="text-white text-decoration-none me-3">Terms & Conditions<span>┃</span></a>
                                    <a href="#faq" className="text-white text-decoration-none me-3">FAQ<span>┃</span></a>
                                    <a href="#nutrition" className="text-white text-decoration-none me-3">Nutrition Info<span>┃</span></a>
                                    <a href="#Veg Burgers" className="text-white text-decoration-none me-3">Veg Burgers<span>┃</span></a>
                                    <a href="#Non Veg Burgers" className="text-white text-decoration-none">Non-Veg Burgers<span>┃</span></a>
                                </p>
                                <br />
                                <p className="small mb-0">
                                    An Average active adult requires 2,000 Kcal energy per day, however, calorie needs may vary.<br />
                                    FSSAI Central License Number: 10014022002648
                                </p>
                            </div>
                            <div className="col-md-4 text-end m-auto ">
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="d-inline-flex align-items-center">
                                    <img src="https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-0.png" alt="Facebook" style={{ width: "35px", verticalAlign: "middle" }} />
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="d-inline-flex align-items-center" style={{ marginLeft: "10px" }}>
                                    <img src="https://logodownload.org/wp-content/uploads/2017/04/instagram-logo.png" alt="Instagram" style={{ width: "30px", verticalAlign: "middle" }} />
                                </a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="d-inline-flex align-items-center" style={{ marginLeft: "10px" }}>
                                    <img src="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1.png" alt="Twitter" style={{ width: "30px", verticalAlign: "middle" }} />
                                </a>
                            </div>
                        </div>
                        <div className="text-center mt-2 text-sm-start fw-bolder">
                            <p className="small mb-0">&copy; 2024 H.R.P.L</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Layout