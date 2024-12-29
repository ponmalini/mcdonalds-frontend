import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Layout from '../Layout/Layout'
import axios from 'axios';
import AddProduct from './AddProduct';
import Swal from 'sweetalert2';

function Product() {
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
  const navigate = useNavigate();
  const [productData, setProductData] = useState([]);

  const userData = localStorage.getItem('userInfo');
  const [user, setUser] = useState('undefined');



  // Fetch all cards on component mount
  useEffect(() => {
    if (userData == null || userData == undefined) {
      navigate('/login');
      return;
    }
    setUser(JSON.parse(userData));
    fetchProducts();
  }, []);


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
          title: 'Failed to Fetch cards',
          confirmButtonText: 'OK'
        });
      });
  };

  const deleteProduct = (id) => {
    let result = window.confirm("Are you sure you want to delete this item?");
    if (result) {
      axios
        .delete(`http://localhost:3001/product/deleteItem/${id}`)
        .then(() => {
          Swal.fire({
            icon: 'success',
            title: 'Deleted Successfully',
            confirmButtonText: 'OK'
          });
          fetchProducts();
        })
        .catch((error) => {
          console.error('Error deleting card:', error);
          Swal.fire({
            icon: 'error',
            title: 'Failed to delete card;',
            confirmButtonText: 'OK'
          });
        });
    }
  }

  return (
    <Layout>
      <div className="container mt-5">
        <h2>Product List</h2>
        <table className="table table-striped table-hover table-bordered fs-6">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Category</th>
              <th scope="col">Description</th>
              <th scope="col">Veg/Non Veg</th>
              <th scope="col">Amount</th>
              <th scope="col" style={{ width: '12rem' }}><button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" >
                Add Product
              </button></th>
            </tr>
          </thead>
          <tbody>
            {productData.map((product) => (
              <tr key={product._id}>
                <th scope="row">{product.productName}</th>
                <td>{product.category}</td>
                <td>{product.description}</td>
                <td>{product.isVeg ? 'Veg' : 'Non Veg'}</td>
                <td>{product.amount}</td>
                <td><button type="button" className="btn btn-warning  btn-sm m-2" onClick={() => navigate(`/editProduct/${product._id}`)}>Update</button>
                  <button type="button" className="btn btn-danger  btn-sm" onClick={() => deleteProduct(product._id)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>


        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Add Product</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <AddProduct ></AddProduct>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Product