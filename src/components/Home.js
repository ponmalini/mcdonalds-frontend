import React from 'react'
import Layout from './Layout/Layout'
import './Home.css';


function Home() {
  return (
    <Layout>
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
        <div className='bg-black'></div>
        <div className="card-main-heading shadow p-3 mb-5 bg-body rounded">
          <h2 className="card-title">  <label className="fw-bolder fs-3rem  m-5">Our Menu</label></h2>
        </div>
        {/* <div className="p-3 mb-2 bg-light text-dark">
          <div>
            <p className="fw-bold fs-3">Newly Launched</p>
          </div> */}

        <div className="row ">
          <div className="col-2  px-5 bg-white shadow" style={{ textAlign: 'left' }}>
            <div className='row'>
              <ul class="list-inline">
                <li class="list-inline-item"><img src='https://c38blhej2h.execute-api.ap-south-1.amazonaws.com/dev/png/90/20240918043600447449.png' height={'45'} width={'45'} /></li>
                <li class="list-inline-item "><b>Newly <br />Launched</b></li>
              </ul>
            </div>
            <div className='row '>
              <ul class="list-inline">
                <li class="list-inline-item"><img src='https://c38blhej2h.execute-api.ap-south-1.amazonaws.com/dev/png/90/1709551887533338.png' height={'45'} width={'45'} /></li>
                <li class="list-inline-item "><b>Group Sharing <br /> Combos</b></li>
              </ul>
            </div>
            <div className='row'>
              <ul class="list-inline">
                <li class="list-inline-item"><img src='https://d37byfojjwz7vp.cloudfront.net/new_resize_90_1709551865208239.png' height={'45'} width={'45'} /></li>
                <li class="list-inline-item "><b>Mc Saver Combo <br />(2meals)</b></li>
              </ul>
            </div>
            <div className='row'>
              <ul class="list-inline">
                <li class="list-inline-item"><img src='https://d37byfojjwz7vp.cloudfront.net/new_resize_456_20241209143014535634.png' height={'45'} width={'45'} /></li>
                <li class="list-inline-item "><b>Burger Combos <br />(3pc meals)</b></li>
              </ul>
            </div>
            <div className='row'>
              <ul class="list-inline">
                <li class="list-inline-item"><img src='https://d37byfojjwz7vp.cloudfront.net/new_resize_90_170955171681248.png' height={'45'} width={'45'} /></li>
                <li class="list-inline-item "><b>Burgers & <br />Wrapes</b></li>
              </ul>
            </div>
            <div className='row'>
              <ul class="list-inline">
                <li class="list-inline-item"><img src='https://d37byfojjwz7vp.cloudfront.net/new_resize_90_1709551827742126.png' height={'45'} width={'45'} /></li>
                <li class="list-inline-item "><b>Fries & <br />Sides</b></li>
              </ul>
            </div>
          </div>
          <div className="col-7 ">

            <div class="container">
              <div class="row">
                <div class="col-sm">
                  <div className="card h-100 shadow">
                    <img src="https://c38blhej2h.execute-api.ap-south-1.amazonaws.com/dev/png/456/20241205182430611626.png" className="card-img-top" />
                    <div className="card-body">
                      <h5 className="card-title">Mc Crispy Chicken Burger + McChicken Burger + Fries (M)</h5>
                      <p className="card-text">Feel the crunch with McCrispy Chicken Burger+ McChicken + Fries (M)</p>
                    </div>
                  </div>
                </div>
                <div class="col-sm">
                  <div className="card h-100 shadow">
                    <img src="https://c38blhej2h.execute-api.ap-south-1.amazonaws.com/dev/png/456/20241205182430611626.png" className="card-img-top" />
                    <div className="card-body">
                      <h5 className="card-title">Mc Crispy Chicken Burger + McChicken Burger + Fries (M)</h5>
                      <p className="card-text">Feel the crunch with McCrispy Chicken Burger+ McChicken + Fries (M)</p>
                    </div>
                  </div>
                </div>
                <div class="col-sm">
                  <div className="card h-100 shadow">
                    <img src="https://c38blhej2h.execute-api.ap-south-1.amazonaws.com/dev/png/456/20241205182430611626.png" className="card-img-top" />
                    <div className="card-body">
                      <h5 className="card-title">Mc Crispy Chicken Burger + McChicken Burger + Fries (M)</h5>
                      <p className="card-text">Feel the crunch with McCrispy Chicken Burger+ McChicken + Fries (M)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ width: '25%' }}>
            Your Cart
            <div className="bg-white shadow rounded-3 m-4" style={{ height: '350px' }}>
              <img src="https://hrpl-production-mds-assets.s3.ap-south-1.amazonaws.com/icons/empty-cart.svg"style={{marginTop:'inherit'}}></img>
             <div className='fw-bolder pt-5'>Oops! Your cart is empty.You <br /> haven’t placed any order yet.</div>
            </div>
          </div>
        </div>
        <div className='mx-5'>
          <h5 className='text-start fw-bold'>McDelivery India – Order Food Online</h5>
          <br/>
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
            When McDonald’s first opened, we started with a simple menu of just burgers, fries and beverages. And after all these years, sometimes, our
            customers want just that - a good wholesome flavour-loaded burger. So, order your McDonald’s burger online and eat it like you mean it.
            <br />
            <br />
            Unlike many other food delivery websites, we at McDonalds’s have made ordering food online an experience that can be best described as -
            easy-peasy. Here’s how you go about it- select the food you crave, next step is to take your pick from the choice of add-ons, drink, side and dessert. Then add to cart, choose mode of payment and voila, you have placed your fast-food order online and your McDonald’s food is on its way! You can also track your order as it comes to you.
            <br />
            <br />
            Online food delivery is a whole new way to love McDonald’s. So, what are you waiting for? It’s McDonald’s o’clock! Order your meal now and allow us to do what we love doing - delivering happiness.</p>
        </div>
      </div>
    </Layout>

  )
}

export default Home