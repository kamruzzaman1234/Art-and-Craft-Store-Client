// import { useContext, useRef, useState } from 'react';
// import { FaGoogle, FaGithub, FaTwitter } from 'react-icons/fa';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { AuthContext } from "../../Provider/AuthProvider";
// import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { useContext, useState, useRef } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {FaEye, FaEyeSlash} from 'react-icons/fa';
import {FaGoogle, FaGithub, FaTwitter} from 'react-icons/fa';
import { useLocation, useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup,GithubAuthProvider,TwitterAuthProvider } from "firebase/auth";
import auth from "../../../Firebase/Firebase.config";

import { getAuth } from "firebase/auth";



const LoginPage = () => {
  const [show, setShow] = useState(false)
  const emailRef = useRef()
  const {signIN, resetEmail} = useContext(AuthContext);
const location = useLocation()
const navigate = useNavigate()

const gProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()
const twitterProvider = new TwitterAuthProvider();

const handleTwitterLogin = () => {
  const auth = getAuth();

  signInWithPopup(auth, twitterProvider)
    .then((result) => {
  
      const user = result.user;
      console.log(user);

      navigate(location?.state ? location.state : '/');
    })
    .catch((error) => {
      console.log(error.message);
    });
};
const handleGithubLogin = () => {
  const auth = getAuth();
  
  signInWithPopup(auth, githubProvider)
    .then((result) => {
      
      const user = result.user;
      console.log(user);
    
      navigate(location?.state ? location.state : '/');
    })
    .catch((error) => {
  
      console.log(error.message);
    });
};

const handleEmail = ()=>{
  signInWithPopup(auth, gProvider)
  console.log(signInWithPopup(auth, gProvider))
  .then(result=>{
    const user =result.user
    console.log(user)
    navigate(location?.state ? location.state:'/')
  })
  .catch(error=>{
    console.log(error.message)
  })
}

  const handleSubmit = (e)=>{
      e.preventDefault()
      const form = e.target 
      const email = form.email.value 
      const password = form.password.value 

      console.log(email, password)
      
      signIN(email, password)
      .then(result=>{
        if(result.user.emailVerified){
          toast("Login Successfully")
          form.reset()
          navigate(location?.state ? location.state:'/')
          
        }else{
          alert('Please verified your account')
        }
          
          
      })
      .catch(error=>{
          console.log(error.message)
          toast(error.message)
      })
  }

  const handleResetPass = ()=>{
    const email = emailRef.current.value 
    if(!email){
      toast('Please Provide an Email', emailRef.current.value)
      return
    }else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)){
      console.log('Please write a valid email')
      toast('Please write a valid email')
      return
    }

    resetEmail(email)
    .then(()=>{
      toast("Please Check Your email")
    })
    .catch(error=>{
      toast(error.message)
    })

      console.log('Send Your email', emailRef.current.value)

    }
  
  return (
    <div className="min-h-screen flex flex-col items-center 
    justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-6">
      <ToastContainer></ToastContainer>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-md">
        <div className="bg-cover bg-center h-56" style={{ backgroundImage: `url("../../../.././img/pic1.jpg")` }}></div>
        <div className="p-8">
          <h2 className="text-2xl font-bold text-gray-800 text-center">Login to Art & Craft</h2>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <label className="text-gray-700">Email</label>
              <input type="email" ref={emailRef}
               name="email" className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent" />
            </div>
            <div className="relative">
              <label className="text-gray-700">Password</label>
              <input type={show ? "type" : "password"}
               name="password" className="w-full 
              px-3 py-2 mt-1 border border-gray-300 rounded-md
               focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent" />
                <div className="absolute right-2 top-10">
                <span onClick={()=> setShow(!show)}>
                  {show ? <FaEyeSlash/> : <FaEye/>}
                </span>
            </div>
            
          <div className="relative flex items-center space-x-4">
                <span className="underline cursor-pointer" onClick={handleResetPass}>Forget Password </span>
          </div>
            </div>
            <div className="relative">
              <button type="submit" className="w-full py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50">Login</button>
            </div>
          </form>
          <div className="mt-6">
            <div className="text-center text-gray-600 mb-4">Or login with</div>
            <div className="flex justify-center space-x-4">
              <button className="flex items-center px-4 py-2
               bg-red-500 text-white rounded-md
                hover:bg-red-600 focus:outline-none 
                focus:ring-2 focus:ring-red-500 
                focus:ring-opacity-50" onClick={handleEmail}>
                <FaGoogle className="mr-2"/> Gmail
              </button>
              <button className="flex items-center px-4
               py-2 bg-gray-800 text-white 
               rounded-md hover:bg-gray-900
                focus:outline-none focus:ring-2
                 focus:ring-gray-800 focus:ring-opacity-50" onClick={handleGithubLogin}>
                <FaGithub className="mr-2" /> GitHub
              </button>
              <button className="flex items-center px-4 py-2
               bg-blue-500 text-white rounded-md
                hover:bg-blue-600 focus:outline-none 
                focus:ring-2 focus:ring-blue-500 
                focus:ring-opacity-50" onClick={handleTwitterLogin}>
                <FaTwitter className="mr-2" /> Twitter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
