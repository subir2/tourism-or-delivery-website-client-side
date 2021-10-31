import useAuth from '../Hooks/useAuth';
import React, { useEffect, useState } from 'react';

const Allorder = () => {
    const [aorders,setOarders]=useState([]);
    const { user, logOut} = useAuth();
    const[isdeleted,setIsdeleted]=useState(false);
    useEffect(()=>{

        fetch(`https://gentle-gorge-27756.herokuapp.com/allorder`)
        .then(res=>res.json())
        .then(data=>setOarders(data));

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
     const handelAddToallconfirm=(index)=>{
        // console.log(products[index]);
        const data =aorders[index];
        data.email=user.email;
        // console.log(data);
        fetch("https://gentle-gorge-27756.herokuapp.com/allorderconfirm",{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(data),
        
        })
        .then(res=>res.json())
        .then(result=>{
            if(result){
             alert("Approved Sucessfully");
            // console.log("Hi");
            }
            else{
                alert("Allready Approved This Orders");
            }
        
        });
            }

  
    return (
        <div>
            <h1>Total Number of  Order Quantity : {aorders.length}</h1>
            <div className="all-products ">
              <div className="row container text-center">

                  {
                   aorders?.map((pd,index)=>(
                      <div className="col-md-4">
                          <div className="user border border p-2 m-2">
                          <img className="img-fluid" src={pd.img} alt="" srcset="" />
                          <h1>{pd.name}</h1>
                          <h3>Rate:{pd.price}</h3>
                          <h5>Order by :{pd.email}</h5>
                          
                   <p className="text-justify font-italic">{pd.description}</p>
                   
                   
                   <button  onClick={()=>handelAddToallconfirm(index)} 
                 
                   className="btn btn-success m-2">Approved</button>

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

export default Allorder;