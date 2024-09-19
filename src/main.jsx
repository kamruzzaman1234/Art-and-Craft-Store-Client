import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Main.jsx';
import Home from './components/Pages/HomePage/Home.jsx';
import Register from './components/Pages/RegisterPage/Register.jsx';
import LoginPage from './components/Pages/LoginPage/Login.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import PrivetRoute from './PrivetRoute/PrivetRoute.jsx';
import AddCraftItem from './components/Pages/AddItemCraft/AddCraftItem.jsx';
import AllArtCraft from './components/Pages/AllArt&Craft/AllArt&Craft.jsx';
import UpdateProduct from './components/Pages/UpdateProduct/UpdateProdroduct.jsx';
import ViewProduct from './components/Pages/UpdateProduct/ViewProduct.jsx';
import MyCraftItems from './components/Pages/MyCraftItems/MyCraftItems.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader: ()=> fetch('https://art-craft-store-server-1.onrender.com/addProduct')
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/login",
        element: <LoginPage></LoginPage>
      },
      {
        path:"/addItem",
        element: <PrivetRoute> <AddCraftItem></AddCraftItem> </PrivetRoute>
      },
      {
        path:"/myCart",
        element: <PrivetRoute> <MyCraftItems></MyCraftItems> </PrivetRoute>,
        loader: ()=> fetch('https://art-craft-store-server-1.onrender.com/addProduct')
      },
      {
        path: "/allArt",
        element: <PrivetRoute> <AllArtCraft></ AllArtCraft> </PrivetRoute>,
        loader: ()=>  fetch('https://art-craft-store-server-1.onrender.com/addProduct')
      },
      {
        path: "/update/:id",
        element:<PrivetRoute> <UpdateProduct></UpdateProduct></PrivetRoute>,
        loader: ({params})=> fetch(`https://art-craft-store-server-1.onrender.com/addProduct/${params.id}`)
      },
      {
        path:"/viewProduct/:id",
        element:<PrivetRoute><ViewProduct></ViewProduct></PrivetRoute>,
        loader:({params})=> fetch(`https://art-craft-store-server-1.onrender.com/addProduct/${params.id}`)
      }
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
         <RouterProvider router={router} />
      </AuthProvider>
  </React.StrictMode>,
)
