import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import AllItems from "./AllItems";


const Home = ()=>{
    const {user} = useContext(AuthContext);
    const allItems = useLoaderData()
    

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
                    <h2 className="text-[60px] text-white font-bold">GET START <br /> YOUR FAVOURITE SHOOPING  </h2>
                    <Link className="btn btn-orange-400 bg-orange-400 text-white">GET SHOP</Link>
                 </div>
</div>

               
          </div>  
        }

        <div className="bg-slate-200">
            <div className="carousel w-full h-100vh">
  <div id="slide1" className="carousel-item relative w-full">
           
       <div className="flex flex-col 
       items-center absolute top-[14%] 
       transform -translate-x-1/2 left-1/2">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-8">
                <div>
                <img src="/./img/t1.jpg" alt="" className="h-[300px] duration-[2s]
                rounded-lg  border border-[#e6c647]"/>
                </div>
                <div>
                <img src="/./img/t2.jpg" alt="" className=" object-cover duration-[2s]
                 h-[300px]  rounded-lg border-[#e6c647]"/>
                </div>
                <div>
                <img src="/./img/t3.jpg" alt="" className="object-cover rounded-lg
                 duration-[2s] border border-[#e6c647]
                 h-[300px]"/>
                </div>
            </div>
            <div>
                
            </div>
        </div> 

    <div className="absolute flex justify-between transform px-16
     -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle border border-[#e6c647]">❮</a> 
      <a href="#slide2" className="btn btn-circle border border-[#e6c647]">❯</a>
    </div>
  </div> 
  
  <div id="slide2" className="carousel-item relative w-full h-[550px]">
  <div className="flex flex-col 
       items-center absolute top-[14%] 
       transform -translate-x-1/2 left-1/2">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
                <div>
                <img src="/./img/t4.jpg" alt="" className="h-[300px] duration-[2s]
                rounded-lg border border-[#e6c647]"/>
                </div>
                <div>
                <img src="/./img/t5.jpg" alt="" className=" object-cover duration-[2s]
                 h-[300px] rounded-lg border-[#e6c647]"/>
                </div>
                <div>
                <img src="/./img/t6.jpg" alt="" className="object-cover rounded-lg
                 duration-[2s]  border border-[#e6c647]
                 h-[300px]"/>
                </div>
            </div>
            <div>
                
            </div>
        </div> 
    <div className="absolute flex justify-between transform px-16
     -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle border border-[#e6c647]">❮</a> 
      <a href="#slide3" className="btn btn-circle border border-[#e6c647]">❯</a>
    </div>
  </div> 

  <div id="slide3" className="carousel-item relative w-full h-[550px]">
  <div className="flex flex-col 
       items-center absolute top-[14%] 
       transform -translate-x-1/2 left-1/2">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-8">
                <div>
                <img src="/./img/t7.jpg" alt="" className="h-[300px] duration-[2s]
                rounded-lg  border border-[#e6c647]"/>
                </div>
                <div>
                <img src="/./img/t8.jpg" alt="" className=" object-cover duration-[2s]
                 h-[300px] rounded-lg border-[#e6c647]"/>
                </div>
                <div>
                <img src="/./img/t9.jpg" alt="" className="object-cover rounded-lg
                 duration-[2s]  border border-[#e6c647]
                 h-[300px]"/>
                </div>
            </div>
            <div>
                
            </div>
        </div> 
    <div className="absolute flex justify-between transform px-16
     -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle border border-[#e6c647]">❮</a> 
      <a href="#slide4" className="btn btn-circle border border-[#e6c647]">❯</a>
    </div>
  </div> 

  <div id="slide4" className="carousel-item relative w-full h-[550px]">
  <div className="flex flex-col 
       items-center absolute top-[14%] 
       transform -translate-x-1/2 left-1/2">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-8">
                <div>
                <img src="/./img/t10.jpg" alt="" className="h-[300px] duration-[2s]
                rounded-lg border border-[#e6c647]"/>
                </div>
                <div>
                <img src="/./img/t3.jpg" alt="" className=" object-cover duration-[2s]
                 h-[300px]  rounded-lg border-[#e6c647]"/>
                </div>
                <div>
                <img src="/./img/t4.jpg" alt="" className="object-cover rounded-lg
                 duration-[2s]  border border-[#e6c647]
                 h-[300px]"/>
                </div>
            </div>
            <div>
                
            </div>
        </div> 
    <div className="absolute flex justify-between transform px-16
     -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle border border-[#e6c647]">❮</a> 
      <a href="#slide5" className="btn btn-circle border border-[#e6c647]">❯</a>
    </div>
  </div> 

  <div id="slide5" className="carousel-item relative w-full h-[550px]">
  <div className="flex flex-col 
       items-center absolute top-[14%] 
       transform -translate-x-1/2 left-1/2">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-8">
                <div>
                <img src="/./img/t6.jpg" alt="" className="h-[300px] duration-[2s]
                rounded-lg  border border-[#e6c647]"/>
                </div>
                <div>
                <img src="/./img/t7.jpg" alt="" className=" object-cover duration-[2s]
                 h-[300px] rounded-lg border-[#e6c647]"/>
                </div>
                <div>
                <img src="/./img/t3.jpg" alt="" className="object-cover rounded-lg
                 duration-[2s]  border border-[#e6c647]
                 h-[300px]"/>
                </div>
            </div>
            <div className="">
                    
            </div>
        </div> 
    <div className="absolute flex justify-between transform px-16
     -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle border border-[#e6c647]">❮</a> 
      <a href="#slide1" className="btn btn-circle border border-[#e6c647]">❯</a>
    </div>
  </div> 

 
  
</div>
        </div> 
       <div className="container mx-auto py-10 px-10">
        <div className="my-5 flex justify-center items-center">
        <h2 className="text-3xl font-bold">Product</h2>
        </div>
       {
          user && <div className="grid md:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-5">
            {
              allItems.map(allItem=> 
              <AllItems key={allItem._id} allItem={allItem}></AllItems>)
            }
          </div>
        }
       </div>
        </>
        
    
    )
}
export default Home;