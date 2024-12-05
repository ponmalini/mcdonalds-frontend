import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Register from './components/Register'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductForm from './components/ProductForm';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<Register/>} />
          <Route path="/product" element={<ProductForm/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
