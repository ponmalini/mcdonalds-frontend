import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = () => {
  const options = [
    "Newly Launched",
    "McSaver Combos(2pc meals)",
    "Burger combos(3pc meals)",
    "Burger & Wraps",
    "Fries & Sides",
    "Coffee & Beverages (Hot and Cold)",
    "Desserts"
  ];
  const [category, setCategory] = useState(options[0]);
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [isVeg, setIsVeg] = useState(true);
  const [amount, setAmount] = useState('');
  const [file, setFile] = useState(null);
  const [imageurl, setImageUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      alert('Please upload an image.');
      return;
    }

    if (amount <= 0) {
      alert('Amount must be a positive value.');
      return;
    }

    try {
      // Upload the image
      const formData = new FormData();
      formData.append("file", file);
      const uploadRes = await axios.post('http://localhost:3001/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      const uploadedImageUrl = uploadRes.data.imageurl;

      // Prepare the product data
      const productData = {
        productName,
        description,
        category,
        isVeg,
        amount,
        imageurl: uploadedImageUrl,
      };

      // Submit the product data
      const productRes = await axios.post('http://localhost:3001/product/add', productData);
      console.log('Response:', productRes.data);
      alert('Product registered successfully!');

      // Clear the form
      setProductName('');
      setDescription('');
      setCategory(options[0]);
      setIsVeg(true);
      setAmount('');
      setFile(null);
      setImageUrl('');
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
    <div className="container mt-5">
      <h2>Add Product</h2>
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
              type="number"
              id="amount"
              className="form-control"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
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
              type="file"
              accept="image/*"
              onChange={(e) => setFile(e.target.files[0])}
              required
            />
          </div>
        </div>
        <div className="row mb-3 mt-5">
          <div className="col-sm-10 offset-sm-2">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
