import { useLoaderData } from "react-router-dom";
import { useState } from "react";

const ViewProduct = () => {
  const viewPr = useLoaderData();
  const { _id, image_url, craft_name, user_displayName, user_email, category, stock_status , description, rating, price } = viewPr;
  
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    const value = Math.max(1, Number(e.target.value));
    setQuantity(value);
  };

  const totalPrice = (price * quantity).toFixed(2);

  return (
    <div className="max-w-4xl my-10 mx-auto bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden flex hover:shadow-lg transition-shadow duration-300 ease-in-out">
      <img
        className="w-[40%] h-full object-fill"
        src={image_url}
        alt="Product"
      />
      <div className="p-6 flex-1">
        <h3 className="text-gray-900 font-bold text-3xl mb-2">{craft_name}</h3>
        <p>{description}</p>
        <h2 className="divider font-bold text-2xl"> Items Details </h2>
        <div className="flex items-center justify-between mb-4">
          <span className="text-xl font-semibold">Price : $ <span className="text-orange-500">{price}</span></span>
          
        </div>
        <div>
        <span className="text-xl font-semibold ">
          
          Rating : <span className="text-yellow-500">{rating} </span> out of 5</span>
        </div>
        <p className="text-gray-600 text-sm mb-4">
          {description}
        </p>
        <div className="flex items-center mb-4">
          <label className="mr-2 font-medium text-gray-700">Quantity:</label>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={handleQuantityChange}
            className="w-16 px-2 py-1 border rounded-md text-center"
          />
        </div>
        <div className="mb-4">
          <span className="text-lg font-semibold text-gray-900">Total: ${totalPrice}</span>
        </div>
        <div className="">
          <h2 className="divider font-bold text-2xl">User Info</h2>
          <h2>User Name : {user_displayName}</h2>
          <h2>User Email : {user_email}</h2>

        </div>
      </div>
    </div>
  );
};

export default ViewProduct;
