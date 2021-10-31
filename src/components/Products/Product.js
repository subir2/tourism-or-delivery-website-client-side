import React, { useEffect, useState } from 'react';
import useAuth from '../Hooks/useAuth';

const Product = () => {
    const { user, logOut} = useAuth();
    const[products,setProduct]=useState([]);
    // const[isdeleted,setIsdeleted]=useState(false);
   
    useEffect(()=>{

        fetch("https://gentle-gorge-27756.herokuapp.com/products")
        .then(res=>res.json())
        .then(data=>setProduct(data));

    },[]);
    //delete 

    // const handeldelete=(id)=>{
    //    fetch(`http://localhost:5000/deleteproduct/${id}`,{
    //        method:"DELETE",
    //        headers:{"content-type":"application/json"},
    //    })
    //    .then(res=>res.json())
    //    .then(result=>{
    //        if(result.deletedCount){
    //         setIsdeleted(true);
    //        }
    //        else{
    //         setIsdeleted(false);
    //        }
    //    });
    // }
    //cart 

    const handelAddToCart=(index)=>{
// console.log(products[index]);
const data =products[index];
data.email=user.email;
// console.log(data);
fetch("https://gentle-gorge-27756.herokuapp.com/addorder",{
    method:"POST",
    headers:{"content-type":"application/json"},
    body:JSON.stringify(data),

})
.then(res=>res.json())
.then(result=>{
    if(result){
     alert("Data Alreary Add in your Cart Pls Login to See your Cart");
    // console.log("Hi");
    }
    else{
   
    }

});
    }
    
    return (
        <div>
            <h1>All Service</h1>
            <div className="all-products ">
              <div className="row container text-center">

                  {
                   products?.map((pd,index)=>(
                      <div className="col-md-4 h-100">
                          <div className="user border border p-2 m-2">
                          <img className="img-fluid" src={pd.img} alt="" srcset="" />
                          <h1>{pd.name}</h1>
                          <h3>Rate:{pd.price}</h3>
                          
                   <p className="text-justify font-italic">{pd.description}</p>
                   
                   <button onClick={()=>handelAddToCart(index)} className="btn btn-warning">Book Now</button>
                   {/* <button 
                   onClick={()=>handeldelete(pd._id)}
                   className="btn btn-danger m-2">Delete</button> */}
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

export default Product;