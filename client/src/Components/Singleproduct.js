import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useQuery } from 'react-query';


const fetchProduct = (id) => {
  return axios.get(`http://localhost:5000/products/${id}`);
};

const Singleproduct = () => {
  const { id } = useParams(); 

  // Use React Query to fetch the product data
  const { data: product, isLoading, isError, error } = useQuery(
    ['product', id], 
    () => fetchProduct(id), 
    {
    //   enabled: !!id, 
    }
  );

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1 className="text-center">Product Details</h1>
          <div className="card">
            <div className="card-body text-center">
              <h2>{product?.data.name}</h2>
              <p>{product?.data.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singleproduct;
