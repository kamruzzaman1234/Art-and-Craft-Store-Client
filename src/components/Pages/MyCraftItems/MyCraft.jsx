import Swal from 'sweetalert2' 
import { Link } from 'react-router-dom'
const MyCraft = ({crafts, craft, setCraft})=>{
    const {_id,image_url, craft_name, description, category, stock_status, processing_time, rating, price} = crafts
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
          fetch(`http://localhost:6008//addProduct/${_id}`, {
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
              const remaining = craft.filter(prod => prod._id !== _id)
              setCraft(remaining)
            
            }
          })
        }
      })
      
    }
    return(
        <div>
           <div className=" bg-white px-4 py-3 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 transform hover:scale-105">
      <img className="w-full h-52 object-cover" src={image_url} alt={craft_name} />
      <div className=" mt-3">
        <h2 className="text-2xl font-bold text-gray-800">{craft_name}</h2>
        <div className="badge badge-warning">{stock_status}</div>
        <p>{description}</p>
        
        <span>{category}</span>
        <div className="flex items-center space-x-2 mt-2">
            <span className="text-xl font-semibold">Processing Time : </span>
            <span className="">{processing_time} days</span>
        </div>
        <div className="flex items-center space-x-2 mt-2">
          <span className=" text-xl font-semibold">Rating : </span>
          <span className="text-yellow-500 text-[20px] font-bold">{rating}</span>
          <span>out of 5</span>
        </div>
        <span className="text-gray-800 mt-1 font-semibold text-xl">Price : 
          <span className="text-yellow-500 font-bold">$ {price}</span></span>
        <div className="flex mt-3 space-x-3">
            <button onClick={()=>handleDelete(_id)} 
            className="btn bg-red-500 text-white font-bold">Delete</button>
            <Link className="btn bg-orange-500
             text-white font-bold" to={`/update/${_id}`}>Update</Link>
            <Link to={`/viewProduct/${_id}`} className="btn text-white bg-green-400">
                   View Details</Link>
        </div>
      </div>
    </div>
    
        </div>
    )
}
export default MyCraft;