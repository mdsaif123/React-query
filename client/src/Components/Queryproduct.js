import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

// Function to fetch data from the API
const fetcheddata = () => {
  return axios.get("http://localhost:5000/products");
};
const onSuccess=(data)=>{
    console.log("data fetched successfully",data)
  }

  const onError=()=>{
    console.log("error accured while getting product")
  }

const Queryproduct = () => {
  const { isLoading, data, isError, error, isFetching,refetch } = useQuery(
    "products", // Query key
    fetcheddata, // Fetching function
    {
      // Optional configuration
      // cacheTime: 5000, // Cache data for 5 seconds
      // staleTime: 3000, // Data stays fresh for 3 seconds
      // refetchOnMount: true, // Refetch when the component mounts
      refetchOnWindowFocus: true, // Refetch when the window is focused
      refetchInterval:3000,
      refetchIntervalInBackground:true,
      enabled:false, //this is the when i want to fetch product on click button using refetch function
      onSuccess,
      onError,
      //this is data transformation
    //   select:(data)=>{
    //    const product=data.data.map((product)=>product.name)
    //    return product

    //   }
    }
  );

  // Show loading state
  if (isLoading ||isFetching) {
    return <h2>Loading...</h2>;
  }

  // Show error state
  if (isError) {
    return <h2>{error.message}</h2>;
  }

  // Log the loading and fetching states
  console.log({ isLoading, isFetching });



  return (
    <div className="container">
      <div className="row justify-content-center"> 
        <div className="col-md-6">
          <h1 className="text-center">Query Product</h1>
          <div className="d-flex justify-content-between">
            <div></div>
            <div><button className="btn btn-primary my-3" onClick={refetch}>Get all product</button></div>
          </div>
          {data?.data.map((product) => (
            <Link to={`/singleproduct/${product.id}`} key={product.id} className="card mb-3">
              <div className="card-body text-center">
                <h2>{product.name}</h2>
               
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Queryproduct;
