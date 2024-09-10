import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
const Footer = ()=>{
    return(
        <section className="px-16 bg-black py-20">
            <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-4">
                <div className="text-white">
                    <h2 className="font-bold text-2xl">Shop By Category</h2>
                    <ul className="mt-3">
                        <li><Link to="">Shop Home</Link></li>
                        <li><Link to="">Mens</Link></li>
                        <li><Link to="">Women</Link></li>
                        <li><Link to="">Kids</Link></li>
                        <li><Link to="">Classics</Link></li>
                    </ul>
                </div>
                <div className="text-white">
                    <h2 className="font-bold text-2xl">SPORTS</h2>
                    <ul className="mt-3">
                        <li><Link to="">BMX</Link></li>
                        <li><Link to="">Snow</Link></li>
                        <li><Link to="">Surf</Link></li>
                        <li><Link to="">Womans Surf</Link></li>
                        <li><Link to="">Skate</Link></li>
                    </ul>
                </div>
                <div className="text-white">
                    <h2 className="font-bold text-2xl">SUPPORTS</h2>
                    <ul className="mt-3">
                        <li><Link to="">Store Locator</Link></li>
                        <li><Link to="">Order Status</Link></li>
                        
                    </ul>
                </div>
                <div className="text-white">
                    <h2 className="font-bold text-2xl">COMPANY</h2>
                    <ul className="mt-3">
                        <li><Link to="">Customer Service</Link></li>
                        <li><Link to="">Privacy Policy</Link></li>
                        <li><Link to="">Careers</Link></li>
                        <li><Link to="">About</Link></li>
                        <li><Link to="">Recall Into</Link></li>
                        <li><Link to="">Sa Supply Chain Act</Link></li>
                    </ul>
                </div>

                <div className="text-white">
                    <h2 className="font-bold text-2xl">CONTACT</h2>
                    <div className="mt-5">
                        <h3 className="font-bold">Email</h3>
                        <Link to="" className="text-blue-700">kamruzzamancse22@gmail.com</Link>
                    </div>
                    <div className="mt-5">
                    <h3 className="font-bold">Telephone</h3>
                        <Link to="" className="text-blue-700">01935024654</Link>
                    </div>
                    <div className="mt-5">
                    <h3 className="font-bold">Address</h3>
                        <Link to="" className="text-blue-700">Ashulia, Dhaka</Link>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-5 mt-5">
                <div className="text-white ">
                    <h3 className="font-bold text-3xl mb-3">STORE LOCATOR</h3>
                    <p className="mb-5">Find a van store near you</p>
                    <Link className="p-4 bg-red-500 text-white font-bold">Find a Store</Link>
                </div>
                <div className="text-white">
                    <h3 className="font-bold text-2xl">FOLLOW VANS</h3>
                    <ul className="flex gap-3 mt-3">
                        <li><Link><FaFacebook/></Link></li>
                        <li><Link><FaFacebook/></Link></li>
                        <li><Link><FaFacebook/></Link></li>
                        <li><Link><FaFacebook/></Link></li>
                        <li><Link><FaFacebook/></Link></li>
                    </ul>
                </div>
                <div className="text-white space-y-4">
                    <h3 className="font-bold text-2xl">SUBSCRIBE</h3>
                    <div>
                        <p className="mb-3">Receive Product news and update in your company </p>
                        <input type="email" placeholder="Email Address"
                         className="input input-bordered w-full"/>
                    </div>
                </div> 

            </div>
        </section>
    )
}
export default Footer;