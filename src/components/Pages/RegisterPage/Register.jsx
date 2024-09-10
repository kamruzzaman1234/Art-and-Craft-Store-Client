import { useContext, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { updateProfile } from "firebase/auth";
import { Link } from "react-router-dom";


const Register = () => {
  const [show, setShow] = useState(false)
  const {createUser, emailVerification} = useContext(AuthContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target 
    const name = form.name.value
    const email = form.email.value 
    const password = form.password.value 
    const accepted = form.terms.checked
   
    if(password.length < 6){
      toast('Please should be at least 6 character or longer ')
      return;
    }else if(!/[A-Z]/.test(password)){
      toast('Your Password should have at least one upper case characters')
      return;
    }else if(!accepted){
      toast('Please accept our terms and condition')
      return;
    }

    console.log(name, email, password, accepted)
    createUser(email, password)
    .then(result=>{
      console.log(result.user)


      toast('Register Successfully')
      // Update Profile 
      updateProfile(result.user, {
        displayName: name ,
        photoURL: "https://example.com/jane-q-user/profile.jpg"
      })
      .then(()=> console.log('Profile Update'))
      .catch(error=> console.log(error.message))
      
      emailVerification(result.user)
      .then(()=>{
        toast('Please check your email and verified your account')
      })
      .catch(error=>{
        toast(error.message)
      })
      form.reset()
    })
    .catch(error=>{
      console.log(error.message)
      toast('Email already used')
      form.reset()
    })
    
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-6">
      <ToastContainer></ToastContainer>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-md">
        <div className="bg-cover bg-center h-56" style={{ backgroundImage: `url("../../../.././img/pic1.jpg")` }}></div>
        <div className="p-8">
          <h2 className="text-2xl font-bold text-gray-800 text-center">Register for Art & Craft</h2>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <label className="text-gray-700">Name</label>
              <input type="text" name="name" placeholder="Enter Your Name"
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent" />
            </div>
            <div className="relative">
              <label className="text-gray-700">Email</label>
              <input type="email" name="email" placeholder="Enter Your Email"
               className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent" />
            </div>
            <div className="relative">
              <label className="text-gray-700">Password</label>
              <input type={show ? "type" : "password"} name="password" placeholder="Enter Your Password"
               className="w-full px-3 py-2 mt-1
                border border-gray-300 rounded-md focus:outline-none focus:ring-2
                 focus:ring-purple-500 focus:border-transparent" />
                 <div className="absolute right-2 top-10">
                <span onClick={()=> setShow(!show)}>
                  {show ? <FaEyeSlash/> : <FaEye/>}
                </span>
            </div>
            </div>
            <div className="relative flex items-center space-x-4">
            <input
              type="checkbox"
              name="terms"
              id="terms"
              className=""
              placeholder=" "
              required
            />
            <label className="">
                Accept Our terms and Condition
            </label>
          </div>
            <div className="relative">
              <button type="submit"
               className="w-full py-2 bg-purple-500 text-white rounded-md
                hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50">Register</button>
            </div>
            <div className="relative">
              <p className="font-bold">Already Register || Please <Link to="/login" className="ml-2 p-1 rounded-lg bg-purple-300 text-white">Login</Link> </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
