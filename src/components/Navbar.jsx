import { TbBrandMinecraft } from "react-icons/tb";
import { IoIosLogIn } from "react-icons/io";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { MdOutgoingMail } from "react-icons/md";
import { getAuth } from "firebase/auth";

// const auth = getAuth();


const Navbar = ()=>{
  const {user, logOut} = useContext(AuthContext)
  console.log(user)

  const handleLogOut = ()=>{
    logOut()
    .then(()=> console.log("user logout successfully"))
    .then(error=> console.log(error))
  }
    return(
        <div>
<div className="navbar bg-base-100 border border-green-300">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><Link className="font-semibold" to="/">Home</Link></li>
      {
        user && <>
      <li><Link className="font-semibold" to="/allArt">All Art & Craft</Link></li>
      <li><Link className="font-semibold" to="/addItem">Add Craft Item</Link></li>
      <li><Link className="font-semibold" to="/myCart">My Cart Item</Link></li>
        </>
      }
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Sornali <span className="text-orange-500">Craft</span> <TbBrandMinecraft 
    className="text-[#e6c647] text-3xl"/></a>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><Link className="font-semibold" to="/">{user ? "Home" : "Home"}</Link></li>
      <li><Link className="font-semibold" to="/allArt">{user ? "AllArt Craft":"AllArt Craft"}</Link></li>
      <li><Link className="font-semibold" to="/addItem">{user ? "Add Craft Items" : "Add Craft Items"}</Link></li>
      <li><Link className="font-semibold" to="/myCart">{user ? "My Cart Items": "My Cart Items"}</Link></li>
     
      {
        user && <>
     
        </>
      }
     
       
      
    </ul>
  </div>
  <div className="navbar-end space-x-5 mx-10">
    {
      user ? <div className="flex  space-x-4">
        <button className="btn bg-blue-400 rounded-lg">
          {user ? <span className="text-white">
          {user.displayName}</span> : <></>}
        </button>
        <button className="btn rounded-lg text-white bg-[#d9a925] font-bold" onClick={handleLogOut}>Sign Out</button>
      </div> : <>
      
      <button className="border border-[#d9a925] text-[12px] md:text-[14px] lg:text-[16px] 
  hover:bg-success hover:text-white font-medium px-4 py-2 md:px-6 md:py-3 
  rounded-lg flex items-center space-x-3">
    <IoIosLogIn className="text-[16px] md:text-[18px] lg:text-[20px] font-bold"/>
    <Link to="/login">Log In</Link>
</button>

<button className="border border-[#d9a925] text-[12px] md:text-[14px] lg:text-[16px] 
  hover:bg-success hover:text-white font-medium px-4 py-2 md:px-6 md:py-3 
  rounded-lg flex items-center space-x-3">
    <IoIosLogIn className="text-[16px] md:text-[18px] lg:text-[20px] font-bold"/>
    <Link to="/register">Register</Link>
</button>

      </>
    }
  

  
  </div>
</div>
        </div>
    )
}
export default Navbar;