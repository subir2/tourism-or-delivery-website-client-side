import React from "react";
import { useForm } from "react-hook-form";

const Addservice = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        
        
        console.log(data);

        fetch(`https://gentle-gorge-27756.herokuapp.com/addProducts`,{
         method:"POST",
         headers:{"content-Type":"application/json"},
         body:JSON.stringify(data),

        })
        .then((res)=>res.json())
        .then(result=>console.log(result));


    }
    return (
        <div>
            <h1>Add Service</h1>
              <form onSubmit={handleSubmit(onSubmit)}>
  
      {/* <input defaultValue="test" {...register("example")} /> */}
      

      <input className="p-2 m-2"
      {...register("name", { required: true })
      
      }placeholder="Name" />
      <br></br>

<input className="p-2 m-2"
      {...register("price", { required: true })
      
      } placeholder="Cost"/>
       <br></br>
      <input className="p-2 m-2" 
      {...register("img", { required: true })
      
      } placeholder="Image"/>
 <br></br>
      <textarea className="p-2 m-2" {...register("description", { required: true })}  placeholder="Description"/>
      <br></br>
     
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input className="p-2 m-2 btn btn-danger" type="submit" />
    </form>
        </div>
    );
};

export default Addservice;