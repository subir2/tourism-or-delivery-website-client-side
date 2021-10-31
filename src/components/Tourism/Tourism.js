import React, { useEffect, useState }  from 'react';
import'./Tourism.css';

import { Link } from "react-router-dom";
const Tourism = () => {
    const[tourisms,setTourisms]=useState([]);
    useEffect(()=>{
        fetch("https://gentle-gorge-27756.herokuapp.com/products")
        .then(res=>res.json())
        .then(data=>setTourisms(data));
      },[]);
    return (
        <div>
            <h1>Our Services</h1>
              <div className="all-products mb-5">
              <div className="row container text-center">

                  {
                   tourisms?.slice(0,4).map((pd,index)=>(
                      <div className="col-md-4 mt-2">
                          <div className="user border border p-2  mt-5 mb-4 h-100">
                          <img className="img-fluid" src={pd.img} alt="" srcset="" />
                          <h1>{pd.name}</h1>
                          <h3>Rate:{pd.price}</h3>
                          
                   
                   
                   <Link to="/services">
                  <button className="btn-course">Read More</button>
                      </Link>
                  
                          </div>
                      </div>

                   )
                   
                )
                  }


              </div>

            </div>
        </div>
    );
};

export default Tourism;