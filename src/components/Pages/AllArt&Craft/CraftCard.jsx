import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Swal from 'sweetalert2' 

import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useContext } from "react";
const CraftCard = ({craft, product ,setProduct})=>{
    const {_id, image_url, craft_name, category, stock_status, processing_time, description, rating, price} = craft
    const {user} = useContext(AuthContext)
    
    

  return(
    <div className="mx-10 my-10 bg-slate-6">
         <div className=" mx-auto bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Product Details</h2>
      <ul className="divide-y divide-gray-200">
        <li className="py-2 flex justify-between">
          <span className="font-semibold text-gray-600">Product Name:</span>
          <span className="text-gray-800">{craft_name}</span>
        </li>
        <li className="py-2 flex justify-between">
          <span className="font-semibold text-gray-600">Price:</span>
          <span className="text-gray-800">{price}</span>
        </li>
        <li className="py-2 flex justify-between">
          <span className="font-semibold text-gray-600">Category:</span>
          <span className="text-gray-800">{category}</span>
        </li>
        <li className="py-2 flex justify-between">
          <span className="font-semibold text-gray-600">Stock Status:</span>
          <span className={`text-gray-800 ${stock_status === 'In Stock' ? 'text-green-600' : 'text-red-600'}`}>
            {stock_status}
          </span>
        </li>
        <li className="py-2 flex justify-between">
          <span className="font-semibold text-gray-600">Rating:</span>
          <span className="text-gray-800">{rating} ⭐</span>
        </li>
        <Link to={`/viewProduct/${_id}`} className="btn text-white bg-green-400">
                   View Details</Link>
      </ul>
    </div>
      </div>
         
         

  )
}
export default CraftCard;