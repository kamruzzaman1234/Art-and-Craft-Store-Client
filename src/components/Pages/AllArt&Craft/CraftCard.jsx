import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Swal from 'sweetalert2' 

import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
const CraftCard = ({craft, product ,setProduct})=>{
    const {_id, image_url, product_name, description, rating, price} = craft
    
    const handleDelete = _id =>{
      console.log(_id)
      Swal.fire({
        title:'Are you sure ?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: 'true',
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: 'Yes, deleted it'        
      }).then((result)=>{
        if (result.isConfirmed){
          fetch(`http://localhost:6008/addProduct/${_id}`, {
            method:"DELETE"
          })
          .then(res=>res.json())
          .then(data=>{
            console.log(data)
            if (data.deletedCount > 0){
              Swal.fire(
                'Deleted!',
                'Your fire has been deleted',
                'success '
              )
              const remaining = product.filter(prod => prod._id !== _id)
              setProduct(remaining)
            
            }
          })
        }
      })
      
    }
    return(
        <div className="">
<div className="card bg-base-100  shadow-xl">
  <figure>
    <img
      src={image_url} className="w-full h-[400px]"
      alt="Shoes" />
  </figure>
  <div className="card-body space-y-3">
    <h2 className="flex justify-center items-center text-3xl">
      {product_name}
      <div className="flex space-x-3 ml-auto ">
      <Link to={`/viewProduct/${_id}`} className="btn bg-red-400">View</Link>
      <Link to={`/update/${_id}`} className="btn bg-red-400">
      
      <FiEdit className="text-3xl text-white"/></Link>
      <button className="btn bg-red-400" onClick={()=>handleDelete(_id)}><MdDelete className="text-3xl text-white"/></button>
      </div>
    </h2>
    <p>{description}</p>
    <div className="flex flex-col space-y-3">
      <div className="text-[20px] gap-2 font-bold">Price : <span className="text-[19px] text-yellow-500 font-bold"> {price}</span></div>
      <div className=" text-[20px] gap-2 font-bold">Rating : <span className="font-bold text-yellow-500 text-[19px]"> {rating}</span></div>
    </div>
  </div>
</div>
        </div>
    )
}
export default CraftCard;