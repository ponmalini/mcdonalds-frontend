import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout/Layout'
function CheckOut() {

    const navigate = useNavigate();
    const [cartTotal, setCartTotal] = useState(0);
    const [cartData, setCartData] = useState([]);
    useEffect(() => {
        getCarts();
    }, []);


    const calculateSum = (arr) => {
        return arr.reduce((total, current) => {
            return total + current;
        }, 0);
    }
    const getCarts = () => {
        const mobileNumber = JSON.parse(localStorage.getItem('userInfo'))?.mobileNumber;
        if (mobileNumber != undefined) {
            axios
                .get(`http://localhost:3001/cart/getCart/${mobileNumber}`)
                .then((response) => {
                    setCartData(response.data);
                    var sum = calculateSum(response.data.map(x => x.amount));
                    setCartTotal(sum.toFixed(2));
                })
                .catch((err) => {
                    console.error('Error fetching data:', err);
                    alert('Failed to fetch cards');
                });
        }
    };

    const deleteCart = () => {
        const mobileNumber = JSON.parse(localStorage.getItem('userInfo'))?.mobileNumber;
        if (mobileNumber != undefined) {

            axios
                .delete(`http://localhost:3001/cart/deleteCartByMobileNumber/${mobileNumber}`)
                .then(() => {
                    navigate('/');
                })
                .catch((error) => {
                    console.error('Error deleting card:', error);
                });
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        var options = {
            key: "rzp_test_LIDj1PHV2oXbNP",
            key_secret: "Kd2ddjABZQgDBhZkIZnigoNV",
            amount: cartTotal * 100,
            currency: "INR",
            name: "McDONALDS App",
            description: "for testing purpose",
            handler: function (response) {
                deleteCart()
            },
            prefill: {
                name: "Ponmalini",
                email: "ponmaliniprasanna@gmail.com",
            },
            notes: {
                address: "Razorpay Corporate office"
            },
            theme: {
                color: "#ffc107"
            }
        };
        var pay = new window.Razorpay(options);
        pay.open();
    }

    return (
        <Layout>
            <div className='row'>
                <div className='col-12 bg-white text-start  m-5' >
                    <h4 className='fw-bold'>Cart Details</h4>
                    <p>Selected Items</p>
                    <div className="row ">
                        <div className="col-11 col-sm-11 col-md-11 col-lg-7 card shadow m-3">
                            <div className='row text-end'>
                                <div className='col-12 '> <button className='my-3 mx-3 btn btn-outline-danger'>Remove All</button></div>
                            </div>
                           
                            <div className="card-body">
                                {cartData.map((cart) => (
                                    <div className="card m-1">
                                        <div className="card-body text-start">
                                        <div className="row">
                                        <img src={cart.imageUrl } className='col-1' />
                                            <h6 className="card-title col-7">{cart.productName}</h6>
                                            
                                                <div className='col-2'> {cart.quantity}pcs</div>
                                                <div className='col-2 text-end '> <span className="badge bg-warning text-dark fs-6">Rs. {(cart.quantity * cart.amount).toFixed(2)} </span> </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                 <div className='row text-center'>
                                <div className='col-12 '> <button className='my-3 mx-3 btn btn-secondary' onClick={()=>navigate('/')}>Add More</button></div>
                            </div>
                            </div>
                        </div>
                        <div className="col-11 col-sm-11 col-md-11 col-lg-3 card m-3 bg-warning-subtle ">
                            <div className="card-body text-center">
                              
                            </div>
                            <div className="card-body text-center">
                            <h3 className="card-title fw-bolder">Total Amount</h3>
                            <h1 className="card-title fw-bolder">{cartTotal}</h1>
                                <button type="button" className="btn btn-warning btn-lg w-75" onClick={handleSubmit}>Pay</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Layout>
    )
}

export default CheckOut