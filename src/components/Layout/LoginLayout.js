import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function LoginLayout({ children }) {

    const handleClick = () => {
        alert('Button clicked!'); // Replace this with your desired action
      };
    return (
        <div className="container-fluid">
        <div className="row min-vh-100">
          <div className="col col-md-6 vh-100 left-panel d-flex align-content-center  flex-wrap ">
            <div className='row mx-auto'>
  
  
              <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                <main>{children}</main>
                </div>
              </div>
            </div>
          </div>
  
          <div className="col col-md-6 hide-md" style={{ backgroundColor: '#FFC107' }} >
            <img src='https://c38blhej2h.execute-api.ap-south-1.amazonaws.com/dev/png/1912/Untitled_3.png' width={"100%"} />
          </div>
        </div>
      </div >
    )
}

export default LoginLayout