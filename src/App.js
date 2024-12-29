import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import Home from './components/Home';
import Product from './components/Admin/Product';
import Login from './components/Account/Login';
import Register from './components/Account/Register';
import Pf from './components/Pf';
import EditProduct from './components/Admin/EditProduct';
import CheckOut from './components/CheckOut';
import Delivery from './components/Delivery';
import Order from './components/Order';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<Login />} />        
          <Route path="/SignUp" element={<Register />} />   
          <Route path="/" element={<Home />} />    
          <Route path="/product" element={<Product/>} />    
          <Route path="/Pf" element={<Pf/>} />
          <Route path="/editProduct/:id" element={<EditProduct/>}></Route>
          <Route path="/CheckOut" element={<CheckOut/>}></Route>
          <Route path="/Delivery" element={<Delivery/>}></Route>
          <Route path="/Order" element={<Order/>}></Route>
         
         
          </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
