import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import MyCraft from "./MyCraft";

const MyCraftItems = ()=>{
    const craftItem = useLoaderData()
    const [craft, setCraft] = useState(craftItem)
    const [visibleCount, setVisibleCount] = useState(6); 
    const [showAll, setShowAll] = useState(false);
    const toggleView = () => {
        if (showAll) {
          setVisibleCount(3); 
        } else {
          setVisibleCount(craft.length);
        }
        setShowAll(!showAll); 
      };
    return(
        <div className="container mx-auto p-10">
            <div className="text-center mb-10 space-y-2">
                <h2 className="text-3xl font-semibold">Explore Your Artistic Creations</h2>
                <p>Welcome to your personal gallery of artistic creations! Here, you can view and manage all the
                 wonderful arts and crafts <br /> you have added to your collection.</p>
            </div>
            <div className="grid md:grid-cols-5 lg:grid-cols-3 grid-cols-2 gap-5">
                {
                    craft.slice(0, visibleCount).map(crafts=> 
                    <MyCraft key={crafts._id} 
                    crafts={crafts} craft={craft} setCraft={setCraft}>

                    </MyCraft>)
                }
            </div>
        
        <div className="text-center mt-6">
        <button
          onClick={toggleView}
          className="bg-orange-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
        >
          {showAll ? "Show Less" : "Show All"}
        </button>
      </div>
        </div>
    )
}
export default MyCraftItems;