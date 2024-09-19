// import { useState } from "react";
// import { Link, useLoaderData} from "react-router-dom";
//  import { ToastContainer } from "react-toastify";
//  import Swal from 'sweetalert2' 

// const UpdateProduct = () => {
//     const updateProduct = useLoaderData()
//     const {_id, image_url, product_name, description, rating, price} = updateProduct
//     const handleUpdateProduct = (e)=>{
//         e.preventDefault()
//         const form = e.target;
//         const image_url = form.image_url.value
//         const product_name = form.product_name.value 
//         const description = form.description.value 
//         const price = form.price.value 
//         const rating = form.rating.value 
//         const updateUser = {image_url, product_name, description, price, rating}
//         form.reset()
//         console.log(updateUser)
//         fetch(`http://localhost:6008/addProduct/${_id}`,{
//           method:"PUT",
//           headers :{
//             'content-type':'application/json'
//           },
//           body: JSON.stringify(updateUser)
//         })
       
//         .then(res=> res.json())
//         .then(data=>{
//           console.log(data)
//           if(data.modifiedCount> 0){
//             Swal.fire({
//               title: 'success',
//               text: 'User Update Success',
//               icon: 'success',
//               confirmButtonText: 'Ok'
//             })
//           }
//         })
//       }   

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-6">
    
//     <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-md">
//       <div className="bg-cover bg-center h-56" style={{ backgroundImage: `url("../../../.././img/pic1.jpg")` }}></div>
//       <div className="p-8">
//         <h2 className="text-2xl font-bold text-gray-800 text-center">Update Items</h2>
//         <form className="mt-8 space-y-6" onSubmit={handleUpdateProduct}>
//           <div className="relative">
//             <label className="text-gray-700">Image Url</label>
//             <input type="text" name="image_url" defaultValue={image_url} placeholder="image-url"
//             className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent" />
//           </div>
//           <div className="relative">
//             <label className="text-gray-700">Product Name</label>
//             <input type="type" name="product_name" defaultValue={product_name} placeholder="product-name"
//              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent" />
//           </div>
//           <div className="relative">
//             <label className="text-gray-700">Description</label>
//             <input type="text" name="description" defaultValue={description} placeholder="description"
//              className="w-full px-3 py-2 mt-1
//               border border-gray-300 rounded-md focus:outline-none focus:ring-2
//                focus:ring-purple-500 focus:border-transparent" />
//                <div className="absolute right-2 top-10">
             
//           </div>
//           </div>
//           <div className="relative">
//             <label className="text-gray-700">Price</label>
//             <input type="number" name="price" defaultValue={price} placeholder="price"
//              className="w-full px-3 py-2 mt-1
//               border border-gray-300 rounded-md focus:outline-none focus:ring-2
//                focus:ring-purple-500 focus:border-transparent" />
//                <div className="absolute right-2 top-10">
             
//           </div>
//           </div>
//           <div className="relative">
//             <label className="text-gray-700">Rating</label>
//             <input type="number" name="rating" defaultValue={rating} placeholder="rating"
//              className="w-full px-3 py-2 mt-1
//               border border-gray-300 rounded-md focus:outline-none focus:ring-2
//                focus:ring-purple-500 focus:border-transparent" />
//                <div className="absolute right-2 top-10">
             
//           </div>
//           </div>
         
//           <div className="relative">
//             <button type="submit"
//              className="w-full py-2 bg-purple-500 text-white rounded-md
//               hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50">Update Product</button>
//           </div>
//           <div className="relative">
//             <p className="font-bold">Already Added || Please <Link to="/login"
//              className="ml-2 p-1 rounded-lg bg-purple-300 text-white">Update Product</Link> </p>
//           </div>
//         </form>
//       </div>
//     </div>
//   </div> 
   

//   );
// };

// export default UpdateProduct;

import { useContext } from "react";
import { ToastContainer } from "react-toastify";
import Swal from 'sweetalert2';
import { AuthContext } from "../../../Provider/AuthProvider";

