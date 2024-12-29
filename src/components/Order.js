import React, { useState, useEffect } from 'react';
import Layout from './Layout/Layout';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';

function Order() {

    const navigate = useNavigate();
    const [cartData, setCartData] = useState([]);
    const userData = localStorage.getItem('userInfo');
     const [user, setUser] = useState('undefined');


     useEffect(() => {
            getCarts();
            setUser(JSON.parse(userData));
        }, []);


        const getCarts = () => {
                const mobileNumber = JSON.parse(localStorage.getItem('userInfo'))?.mobileNumber;
                if (mobileNumber !== undefined) {
                    axios
                        .get(`http://localhost:3001/cart/getOrderData/${mobileNumber}`)
                        .then((response) => {
                            setCartData(response.data);
                        })
                        .catch((err) => {
                            console.error('Error fetching data:', err);
                            Swal.fire({
                                icon: 'error',
                                title: 'Failed to fetch card details',
                                confirmButtonText: 'OK'
                            });
                        });
                }
            }


    return (
        <Layout>

            <div className="col-11 col-sm-11 col-md-11 col-lg-7 card shadow m-3">
                <h5>Your Order Details</h5>
                
                <div className="card-body">
                    {cartData.map((cart) => (
                        <div className="card m-1" key={cart.id}>
                            <div className="card-body text-start">
                                <div className="row">
                                    <img
                                        src={cart.imageUrl}
                                        alt="Product"
                                        className="col-1"
                                    />
                                    <h6 className="card-title col-7 align-content-center">
                                        {cart.productName}
                                    </h6>
                                    <div className="col-2 fst-italic">
                                        {cart.quantity} pcs
                                    </div>
                                    <div className="col-2 text-end">
                                        <span className="badge bg-warning text-dark fs-6 align-content-center">
                                            Rs. {(cart.quantity * cart.amount).toFixed(2)}
                                        </span>

                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    ))}
                    <button type="button" className="btn btn-warning m-3" onClick={() => navigate('/')}>Home</button>
                </div>
            </div>
        </Layout>
        

    )
}

export default Order