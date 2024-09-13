import { useLoaderData } from "react-router-dom";
import CraftCard from "./CraftCard";
import { useState } from "react";

const AllArtCraft = ()=>{
  const allCraftItem = useLoaderData()
  const [product, setProduct] = useState(allCraftItem)
  const [visibleCount, setVisibleCount] = useState(3); 
  const [showAll, setShowAll] = useState(false);
  
  const toggleView = () => {
      if (showAll) {
        setVisibleCount(3); 
      } else {
        setVisibleCount(product.length);
      }
      setShowAll(!showAll); 
    };
  
    return(
        <div className="container mx-auto py-10 px-10">
            
            <div className="">
              
            {
              product.slice(0, visibleCount).map(craft=> <CraftCard
              key={craft._id} craft={craft} 
              product={product} setProduct={setProduct}>

              </CraftCard>)
            }
            </div>
            <div className="text-center mt-6">
        <button
          onClick={toggleView}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
        >
          {showAll ? "Show Less" : "Show All"}
        </button>
      </div>
        </div>
    )
}
export default AllArtCraft;