import { useState } from "react";
import { Link} from "react-router-dom";
 import { ToastContainer } from "react-toastify";
 import Swal from 'sweetalert2' 

const AddCraftItem = () => {
  const handleProduct = (e)=>{
    e.preventDefault()
    const form = e.target;
    const image_url = form.image_url.value
    const product_name = form.product_name.value 
    const description = form.description.value 
    const price = form.price.value 
    const rating = form.rating.value 
    const allUser = {image_url, product_name, description, price, rating}
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
    
 

  <div className="min-h-screen flex flex-col items-center justify-center
   bg-gradient-to-r from-green-200 via-yellow-200 to-red-200 p-6">
  <div className="flex mb-10 space-x-5">
 {/* <Link className="btn btn-outline active">Shirt</Link>
 <Link className="btn btn-outline btn-primary active">Pr</Link>
 <Link className="btn btn-outline btn-secondary active">Secondary</Link>
 <Link className="btn btn-outline btn-accent active">Accent</Link> */}
     </div>
    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-md">
      <div className="bg-cover bg-center h-56" style={{ backgroundImage: `url("../../../.././img/pic1.jpg")` }}></div>
      <div className="p-8">
        <h2 className="text-2xl font-bold text-gray-800 text-center">Add Items</h2>
        <form className="mt-8 space-y-6" onSubmit={handleProduct}>
          <div className="relative">
            <label className="text-gray-700">Image Url</label>
            <input type="text" name="image_url" placeholder="image-url"
            className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent" />
          </div>
          <div className="relative">
            <label className="text-gray-700">Product Name</label>
            <input type="type" name="product_name" placeholder="product-name"
             className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent" />
          </div>
          <div className="relative">
            <label className="text-gray-700">Description</label>
            <input type="text" name="description" placeholder="description"
             className="w-full px-3 py-2 mt-1
              border border-gray-300 rounded-md focus:outline-none focus:ring-2
               focus:ring-purple-500 focus:border-transparent" />
               <div className="absolute right-2 top-10">
             
          </div>
          </div>
          <div className="relative">
            <label className="text-gray-700">Price</label>
            <input type="number" name="price" placeholder="price"
             className="w-full px-3 py-2 mt-1
              border border-gray-300 rounded-md focus:outline-none focus:ring-2
               focus:ring-purple-500 focus:border-transparent" />
               <div className="absolute right-2 top-10">
             
          </div>
          </div>
          <div className="relative">
            <label className="text-gray-700">Rating</label>
            <input type="number" name="rating" placeholder="rating"
             className="w-full px-3 py-2 mt-1
              border border-gray-300 rounded-md focus:outline-none focus:ring-2
               focus:ring-purple-500 focus:border-transparent" />
               <div className="absolute right-2 top-10">
             
          </div>
          </div>
         
          <div className="relative">
            <button type="submit"
             className="w-full py-2 bg-purple-500 text-white rounded-md
              hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50">Add Product</button>
          </div>
          <div className="relative">
            <p className="font-bold">Already Added || Please <Link to="/login"
             className="ml-2 p-1 rounded-lg bg-purple-300 text-white">All Product</Link> </p>
          </div>
        </form>
      </div>
    </div>
  </div>
  );
};

export default AddCraftItem;
