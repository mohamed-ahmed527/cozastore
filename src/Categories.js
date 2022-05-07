import { Link } from 'react-router-dom';
import category1 from './assets/categories/category1.webp';
import category2 from './assets/categories/category2.webp';
import category3 from './assets/categories/category3.webp';
const Categories = () => {
  return (
    <div className="container">
      <div className="categories md:flex flex-wrap justify-between md:justify-around my-10 ">
        <div className="lg:w-96 md:w-5/12 w-full box my-6 relative border-2">
          <img src={category1} alt=""  />
          <Link to="/" className="hover:bg-indigo-600 hover:bg-opacity-60 duration-1000 ease-in-out text-black hover:text-white absolute top-0 left-0 p-6 w-full h-full"> 
            <h3 className="text-3xl font-bold mb-2">Women</h3>
            <p>Spring 2018</p>
            <Link to="/shop" className="hover:underline inline-block md:mt-7 mt-12">SHOP NOW </Link>
          </Link>
        </div>
        <div className="lg:w-96 md:w-5/12 w-full box my-6 relative border-2 lg:mx-3">
          <img src={category2} alt=""  />
          <Link to="/" className="hover:bg-indigo-600 hover:bg-opacity-60 duration-1000 ease-in-out text-black hover:text-white absolute top-0 left-0 p-6 w-full h-full"> 
            <h3 className="text-3xl font-bold mb-2">Men</h3>
            <p>Spring 2018</p>
            <Link to="/shop" className="hover:underline inline-block md:mt-7 mt-12">SHOP NOW </Link>
          </Link>
        </div>
        <div className="lg:w-96 md:w-5/12 w-full box my-6 relative border-2">
          <img src={category3} alt=""  />
          <Link to="/" className="hover:bg-indigo-600 hover:bg-opacity-60 duration-1000 ease-in-out text-black hover:text-white absolute top-0 left-0 p-6 w-full h-full"> 
            <h3 className="text-3xl font-bold mb-2">Accessories</h3>
            <p>New Trend</p>
            <Link to="/shop" className="hover:underline inline-block md:mt-7 mt-12">SHOP NOW </Link>
          </Link>
        </div>
      </div>
    </div>
  );
}
 
export default Categories;