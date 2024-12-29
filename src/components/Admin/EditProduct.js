import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Layout from '../Layout/Layout';
import Swal from 'sweetalert2';

const EditProduct = () => {
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
  const [_id, setId] = useState('');
  const [category, setCategory] = useState(options[0]);
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [isVeg, setIsVeg] = useState(true);
  const [amount, setAmount] = useState('');
  const [imageurl, setImageUrl] = useState('');

  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:3001/product/getItem/${id}`)
        .then(Response => {
          const product = Response.data;
          setId(product._id)
          setCategory(product.category)
          setProductName(product.productName)
          setDescription(product.description)
          setIsVeg(product.isVeg)
          setAmount(product.amount)
          setImageUrl(product.imageUrl)
        })
        .catch(error => {
          console.error('Error fetching user data:', error.Response ? error.Response.data : error.message)
        })

    } else {
      console.error("id is not available")
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isNaN(amount) || amount <= 0) {
      alert('Amount must be a positive value.');
      return;
    }

    try {

      // Prepare the product data
      const productData = {
        productName,
        description,
        category,
        isVeg,
        amount,
        imageUrl: imageurl,
        _id: _id
      };

      // Submit the product data
      const productRes = await axios.put('http://localhost:3001/product/updateItem', productData);
      console.log('Response:', productRes.data);
      Swal.fire({
        icon: 'success',
        title: 'Product register successfully',
        confirmButtonText: 'OK'
      });
      navigate('/Product')
    } catch (err) {
      console.error('Error:', err);
      const errorMessage =
        err.response && err.response.data && err.response.data.message
          ? err.response.data.message
          : 'An unexpected error occurred.';
      alert(`Submit failed: ${errorMessage}`);
    }
  };

  return (
    <Layout>
      <div>
        <div className="container mt-5">
          <h2>Edit Product</h2>
          <form onSubmit={handleSubmit}>
            <div className="row mb-3 mt-5">
              <label htmlFor="productName" className="col-sm-2 col-form-label">
                Product Name
              </label>
              <div className="col-sm-8">
                <input
                  type="text"
                  id="productName"
                  className="form-control"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="row mb-3 mt-5">
              <label htmlFor="category" className="col-sm-2 col-form-label">
                Category
              </label>
              <div className="col-sm-8">
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
            <div className="row mb-3 mt-5">
              <label htmlFor="description" className="col-sm-2 col-form-label">
                Description
              </label>
              <div className="col-sm-8">
                <textarea
                  id="description"
                  className="form-control"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="row mb-3 mt-5">
              <label className="col-sm-2 col-form-label">Is Vegetarian</label>
              <div className="col-sm-8">
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={isVeg}
                    onChange={() => setIsVeg(!isVeg)}
                  />
                </div>
              </div>
            </div>
            <div className="row mb-3 mt-5">
              <label htmlFor="amount" className="col-sm-2 col-form-label">
                Amount
              </label>
              <div className="col-sm-8">
                <input
                  type="text"
                  id="amount"
                  className="form-control"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  maxLength={5}
                  required
                />
              </div>
            </div>
            <div className="row mb-3 mt-5">
              <label htmlFor="Image" className="col-sm-2 col-form-label">
                Image
              </label>
              <div className="col-sm-8">
                <input
                  type="text"
                  id="imageUrl"
                  className="form-control"
                  value={imageurl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="row mb-3 mt-5">
              <div className="col-sm-10 offset-sm-2">
                <button type="submit" className="btn btn-warning">
                  Update
                </button>
                <button type="button" className="btn btn-secondary m-4" onClick={() => navigate('/Product')}>
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default EditProduct;
