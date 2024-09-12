import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
const AllItems = ({allItem})=>{
    const {_id, image_url, product_name, description, price, rating} = allItem 
    const {user} = useContext(AuthContext) 
    return(
        <div className="">
        <div className="card bg-base-100 my-6 px-8 shadow-xl">
          <figure>
            <img
              src={image_url} className="w-full h-[300px] object-cover"
              alt="Shoes" />
          </figure>
        <div className="mt-4 ">
        <h2 className="font-bold text-[18px]">{product_name}</h2>
        <p className="text-[17px] my-3">{description}</p>
        <h4 className="font-bold text-[18px]">Category: <span className="font-medium">{product_name}</span> </h4>
        <h4 className="font-bold text-[18px]">Processing Time: <span></span></h4>
        <h4 className="font-bold text-[18px]">Price: $ 
          <span className="text-orange-600 text-[22px] font-medium">{price}</span></h4>
        <h4 className="font-bold text-[18px]">
          Rating: <span className="font-medium">{rating} out of 5</span></h4>

        </div>
         <div>
         
         <Link to={`/viewProduct/${_id}`} 
          className="btn btn-block text-white my-3 bg-green-400">View</Link>
         
         </div>
        </div>
                </div>
    )
}
export default AllItems;