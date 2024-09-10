import { useLoaderData } from "react-router-dom";
import CraftCard from "./CraftCard";
import { useState } from "react";

const AllArtCraft = ()=>{
  const allCraftItem = useLoaderData()
  const [product, setProduct] = useState(allCraftItem)
  
    return(
        <div className="container mx-auto py-10 px-10">
            
            <div className="grid md:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-5">
            {
              product.map(craft=> <CraftCard
              key={craft._id} craft={craft} 
              product={product} setProduct={setProduct}>

              </CraftCard>)
            }
            </div>
        </div>
    )
}
export default AllArtCraft;