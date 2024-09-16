const FaQ = ()=>{
    return(
        <div className="my-10 mx-10 rounded-lg p-5 bg-orange-50 ">
            <div className="mb-6">
                <h2 className="text-3xl font-semibold mb-3">Got Question? Lets Up Help</h2>
                <p>Welcome to our FAQ section! Here, you will find answers to common questions about our Art & Craft Store. Whether you are curious about editing craft data, using our personal craft feature, 
                or other aspects of our store, we are here to provide guidance and support. </p>
            </div>
            <div className="space-y-5 my-10">
    <div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" defaultChecked />
  <div className="collapse-title text-xl font-semibold">1.How can I Edit the details of a craft item ?</div>
  <div className="collapse-content">
    <p>To edit the details of a craft item, simply log in to your account and navigate to the My Crafts section.
     From there, you can select the craft item you wish to edit and update its information, such as the image,
      name, description, price, 
    and other relevant details. Remember to save your changes after making updates.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-semibold">2.What is the personal craft feature, and how does it work?</div>
  <div className="collapse-content">
<p>Our personal craft feature allows you to showcase your own creative projects on our
 platform. Simply log in to your account and navigate to the Add Craft section. 
 Upload an image of your craft, provide a name, description, and other relevant details, 
 and submit it to be
 featured on our website. Share your artistic talents with the world!</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-semibold">3. Can I customize craft items to suit my preferences?</div>
  <div className="collapse-content">
    <p>
Yes, many of our craft items offer customization options to cater to your unique preferences. Look for products marked with the Customizable label, and follow the instructions to personalize your order. Whether its adding a special message, choosing specific colors, or requesting a custom design, 
we are here to bring your vision to life.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-semibold">4. Is the website responsive for mobile devices?</div>
  <div className="collapse-content">
    <p>Yes, the website is fully responsive and optimized for mobile devices. You can enjoy the same seamless experience
 on your smartphone or tablet as you would on a desktop computer.</p>
  </div>
</div>
            </div>
        </div>
    )
}
export default FaQ;