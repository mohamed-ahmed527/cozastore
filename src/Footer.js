import { Link } from "react-router-dom";

const Footer = () => {
  const list = ["Women", "Men" ,"Shoses", "Watches"];
  const help = ["Track Order", "Returns", "Shipping", "FAQs"]

  return (
    
    <footer className="footer bg-gray-800 text-white py-10 mt-36">
      <div className="container">
        <div className="parent flex flex-wrap">
          <div className="box lg:w-1/4 pr-6 md:w-1/2 w-full my-6">
            <h2 className="text-xl tracking-wider font-bold mb-4"> CATEGORIES </h2>
            <ul>
              {list.map((item) => (
                <li className="mb-2 hover:text-indigo-400	">
                  <Link className="block"> {item} </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="box lg:w-1/4 pr-6 md:w-1/2 w-full my-6">
            <h2 className="text-xl tracking-wider font-bold mb-4"> HELP </h2>
            <ul>
              {help.map((item) => (
                <li className="mb-2 hover:text-indigo-400	">
                  <Link className="block"> {item} </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="box lg:w-1/4 pr-6 md:w-1/2 w-full my-6">
            <h2 className="text-xl tracking-wider font-bold mb-4"> GET IN TOUCH </h2>
            <p> Any questions? Let us know in store at 8th floor, 379 Hudson St, 
              New York, NY 10018 or call us on (+1) 96 716 6879</p>
          </div>
          <div className="box lg:w-1/4 pr-6 md:w-1/2 w-full my-6">
            <h2 className="text-xl tracking-wider font-bold mb-4"> NEWSLETTER </h2>
            <form >
              <input className="block w-full boder-0 border-b-2 mb-4 bg-transparent " placeholder="email@examp.com" type="email" />
              <button className=" block rounded-full py-2 px-10 bg-indigo-600 text-sm font-bold hover:bg-white hover:text-indigo-600 duration-500 transition ">SUBSCRIBE</button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}
 
export default Footer;