import { useContext, useState } from "react";
import { Link} from "react-router-dom";
 import { ToastContainer } from "react-toastify";
 import Swal from 'sweetalert2' 
import { AuthContext } from "../../../Provider/AuthProvider";

const AddCraftItem = () => {
  const {user} = useContext(AuthContext)
  const handleProduct = (e)=>{
    e.preventDefault()
    const form = e.target;
    const image_url = form.image_url.value
    const craft_name = form.product_name.value 
    const description = form.description.value 
    const stock_status = form.stock_status.value
    const category = form.category.value
    const processing_time = form.processing_time
    const price = form.price.value 
    const rating = form.rating.value 
    const allUser = {image_url, stock_status, processing_time, category, craft_name, description, price, rating}
    form.reset()
    console.log(allUser)
    fetch('http://localhost:6008/addProduct',{
      method:"POST",
      headers :{
        'content-type':'application/json'
      },
      body: JSON.stringify(allUser)
    })
    .then(res=> res.json())
    .then(data=>{
      console.log(data)
      if(data.insertedId){
        Swal.fire({
          title: 'success',
          text: 'Do you want to continue',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
      }
    })
  }
 


  return (
    
    <div className="my-7 p-7 bg-orange-50 mx-20 ">
      <div className="flex gap-5">
        <div className="">
            <h3>Add New Card</h3>
            <p className="w-[400px]">Here, you can showcase
             your latest artistic creation by adding a new craft item to our collection.</p>
        </div>
        <div className="">
          <form action="" className="grid grid-cols-2  gap-6" onSubmit={handleProduct}>
            <div className="form-control">
              <label htmlFor="category name" className="mb-2 font-bold">User Name</label>
              <input type="text"  value={user.displayName} name="user_displayName"
               className="input input-bordered" required/>
            </div>
            <div className="form-control">
              <label htmlFor="email">Email</label>
              <input type="email" value={user.email}  name="user_email"
               className="input input-bordered"/>
            </div>
            <div className="form-control">
              <label htmlFor="craft name">Craft Name</label>
              <input type="text"  name="craft_name" id="craft_name"
               className="input input-bordered" placeholder="ex:Paper Plane" required/>
            </div>
            <div className="form-control ">
              <label htmlFor="category">Category :</label>
              <select name="category" required id="" className="py-[9px] rounded-lg">
                <option value=""></option>
                  <option value="card marketing" name="card_marketing">Card Marketing</option>
                  <option value="scrapbooking" name="scrapbooking">Scrapbooking</option>
                  <option value="lampworking" name="lampworking">Lampworking</option>
                  <option value="paper quiling and origami" name="paper">Paper Quiling and Origami</option>
              </select>
            </div>
            <div className="form-control">
              <label htmlFor="stock status">Stock Status :</label>
              <select name="stock_status" id="" required className="py-[9px] rounded-lg">
                <option value="" ></option>
                  <option value="" name="in_stock">In Stock</option>
                  <option value="" name="made_of_order">Made of Order</option>
              </select>
            </div>
            <div className="form-control">
              <label htmlFor="processing time">Processing Time</label>
              <input type="text" name="processing_time"
               placeholder="ex: 2-3 days" className="input input-bordered"/>
            </div>
            <div className="form-control col-span-2">
              <label htmlFor="photo url">Photo Url</label>
              <input type="text" name="image_url" id="image_url" required
               placeholder="http//user.com/photo.jpg" className="input input-bordered"/>
            </div>
            <div className="form-control col-span-2">
              <label htmlFor="sort description">Sort Description</label>
              <input type="text" name="description" className="input input-bordered"
               id="description" placeholder="ex: hot to make a paper line" required/>
            </div>
            <div className="grid grid-cols-3 gap-5">
              <div className="form-control">
                  <label htmlFor="price">Price</label>
                  <input type="number" name="price" id="price"
                   min="0"
                  
                   max="9999999999999.99" className="input input-bordered"
                   required placeholder="ex: 15"/>
              </div>
              <div className="form-control">
                  <label htmlFor="rating">Rating</label>
                  <input type="number" name="rating" min="1"
              max="5"
                  className="input input-bordered" id="rating" required/>
              </div>
            </div>
              <div className="form-control col-span-2">
                <input type="submit" value="Add Craft" 
                className="bg-success input input-bordered text-white font-bold"/>
              </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCraftItem;
