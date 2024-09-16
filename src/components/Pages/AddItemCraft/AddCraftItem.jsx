import { useContext, useState } from "react";
import { Link} from "react-router-dom";
 import { ToastContainer } from "react-toastify";
 import Swal from 'sweetalert2' 
import { AuthContext } from "../../../Provider/AuthProvider";

const AddCraftItem = () => {
  const {user} = useContext(AuthContext)

  const handleSubmit = (e)=>{
    e.preventDefault(e)
    const form = e.target
    const user_displayName = form.user_displayName.value 
    const user_email = form.user_email.value 
    const craft_name = form.craft_name.value 
    const category = form.category.value 
    const stock_status = form.stock_status.value 
    const processing_time = form.processing_time.value 
    const image_url = form.image_url.value 
    const description = form.description.value
    const price = form.price.value 
    const rating = form.rating.value 
    const allUsers = {user_displayName, user_email, craft_name, description, category, stock_status, processing_time, image_url, price, rating}
    console.log(allUsers)
    form.reset()

    fetch('http://localhost:6008/addProduct',{
         method:"POST",
        headers: {
        'content-type':'application/json'
      },
      body: JSON.stringify(allUsers)
    })
    .then(res=> res.json())
    .then(data=> {
      console.log(data)
      if(data.insertedId){
        Swal.fire({
          title: 'success',
          text: "Do you want to continue",
          icons: 'success',
          confirmButtonText: 'okk'
        })
      }
    })
 
  }
 


  return (
    
    <div className="my-7 p-7 bg-yellow-50 mx-20 ">
      <div className="flex gap-5">
        <div className="">
            <h3 className="text-3xl font-semibold mb-6">Add New <span className="text-orange-500 text-[35px]">Craft</span></h3>
            <p className="w-[400px]">Here, you can showcase
             your latest artistic creation by adding a new craft item to our collection.</p>
        </div>
        <div className="">
          <form onSubmit={handleSubmit}  className="grid grid-cols-2  gap-6" 
          >
            <div className="form-control">
              <label htmlFor="category name" className="mb-2 font-bold">User Name</label>
              <input type="text"  value={user.displayName} name="user_displayName"
               className="input input-bordered" required/>
            </div>
            <div className="form-control">
              <label htmlFor="email" className="mb-2 font-bold">Email</label>
              <input type="email" value={user.email}  name="user_email"
               className="input input-bordered"/>
            </div>
            <div className="form-control">
              <label htmlFor="craft name" className="mb-2 font-bold">Craft Name</label>
              <input type="text"  name="craft_name" id="craft_name"
               className="input input-bordered" placeholder="ex:Paper Plane" required/>
            </div>
            <div className="form-control ">
              <label htmlFor="category" className="mb-2 font-bold">Category :</label>
              <select name="category"  id="category"  className="py-[9px] rounded-lg">
                <option value=""></option>
                  <option value="card marketing" name="card_marketing">Card Marketing</option>
                  <option value="scrapbooking" name="scrapbooking">Scrapbooking</option>
                  <option value="lampworking" name="lampworking">Lampworking</option>
                  <option value="paper quiling and origami" name="paper">Paper Quiling and Origami</option>
              </select>
            </div>
            <div className="form-control">
              <label htmlFor="stock status" className="mb-2 font-bold">Stock Status :</label>
              <select name="stock_status" id="" required className="py-[9px] rounded-lg">
                <option value="" ></option>
                  <option value="In stock" name="In_stock">In Stock</option>
                  <option value="made_of_order" name="made_of_order">Made of Order</option>
              </select>
            </div>
            <div className="form-control">
              <label htmlFor="processing time" className="mb-2 font-bold">Processing Time</label>
              <input type="text" name="processing_time"
               placeholder="ex: 2-3 days" className="input input-bordered"/>
            </div>
            <div className="form-control col-span-2">
              <label htmlFor="photo url" className="mb-2 font-bold">Photo Url</label>
              <input type="text" name="image_url" id="image_url" required
               placeholder="http//user.com/photo.jpg" className="input input-bordered"/>
            </div>
            <div className="form-control col-span-2">
              <label htmlFor="sort description" className="mb-2 font-bold">Sort Description</label>
              <input type="text" name="description" className="input input-bordered"
               id="description" placeholder="ex: hot to make a paper line" required/>
            </div>
            <div className="grid grid-cols-3 gap-5">
              <div className="form-control">
                  <label htmlFor="price" className="mb-2 font-bold">Price</label>
                  <input type="number" name="price" id="price"
                   min="0"
                  step="0.01"
                   max="15.55" className="input input-bordered"
                   required placeholder="ex: 15"/>
              </div>
              <div className="form-control">
                  <label htmlFor="rating" className="mb-2 font-bold">Rating</label>
                  <input type="number" name="rating" min="1" step="0.01"
              max="5"
                  className="input input-bordered" id="rating" required/>
              </div>
            </div>
              <div className="form-control col-span-2">
              <input type="submit" value="Add Craft"
               className="btn bg-success text-white"/>
              </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCraftItem;
