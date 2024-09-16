import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import AllItems from "./AllItems";
import Images from "./Images";
import FaQ from "./FaQ";


const Home = ()=>{
    const {user} = useContext(AuthContext);
    const allItems = useLoaderData()
    const [craft, setCraft] = useState(allItems)
    const [visibleCount, setVisibleCount] = useState(3);
    const [showAll, setShowAll] = useState(false)

    const toggleView = ()=>{
      if(showAll){
        setVisibleCount(3)
      }else{
        setVisibleCount(craft.length)
      }
      setShowAll(!showAll)
    }
    

    return(
        <>
        {
          user && <div className="container mx-auto px-5 ">
        <div className="py-20 flex justify-center flex-col items-center space-y-5"
                 style={{ backgroundImage: `url("../../../.././img/pic6.jpg")`, 
                 backgroundSize: "cover", backgroundPosition:"center center", backgroundAttachment:"fixed"}}>
<div>
<div className="join shadow-lg">
  <div>
    <div>
      <input className="input input-bordered join-item" placeholder="Search" />
    </div>
  </div>
  <select className="select select-bordered join-item font-bold">
    <option disabled selected className="">Sub Category</option>
    <option>Art & Crafting Tools</option>
    <option>Art & Crafting Tool Accessories</option>
    <option>Craft Organizing </option>
    <option>Art and Craft kids</option>

  </select>
  <div className="indicator">
    {/* <span className="indicator-item badge badge-secondary">new</span> */}
    <button className="btn join-item text-white bg-orange-400 rounded-lg">Search</button>
  </div>
</div>
                    </div>
                <div className="text-center">
                    <h2 className="text-[60px] text-white font-bold">WELCOME TO <br />
                     CRAFT<span className="text-orange-500">ECLIPS</span> </h2>
                     <p className="px-32 text-white mb-10">Indulge in the artistry of handmade treasures and unleash your creativity with CraftEclipse. Explore a curated collection of paper crafts and glass art, personalize your own creations, and join our vibrant
                     community of artisans. Let us craft something beautiful together!</p>
                    <Link className="btn btn-orange-400 bg-orange-400 text-white">Get Started</Link>
                 </div>
</div>

               
          </div>  
        }

{/* Slider area */}
       
    <div className="bg-slate-200">
  <div className="carousel w-full h-[100vh]">
    <div id="slide1" className="carousel-item relative w-full h-[100vh]">
      <div className="flex flex-col items-center absolute top-[14%] transform -translate-x-1/2 left-1/2">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 md:gap-6 lg:gap-8">
          <div>
            <img src="/./img/t1.jpg" alt="" className="h-[200px] md:h-[300px] lg:h-[400px] duration-[2s] rounded-lg border border-[#e6c647]" />
          </div>
          <div>
            <img src="/./img/t2.jpg" alt="" className="object-cover h-[200px] md:h-[300px] lg:h-[400px] duration-[2s] rounded-lg border-[#e6c647]" />
          </div>
          <div>
            <img src="/./img/t3.jpg" alt="" className="object-cover h-[200px] md:h-[300px] lg:h-[400px] duration-[2s] rounded-lg border border-[#e6c647]" />
          </div>
        </div>
      </div>
      <div className="absolute flex justify-between transform px-8 md:px-16 lg:px-24 -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide5" className="btn btn-circle border border-[#e6c647]">❮</a>
        <a href="#slide2" className="btn btn-circle border border-[#e6c647]">❯</a>
      </div>
    </div>

    <div id="slide2" className="carousel-item relative w-full h-[100vh]">
      <div className="flex flex-col items-center absolute top-[14%] transform -translate-x-1/2 left-1/2">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 md:gap-6 lg:gap-8">
          <div>
            <img src="/./img/t4.jpg" alt="" className="h-[200px] md:h-[300px] lg:h-[400px] duration-[2s] rounded-lg border border-[#e6c647]" />
          </div>
          <div>
            <img src="/./img/t5.jpg" alt="" className="object-cover h-[200px] md:h-[300px] lg:h-[400px] duration-[2s] rounded-lg border-[#e6c647]" />
          </div>
          <div>
            <img src="/./img/t6.jpg" alt="" className="object-cover h-[200px] md:h-[300px] lg:h-[400px] duration-[2s] rounded-lg border border-[#e6c647]" />
          </div>
        </div>
      </div>
      <div className="absolute flex justify-between transform px-8 md:px-16 lg:px-24 -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide1" className="btn btn-circle border border-[#e6c647]">❮</a>
        <a href="#slide3" className="btn btn-circle border border-[#e6c647]">❯</a>
      </div>
    </div>

    <div id="slide3" className="carousel-item relative w-full h-[100vh]">
      <div className="flex flex-col items-center absolute top-[14%] transform -translate-x-1/2 left-1/2">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 md:gap-6 lg:gap-8">
          <div>
            <img src="/./img/t7.jpg" alt="" className="h-[200px] md:h-[300px] lg:h-[400px] duration-[2s] rounded-lg border border-[#e6c647]" />
          </div>
          <div>
            <img src="/./img/t8.jpg" alt="" className="object-cover h-[200px] md:h-[300px] lg:h-[400px] duration-[2s] rounded-lg border-[#e6c647]" />
          </div>
          <div>
            <img src="/./img/t9.jpg" alt="" className="object-cover h-[200px] md:h-[300px] lg:h-[400px] duration-[2s] rounded-lg border border-[#e6c647]" />
          </div>
        </div>
      </div>
      <div className="absolute flex justify-between transform px-8 md:px-16 lg:px-24 -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide2" className="btn btn-circle border border-[#e6c647]">❮</a>
        <a href="#slide4" className="btn btn-circle border border-[#e6c647]">❯</a>
      </div>
    </div>

    <div id="slide4" className="carousel-item relative w-full h-[100vh]">
      <div className="flex flex-col items-center absolute top-[14%] transform -translate-x-1/2 left-1/2">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 md:gap-6 lg:gap-8">
          <div>
            <img src="/./img/t10.jpg" alt="" className="h-[200px] md:h-[300px] lg:h-[400px] duration-[2s] rounded-lg border border-[#e6c647]" />
          </div>
          <div>
            <img src="/./img/t3.jpg" alt="" className="object-cover h-[200px] md:h-[300px] lg:h-[400px] duration-[2s] rounded-lg border-[#e6c647]" />
          </div>
          <div>
            <img src="/./img/t4.jpg" alt="" className="object-cover h-[200px] md:h-[300px] lg:h-[400px] duration-[2s] rounded-lg border border-[#e6c647]" />
          </div>
        </div>
      </div>
      <div className="absolute flex justify-between transform px-8 md:px-16 lg:px-24 -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide3" className="btn btn-circle border border-[#e6c647]">❮</a>
        <a href="#slide5" className="btn btn-circle border border-[#e6c647]">❯</a>
      </div>
    </div>

    <div id="slide5" className="carousel-item relative w-full h-[100vh]">
      <div className="flex flex-col items-center absolute top-[14%] transform -translate-x-1/2 left-1/2">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 md:gap-6 lg:gap-8">
          <div>
            <img src="/./img/t6.jpg" alt="" className="h-[200px] md:h-[300px] lg:h-[400px] duration-[2s] rounded-lg border border-[#e6c647]" />
          </div>
          <div>
            <img src="/./img/t7.jpg" alt="" className="object-cover h-[200px] md:h-[300px] lg:h-[400px] duration-[2s] rounded-lg border-[#e6c647]" />
          </div>
          <div>
            <img src="/./img/t3.jpg" alt="" className="object-cover h-[200px] md:h-[300px] lg:h-[400px] duration-[2s] rounded-lg border border-[#e6c647]" />
          </div>
        </div>
      </div>
      <div className="absolute flex justify-between transform px-8 md:px-16 lg:px-24 -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide4" className="btn btn-circle border border-[#e6c647]">❮</a>
        <a href="#slide1" className="btn btn-circle border border-[#e6c647]">❯</a>
      </div>
    </div>
  </div>
</div>



       <div className="container mx-auto py-10 px-10">
        <div className="my-5 flex justify-center items-center">
        <h2 className="text-3xl after:first-line:selection: font-bold">Our Craft Items</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-5 mx-10">
            {
              craft.slice(0, visibleCount).map(allItem=> 
              <AllItems key={allItem._id} allItem={allItem}></AllItems>)
            }
          </div>
          <div className="text-center mt-6">
        <button
          onClick={toggleView}
          className="bg-orange-500 text-white font-bold py-2 px-4 rounded hover:bg-orange-700"
        >
          {showAll ? "Show Less" : "Show All"}
        </button>
      </div>
       
       </div>
       <div className="mx-10">
            <Images></Images>
       </div>
       <div className="mx-10">
            <FaQ></FaQ>
       </div>
        </>
        
    
    )
}
export default Home;