import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Layout from './Layout/Layout'
import './Home.css';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


function Home() {
  const options = [
    "Newly Launched",
    "Group Sharing Combos",
    "McSaver Combos(2pc meals)",
    "Burger combos(3pc meals)",
    "Burger & Wraps",
    "Fries & Sides",
    "Coffee & Beverages (Hot and Cold)",
    "Desserts"
  ];
  const [productData, setProductData] = useState([]);
  const [category, setCategory] = useState(options[0]);
  const [cartData, setCartData] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const navigate = useNavigate();

  // Fetch all cards on component mount
  useEffect(() => {
    fetchProducts();
    setCategory(options[0]);
    getCarts();
  }, []);
  const Addtocart = (productName, amount,imageUrl) => {
    const mobileNumber = JSON.parse(localStorage.getItem('userInfo'))?.mobileNumber;
    if (mobileNumber == undefined) {
      Swal.fire({
        icon: 'warning',
        title: 'Please Login to add item',
        confirmButtonText: 'OK'
      })
      return;
    }
    const cart = {
      productName, amount, mobileNumber, quantity: 1,imageUrl,orderConfirmed:false
    };
    axios.post('http://localhost:3001/cart/addCart', cart)
      .then((response) => {
        Swal.fire({
          icon: 'success',
          title: 'Item added to cart',
          confirmButtonText: 'OK'
        });
        getCarts();
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
        Swal.fire({
          icon: 'error',
          title: 'Failed to add item to cart',
          confirmButtonText: 'OK'
        });
      });

  }
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
          Swal.fire({
            icon: 'error',
            title: 'Failed to fetch carts',
            confirmButtonText: 'OK'
          });
        });
    }
  };

  const deleteCart = (id) => {
    let result = window.confirm("Are you sure you want to delete this item?");
    if (result) {
      axios
        .delete(`http://localhost:3001/cart/deleteCart/${id}`)
        .then(() => {
          Swal.fire({
            icon: 'success',
            title: 'Deleted successfully',
            confirmButtonText: 'OK'
          });
          getCarts();
        })
        .catch((error) => {
          console.error('Error deleting card:', error);
          Swal.fire({
            icon: 'error',
            title: 'Failed to delete item',
            confirmButtonText: 'OK'
          });
        });
    }
  }


  const fetchProducts = () => {
    axios
      .get('http://localhost:3001/product/getItems')
      .then((response) => {
        setProductData(response.data.products || []);
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
        Swal.fire({
          icon: 'error',
          title: 'Failed to fetch products',
          confirmButtonText: 'OK'
        });
      });
  };
  return (
    <Layout>
      <div >
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://c38blhej2h.execute-api.ap-south-1.amazonaws.com/dev/png/3824/20240918083906793225.png" className="d-block  w-125" alt="offer image" />
            </div>
            <div className="carousel-item ">
              <img src="https://c38blhej2h.execute-api.ap-south-1.amazonaws.com/dev/png/3824/20240702155711422610.png" className="d-block w-125" />
            </div>

          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className='bg-black'></div>
        <div className="card-main-heading shadow p-3 mb-5 bg-body rounded">
          <h2 className="card-title">  <label className="fw-bolder fs-3rem  m-3">Our Menu</label></h2>
          <div className="col-sm-11 text-end">
                    <button type="button" className="btn btn-warning btn-lg position-relative" onClick={() => navigate('/checkout')}>
                      Cart
                      <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {cartData.length}
                      </span>
                    </button>
                  </div>
        </div>
        {/* <div className="p-3 mb-2 bg-light text-dark">
          <div>
            <p className="fw-bold fs-3">Newly Launched</p>
          </div> */}

        <div className="row mb-5">
          <div className="col-2 d-none d-md-block fs-6 px-8 bg-white shadow h-100 mt-3 " style={{ textAlign: 'left' }}>
            <div className='row pointer px-3' onClick={() => setCategory(options[0])}>
              <ul className="list-inline">
                <li className="list-inline-item"><img src='https://c38blhej2h.execute-api.ap-south-1.amazonaws.com/dev/png/90/20240918043600447449.png' height={'45'} width={'45'} /></li>
                <li className={(category == options[0] ? "fw-bold " : "") + "list-inline-item align-bottom m-1"}>Newly <br />Launched</li>
              </ul>
            </div>
            <div className='row pointer px-3' onClick={() => { setCategory(options[1]) }}>
              <ul className="list-inline">
                <li className="list-inline-item"><img src='https://c38blhej2h.execute-api.ap-south-1.amazonaws.com/dev/png/90/1709551887533338.png' height={'45'} width={'45'} /></li>
                <li className={(category == options[1] ? "fw-bold " : "") + "list-inline-item align-bottom m-1"}>Group Sharing <br /> Combos</li>
              </ul>
            </div>
            <div className='row pointer px-3' onClick={() => setCategory(options[2])}>
              <ul className="list-inline">
                <li className="list-inline-item"><img src='https://d37byfojjwz7vp.cloudfront.net/new_resize_90_1709551865208239.png' height={'45'} width={'45'} /></li>
                <li className={(category == options[2] ? "fw-bold " : "") + "list-inline-item align-bottom m-1"}>Mc Saver Combo <br />(2meals)</li>
              </ul>
            </div>
            <div className='row pointer px-3' onClick={() => setCategory(options[3])}>
              <ul className="list-inline">
                <li className="list-inline-item"><img src='https://d37byfojjwz7vp.cloudfront.net/new_resize_456_20241209143014535634.png' height={'45'} width={'45'} /></li>
                <li className={(category == options[3] ? "fw-bold " : "") + "list-inline-item align-bottom m-1"}>Burger Combos <br />(3pc meals)</li>
              </ul>
            </div>
            <div className='row pointer px-3' onClick={() => setCategory(options[4])}>
              <ul className="list-inline">
                <li className="list-inline-item"><img src='https://d37byfojjwz7vp.cloudfront.net/new_resize_90_170955171681248.png' height={'45'} width={'45'} /></li>
                <li className={(category == options[4] ? "fw-bold " : "") + "list-inline-item align-bottom m-1"}>Burgers & <br />Wrapes</li>
              </ul>
            </div>
            <div className='row pointer px-3' onClick={() => setCategory(options[5])}>
              <ul className="list-inline">
                <li className="list-inline-item"><img src='https://d37byfojjwz7vp.cloudfront.net/new_resize_90_1709551827742126.png' height={'45'} width={'45'} /></li>
                <li className={(category == options[5] ? "fw-bold " : "") + "list-inline-item align-bottom m-1"}>Fries & <br />Sides</li>
              </ul>
            </div>
            <div className='row pointer px-3' onClick={() => setCategory(options[6])}>
              <ul className="list-inline">
                <li className="list-inline-item"><img src='https://c38blhej2h.execute-api.ap-south-1.amazonaws.com/dev/png/700/CFRMMT-1820-1-1820.png' height={'45'} width={'45'} /></li>
                <li className={(category == options[6] ? "fw-bold " : "") + "list-inline-item align-bottom m-1"}>Coffee & Beverages <br /> (Hot and Cold)</li>
              </ul>
            </div>
            <div className='row pointer px-3' onClick={() => setCategory(options[7])}>
              <ul className="list-inline">
                <li className="list-inline-item"><img src='https://c38blhej2h.execute-api.ap-south-1.amazonaws.com/dev/png/700/SMFLOR-4-1-4.png' height={'45'} width={'45'} /></li>
                <li className={(category == options[7] ? "fw-bold " : "") + "list-inline-item align-bottom m-1"}>Desserts</li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-7">
            <div className="container">
              <div className="row ">
                <div className="row d-block d-md-none">
                  <div className="col-sm-12 ">
                    <select
                      className="form-select form-select-lg mb-3"
                      aria-label=".form-select-lg example"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      {options.map((option, idx) => (
                        <option key={idx}>{option}</option>
                      ))}
                    </select>
                  </div>
                </div>
                {productData.filter(e => e.category == category).map((product) => (
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6  mt-3  ">
                    <div className="card h-70 shadow" >
                      <div className='text-end mx-2'><img src={product.isVeg ? 'https://hrpl-production-mds-assets.s3.ap-south-1.amazonaws.com/icons/veg.svg' : 'https://hrpl-production-mds-assets.s3.ap-south-1.amazonaws.com/icons/nonveg.svg'} style={{ width: '1rem' }} /> </div>
                      <img src={product.imageUrl} className="card-img-top"style={{width:"288px",height:"30vh  ",margin:"auto"}} />
                      <div className="card-body">
                        <h5 className="card-title fw-bold">{product.productName}</h5>
                        <p className="card-text fs-6 text-truncate">{product.description}</p>
                      </div>
                      <p className="card-text fw-bold">Rs. {product.amount}</p>
                      <button className="btn btn-warning d-grid gap-2 col-6 mx-auto fw-bold m-2" type="Add" onClick={() => Addtocart(product.productName, product.amount,product.imageUrl)}>Add +</button>
                    </div>
                  </div>
                ))}


              </div>
            </div>
          </div>

          <div style={{ width: '25%' }} className='fw-bold d-none d-md-block'>

            <div className="bg-white shadow rounded-3 m-4" style={{ minHeight: '30%', padding: '2px' }}>
              <h4> Your Cart</h4>
              {cartData.length == 0 &&
                <div> <img src="https://hrpl-production-mds-assets.s3.ap-south-1.amazonaws.com/icons/empty-cart.svg" style={{ marginTop: 'inherit' }}></img>
                  <div className='fw-bolder pt-5'>Oops! Your cart is empty.You <br /> haven’t placed any order yet.</div></div>}

              {cartData.map((cart) => (
                <div className="card m-1">
                  <div className="card-body text-start">
                    <h6 className="card-title">{cart.productName}</h6>
                    <div className="row">
                      <div className='col-5'> {cart.quantity} X {cart.amount.toFixed(2)}</div>
                      <div className='col-5 '> <span className="badge bg-warning text-dark">Rs. {(cart.quantity * cart.amount).toFixed(2)} </span> </div>
                      <div className='col-1 mx-2'><button type="button" className="btn btn-danger btn-sm" onClick={() => deleteCart(cart._id)}>X</button></div>
                    </div>
                  </div>
                </div>
              ))}
              {cartData.length > 0 &&
                <div>
                  <div className="card m-1 ">
                    <div className="row text-start p-4">
                      <div className='col-6 fw-bold'> Total</div>
                      <div className='col-6 text-end fw-bolder fs-5'> {cartTotal}</div>
                    </div>
                  </div>
                  <button type="button" className="btn btn-lg btn-warning w-100" onClick={() => navigate('/CheckOut')}>Proceed to Buy</button>
                </div>
              }
            </div>
          </div>
        </div>
        <div className='mx-5'>
          <h5 className='text-start fw-bold'>McDelivery India – Order Food Online</h5>
          <br />
          <p className="text-start fst-italic">Waiting to sink your teeth into just about anything from the McDonald’s food menu? Well, whatever the excuse, there is just one thing to do, and that is to order food online from the McDelivery website or the McDelivery app!
            We are without a doubt one of the most popular fast-food restaurants in the country, satiating people’s hunger and cravings and bringing a smile on their faces. And we are proud to say that we have been at it since about 25 years now! Isn’t that something?
            <br />
            <br />
            When at McDonald’s, we have you covered with delicious items that are absolute value for money. Whether it is for breakfast, lunch, dinner
            or just a snack in-between your online meetings or classes, we have something for everyone, kids, and grown-ups alike. What’s not to love about that? The deliciousness that is the McDonald’s food menu has an incredibly wide variety of both vegetarian and non-vegetarian options, mouth-watering value meals and gourmet meals, burgers and wraps, choicest of desserts and beverages, all of which can match with any level of hunger pangs. So, bring it on!
            <br />
            <br />
            Dive into the McDonald's Indian Menu to tease your tastebuds and satiate that hunger! From The McSpicy Paneer burger to, Chicken Wrap from the
            McAloo Tikki Burger to the Gourmet Burger Collection, you are spoilt for choice. Looking for a hearty Indian breakfast option? Then try our perfectly seasoned McEgg Burger served with a side of buttered buns. Combine it with a cup of the McDonald’s McCafe and it’s a match made in heaven. One of the most popular items from our Indian menu is the ‘Shake Shake Fries’. The spicy piri piri seasoning combined with some good ol’ McDonald’s Fries is a definite must-have. The hot desi spices and flavours of the McDonald’s Indian Menu creates this symphony of deliciousness in your mouth leaving you craving for more. Order your meals online from the McDelivery website or app and satisfy your cravings for all things yummy.
            <br />
            <br />
            </p>
        </div>
      </div>
    </Layout>

  )
}

export default Home