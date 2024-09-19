import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const AllItems = ({ allItem }) => {
  const { _id, image_url, craft_name, category, processing_time, description, price, rating } = allItem;
  const { user } = useContext(AuthContext);

  return (
    <div className="mx-4 my-6 ">
      <div className="card bg-base-100 shadow-xl px-4 py-4">
        <figure>
          <img
            src={image_url}
            className="w-full h-[300px] object-cover"
            alt={craft_name}
          />
        </figure>

        <div className="mt-4 space-y-2">
          <h2 className="font-semibold text-[22px] sm:text-[18px] md:text-[20px]">{craft_name}</h2>
          <p className="text-[14px] sm:text-[16px] md:text-[17px] my-3">{description}</p>
          <h4 className="font-semibold text-[16px] sm:text-[18px] md:text-[20px]">
            Category: <span className="font-medium ">{category}</span>
          </h4>
          {/* <h4 className="font-semibold text-[16px] sm:text-[18px] md:text-[20px]">
            Processing Time: <span className="font-medium">{processing_time} days</span>
          </h4>
          <h4 className="font-semibold text-[16px] sm:text-[18px] md:text-[20px]">
            Price: $ <span className="text-orange-600 text-[20px] sm:text-[22px] md:text-[24px] font-medium">{price}</span>
          </h4>
          <h4 className="font-semibold text-[16px] sm:text-[18px] md:text-[20px]">
            Rating: <span className="font-medium">{rating} out of 5</span>
          </h4> */}
        </div>

        <div>
          <Link
            to={`/viewProduct/${_id}`}
            className="btn btn-block text-white my-3 bg-green-400 text-[14px] sm:text-[16px] md:text-[18px]"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllItems;
