import { useLoaderData } from "react-router-dom";
import { useState } from "react";

const ViewProduct = () => {
  const viewPr = useLoaderData();
  const { _id, image_url, product_name, description, rating, price } = viewPr;
  
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    const value = Math.max(1, Number(e.target.value));
    setQuantity(value);
  };

  const totalPrice = (price * quantity).toFixed(2);

  return (
    <div className="max-w-4xl my-10 mx-auto bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden flex hover:shadow-lg transition-shadow duration-300 ease-in-out">
      <img
        className="w-1/3 h-full object-cover"
        src={image_url}
        alt="Product"
      />
      <div className="p-6 flex-1">
        <h3 className="text-gray-900 font-bold text-2xl mb-2">{product_name}</h3>
        <div className="flex items-center justify-between mb-4">
          <span className="text-xl font-semibold text-red-600">${price}</span>
          <span className="text-sm text-gray-500 line-through">$59.99</span>
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
        <div className="flex space-x-4">
          <button className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200">
            Add to Cart
          </button>
          <button className="flex-1 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-200">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;
