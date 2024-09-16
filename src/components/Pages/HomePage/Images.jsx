const Images = () => {
  return (
    <div className="mx-4 sm:mx-6 md:mx-10 my-10 bg-yellow-50 p-4 sm:p-6 md:p-10">
      <div className="flex justify-center items-center flex-col space-y-3 mb-6">
        <h3 className="text-2xl sm:text-3xl font-bold">Discover Artistic Categories</h3>
        <p className="text-center text-sm sm:text-base">
          Whether you are passionate about card making, scrapbooking, paper quilling, 
          <br className="hidden sm:block" />
          origami, glass painting, lampworking, or glass dying & staining, 
          you will find endless inspiration here.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img src="../../../../././img/pic1.jpg" alt="Handwoven Bamboo Baskets" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Handwoven Bamboo Baskets</h2>
            <p>
              Sturdy and stylish baskets crafted from bamboo, ideal for home organization 
              or as a decorative piece with a rustic vibe.
            </p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img src="../../../../././img/pic2.jpg" alt="Blooming Floral Resin Coasters" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Blooming Floral Resin Coasters</h2>
            <p>
              Elegant coasters made from resin and pressed flowers, bringing nature 
              into your living space with a touch of art.
            </p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img src="../../../../././img/pic3.jpg" alt="Color Pencil Art Canvas" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Color Pencil Art Canvas</h2>
            <p>
              Create a vibrant artwork by drawing directly on canvas using color pencils, 
              blending different shades to create a unique textured masterpiece.
            </p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img src="../../../../././img/pic4.jpg" alt="Color Pencil Art Canvas" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Color Pencil Art Canvas</h2>
            <p>
              Create a vibrant artwork by drawing directly on canvas using color pencils, 
              blending different shades to create a unique textured masterpiece.
            </p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img src="../../../../././img/pic5.jpg" alt="Color Pencil Art Canvas" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Color Pencil Art Canvas</h2>
            <p>
              Create a vibrant artwork by drawing directly on canvas using color pencils, 
              blending different shades to create a unique textured masterpiece.
            </p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img src="../../../../././img/pic6.jpg" alt="Color Pencil Art Canvas" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Color Pencil Art Canvas</h2>
            <p>
              Create a vibrant artwork by drawing directly on canvas using color pencils, 
              blending different shades to create a unique textured masterpiece.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Images;
