import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import Home from './components/Home';
import ProductForm from './components/Admin/ProductForm';
import Login from './components/Account/Login';
import Register from './components/Account/Register';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<Login />} />        
          <Route path="/SignUp" element={<Register />} />   
          <Route path="/" element={<Home />} />    
          <Route path="/product" element={<ProductForm/>} />    
          </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