const UpdateProduct = () => {
  const { user } = useContext(AuthContext);
  const updateProduct = useLoaderData()
  const {_id,displayName, email, image_url, craft_name, description, category,stock_status, processing_time, rating, price} = updateProduct

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const user_displayName = form.user_displayName.value;
    const user_email = form.user_email.value;
    const craft_name = form.craft_name.value;
    const category = form.category.value;
    const stock_status = form.stock_status.value;
    const processing_time = form.processing_time.value;
    const image_url = form.image_url.value;
    const description = form.description.value;
    const price = form.price.value;
    const rating = form.rating.value;

    const allUsers = {
      user_displayName, 
      user_email, 
      craft_name, 
      description, 
      category, 
      stock_status, 
      processing_time, 
      image_url, 
      price, 
      rating
    };

    console.log(allUsers);
    form.reset();

    fetch(`http://localhost:6008/addProduct/${_id}`, {
      method: "PUT",
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(allUsers),
    })
    .then((res) => res.json())
    .then((data) => {
      if (data.insertedId) {
        Swal.fire({
          title: 'Success',
          text: "Craft item added successfully!",
          icon: 'success',
          confirmButtonText: 'Ok',
        });
      }
    });
  };

  return (
    <div className="my-7 p-7 bg-yellow-50 mx-4 md:mx-10 lg:mx-20">
      <div className="flex flex-col lg:flex-row gap-5">
        <div>
          <h3 className="text-2xl lg:text-3xl font-semibold mb-6 text-italic">Update Your <span className="text-orange-500">Craft</span></h3>
          <p className="w-full lg:w-[400px]">
            Showcase your latest artistic creation by adding a new craft item to our collection.
          </p>
        </div>
        <div className="w-full">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <label htmlFor="user_displayName" className="mb-2 font-bold">User Name</label>
              <input type="text" defaultValue={user.displayName} name="user_displayName" className="input input-bordered" required/>
            </div>
            <div className="form-control">
              <label htmlFor="user_email" className="mb-2 font-bold">Email</label>
              <input type="email" defaultValue={user.email} name="user_email" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label htmlFor="craft_name" className="mb-2 font-bold">Craft Name</label>
              <input type="text" name="craft_name" defaultValue={craft_name}
               id="craft_name" className="input input-bordered" placeholder="ex: Paper Plane" required/>
            </div>
            <div className="form-control">
              <label htmlFor="category" className="mb-2 font-bold">Category</label>
              <select name="category" id="category" defaultValue={category}
               className="py-[9px] rounded-lg">
                <option value=""></option>
                <option value="card marketing">Card Marketing</option>
                <option value="scrapbooking">Scrapbooking</option>
                <option value="lampworking">Lampworking</option>
                <option value="paper quiling and origami">Paper Quiling and Origami</option>
              </select>
            </div>
            <div className="form-control">
              <label htmlFor="stock_status" className="mb-2 font-bold">Stock Status</label>
              <select name="stock_status" defaultValue={stock_status} 
              id="stock_status" className="py-[9px] rounded-lg" required>
                <option value=""></option>
                <option value="In stock">In Stock</option>
                <option value="made_of_order">Made to Order</option>
              </select>
            </div>
            <div className="form-control">
              <label htmlFor="processing_time" className="mb-2 font-bold">Processing Time</label>
              <input type="text" name="processing_time" defaultValue={processing_time}
              placeholder="ex: 2-3 days" className="input input-bordered"/>
            </div>
            <div className="form-control col-span-1 md:col-span-2">
              <label htmlFor="image_url" className="mb-2 font-bold">Photo URL</label>
              <input type="text" name="image_url" defaultValue={image_url}
               id="image_url" className="input input-bordered" required placeholder="http://example.com/photo.jpg" />
            </div>
            <div className="form-control col-span-1 md:col-span-2">
              <label htmlFor="description" className="mb-2 font-bold">Short Description</label>
              <input type="text" name="description" defaultValue={description}
              id="description" className="input input-bordered" placeholder="ex: How to make a paper plane" required/>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="form-control">
                <label htmlFor="price" className="mb-2 font-bold">Price</label>
                <input type="number" name="price" defaultValue={price} id="price" min="0" step="0.01" max="10000" className="input input-bordered" required placeholder="ex: 15"/>
              </div>
              <div className="form-control">
                <label htmlFor="rating" className="mb-2 font-bold">Rating</label>
                <input type="number" name="rating" min="1" defaultValue={rating} max="5" step="0.01" className="input input-bordered" id="rating" required/>
              </div>
            </div>
            <div className="form-control col-span-1 md:col-span-2">
              <input type="submit" value="Add Craft" className="btn bg-green-500 text-white"/>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;

