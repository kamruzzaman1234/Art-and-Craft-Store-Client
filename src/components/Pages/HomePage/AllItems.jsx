const AllItems = ({allItem})=>{
    const {_id, image_url, product_name, description, price, rating} = allItem 
    return(
        <div className="">
        <div className="card bg-base-100  shadow-xl">
          <figure>
            <img
              src={image_url} className="w-full h-[400px]"
              alt="Shoes" />
          </figure>
         
        </div>
                </div>
    )
}
export default AllItems;