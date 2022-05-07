import { Link } from "react-router-dom";
import { useState } from 'react';
import mainlogo from './assets/mainlogo.webp';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false) ;

  return (
    <nav className="py-2">
      <div className="container relative">
        <div className="parent block lg:flex justify-between py-2">
          <Link to='./' className="logo lg:py-0 sm:py-2">
            <img src={mainlogo} />
          </Link>
          <div className="list lg:block sm:my-4 lg:my-0" >
            <ul className={isMobile?"nav-links-mobile": "nav-links"}>
              <li className="lg:mx-4 my-3 lg:my-0">
                <Link to="/" className=" block text-base hover:text-indigo-500 font-bold text-gray-700"> Home </Link>
              </li>
              <li className="lg:mx-4 my-3 lg:my-0">
                <Link to="/shop" className=" block text-base hover:text-indigo-500 font-bold text-gray-700"> Shop </Link>
              </li>
              <li className="lg:mx-4 my-3 lg:my-0">
                <Link to="/blog" className=" block text-base hover:text-indigo-500 font-bold text-gray-700"> Blog </Link>
              </li>
              <li className="lg:mx-4 my-3 lg:my-0">
                <Link to="/about" className=" block text-base hover:text-indigo-500 font-bold text-gray-700"> About </Link>
              </li>
              <li className="lg:mx-4 my-3 lg:my-0">
                <Link to="/contact" className=" block text-base hover:text-indigo-500 font-bold text-gray-700"> Contact </Link>
              </li>
            </ul>
          </div>
          <div className="extra text-3xl" >
            <Link to='./Cart' id='btn-like' className={isMobile? "extra-mobile":"extra-web" }> <i class="ri-shopping-cart-2-fill"></i> </Link>
          </div>
        </div>
        <div className="mobile-menu-icon cursor-pointer absolute top-0 right-0 text-3xl font-bold" onClick={() => {setIsMobile(!isMobile)}} >
        {isMobile? <i class="ri-close-fill"></i> : <i class="ri-menu-fill"></i>}
        </div>
      </div>
    </nav>
  );
}
 
export default Navbar;