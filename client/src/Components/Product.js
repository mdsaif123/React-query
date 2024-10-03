
import React, { useEffect, useState } from 'react';
import axios from "axios";

const Product = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    const [error,seterror]=useState('')

useEffect(() => {
   axios.get("http://localhost:5000/products").then((res)=>{
   setData(res.data)
   setIsLoading(false)
   }).catch((error)=>{
    seterror(error.message)
    setIsLoading(false)

   })
            
    }, []); 

    if (isLoading) {
        return <h2>Loading...</h2>;
    }

    if(error){
        return <h2>{error}</h2>
    }

    return (
        <div>
        <div className="container">
        <div className="row justify-content-center"> 
        <div className="col-md-6">
        <h1 className='text-center'>Product Page</h1>
            {data.map((product) => {
                return (
                    <div key={product.id} className='card my-3'>
                    <div className="card-body">
                    <h2>{product.name}</h2>
                        <p>{product.description}</p>
                    </div>
                       
                    </div>
                );
            })}
        </div>
        </div>
        </div>
           
        </div>
    );
}

export default Product;
