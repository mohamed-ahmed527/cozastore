import $ from 'jquery';
import { Link } from "react-router-dom";

const Products = ({prods}) => {
    
  $(document).ready(function(){
    $('.type').click(function(){
      var val =  this.innerText ;
      if(val === 'men'){
        $('.women').parent().fadeOut();
        $('.watches').parent().fadeOut();
        $('.shoses').parent().fadeOut();
        $('.men').parent().fadeIn();
      }else if (val === 'women'){
        $('.men').parent().fadeOut();
        $('.watches').parent().fadeOut();
        $('.shoses').parent().fadeOut();
        $('.women').parent().fadeIn();
      }else if (val === 'watches'){
        $('.men').parent().fadeOut();
        $('.women').parent().fadeOut();
        $('.shoses').parent().fadeOut();
        $('.watches').parent().fadeIn();
      }else if (val === 'shoses'){
        $('.men').parent().fadeOut();
        $('.women').parent().fadeOut();
        $('.watches').parent().fadeOut();
        $('.shoses').parent().fadeIn();
      }else{
        $('.men').parent().fadeIn();
        $('.women').parent().fadeIn();
        $('.watches').parent().fadeIn();
        $('.shoses').parent().fadeIn();
      }
    });
  });

  return (
    <div className="container">
      <div className="head mt-20">
        <h1 className="text-5xl font-bold leading-normal tracking-wide"> PRODUCT OVERVIEW</h1>
        <div className="list my-10 ">
          <ul className="w-full flex flex-wrap">
            <li id="all"  className="type text-lg mr-3 text-gray-500 hover:underline hover:text-gray-800 tracking-wide cursor-pointer"> all </li>
            <li id="women"  className="type text-lg mr-3 text-gray-500 hover:underline hover:text-gray-800 tracking-wide cursor-pointer"> women </li>
            <li id="men"  className="type text-lg mr-3 text-gray-500 hover:underline hover:text-gray-800 tracking-wide cursor-pointer"> men </li>
            <li id="shoses"  className="type text-lg mr-3 text-gray-500 hover:underline hover:text-gray-800 tracking-wide cursor-pointer"> shoses </li>
            <li id="watches"  className="type text-lg mr-3 text-gray-500 hover:underline hover:text-gray-800 tracking-wide cursor-pointer"> watches </li>
          </ul>
        </div>
      </div>
      <div className="big my-10 flex flex-wrap justify-around">
        {prods.map((item) => (
          <div className="preview lg:w-1/4 md:w-1/3 sm:w-1/2 w-full my-10 " >
            <div className={item.class}>
              <div className="pic overflow-hidden ">
                <img src={item.avatar} className="transform hover:scale-110 duration-1000 w-full" />
                <div className='info flex items-end px-1 py-2'>
                  <div>
                    <h1 className="flex flex-wrap justify-between font-sans">
                      <Link to={`/Prods/${item.id}`} className="text-black-800 text-lg "> {item.title} </Link>
                    </h1>
                    <h2 className="price text-md font-bold my-2">price: {item.price} </h2>
                    <button className="overview block bg-blue-400 text-white px-4 py-1 rounded-lg hover:bg-blue-500 ">
                      <Link to={`prods/${item.id}`}>Quick Overview</Link>
                    </button>
                  </div>

                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
 
export default Products;