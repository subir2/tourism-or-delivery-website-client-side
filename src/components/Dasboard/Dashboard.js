import useAuth from '../Hooks/useAuth';
import React, { useEffect, useState } from 'react';


const Dashboard = () => {
    const { user, logOut} = useAuth();
    const [orders,setOrders]=useState([]);
    const[isdeleted,setIsdeleted]=useState(false);
    useEffect(()=>{

        fetch(`https://gentle-gorge-27756.herokuapp.com/myorders/${user.email}`)
        .then(res=>res.json())
        .then(data=>setOrders(data));

    },[isdeleted]);

    
    const handeldelete=(id)=>{
        alert("Do You Want To delete?")
        fetch(`https://gentle-gorge-27756.herokuapp.com/deleteorder/${id}`,{
            method:"DELETE",
            headers:{"content-type":"application/json"},
        })
        .then(res=>res.json())
        .then(result=>{
            if(result.deletedCount){
             setIsdeleted(true);
            
            }
            else{
             setIsdeleted(false);
            }
        });
     }
    return (
        <div>
            <h1>My Order Quantity : {orders.length}</h1>
            <div className="all-products ">
              <div className="row container text-center">

                  {
                   orders?.map((pd,index)=>(
                      <div className="col-md-4">
                          <div className="user border border p-2 m-2">
                          <img className="img-fluid" src={pd.img} alt="" srcset="" />
                          <h1>{pd.name}</h1>
                          <h3>Rate:{pd.price}</h3>
                          
                   <p className="text-justify font-italic">{pd.description}</p>
                   
                   
                   <button 
                   onClick={()=>handeldelete(pd._id)}
                   className="btn btn-danger m-2">Delete</button>
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

export default Dashboard;