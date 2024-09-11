import { Link } from "react-router-dom";
const AllItems = ({allItem})=>{
    const {_id, image_url, product_name, description, price, rating} = allItem 
    return(
        <div className="">
        <div className="card bg-base-100 my-6  shadow-xl">
          <figure>
            <img
              src={image_url} className="w-full h-[400px]"
              alt="Shoes" />
          </figure>
         <div>
         <Link to={`/viewProduct/${_id}`} className="btn btn-block text-white my-3 bg-green-400">View</Link>
         </div>
        </div>
                </div>
    )
}
export default AllItems;