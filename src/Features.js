import { useState } from 'react';
import feature1 from './assets/features/feature1.webp' ; 
import feature2 from './assets/features/feature2.webp' ; 

const Features = () => {
  const [num, setNum] = useState(0);
  const [quantity, setQuantity] = useState(0);
  
  const increment = ( () => {
    setNum(num+1);
  });
  const decrement = (() => {
    if(num > 0){
      setNum(num -1);
    }else{
      setNum(0);
    }
  });

  const plus = ( () => {
    setQuantity(quantity+1);
  });
  const minus = (() => {
    if(quantity > 0){
      setQuantity(quantity -1);
    }else{
      setQuantity(0);
    }
  });

  return (
    <section className="features mt-12">
      <div className="container">
        <div className="parent lg:flex justify-around">
          <div className="left my-10 mr-10 border-2">
            <table >
              <thead className="border-b-2">
                <tr>
                  <th className="py-2 px-5"> PRODUCT </th>
                  <th className="py-2 px-5"> PRICE </th>
                  <th className="py-2 px-5"> QUANTITY </th>
                  <th className="py-2 px-5"> TOTAL </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b-2">
                  <td className="py-14 px-5">
                    <td className="pic pr-4">
                      <img src={feature1}  />
                    </td>
                    <td> Fresh Strawberries </td>
                  </td>
                  <td className="py-14 px-5"> $ 36.00	</td>
                  <td className="py-14 px-5">
                    <div className="border-2 flex">
                      <button onClick={minus} className="hover:bg-blue-500 hover:text-white duration-500 bg-white text-gray-600 py-1 px-4 font-semibold text-md "> - </button>
                      <span className="border-r-2 border-l-2 border-gray-200 bg-gray-200 text-gray-600 py-1 px-4 font-semibold text-md"> {quantity} </span>
                      <button onClick={plus} className="hover:bg-blue-500 hover:text-white duration-500 bg-white text-gray-600 py-1 px-4 font-semibold text-md "> + </button>
                    </div>
                  </td>
                  <td className="py-14 px-5"> $ 36.00 </td>
                </tr>
                
                <tr className="border-b-2">
                  <td className="py-14 px-5">
                    <td className="pic pr-4">
                      <img src={feature2}  />
                    </td>
                    <td> Lightweight Jacket	 </td>
                  </td>
                  <td className="py-14 px-5"> $ 47.00	</td>
                  <td className="py-14 px-5">
                    <div className="border-2 flex">
                      <button onClick={decrement} className="hover:bg-blue-500 hover:text-white duration-500 bg-white text-gray-600 py-1 px-4 font-semibold text-md "> - </button>
                      <span className="border-r-2 border-l-2 border-gray-200 bg-gray-200 text-gray-600 py-1 px-4 font-semibold text-md"> {num} </span>
                      <button onClick={increment} className="hover:bg-blue-500 hover:text-white duration-500 bg-white text-gray-600 py-1 px-4 font-semibold text-md "> + </button>
                    </div>
                  </td>
                  <td className="py-14 px-5"> $ 47.00 </td>
                </tr>

              </tbody>
            </table>
            <div className=" flex flex-wrap w-full">
              <input type="text" className=" my-2 py-2 px-2 rounded-full border-2 mb-3 ml-5" placeholder="Coupon Code" />
              <button className=" my-2 py-1 px-5 bg-gray-200 ml-3 rounded-full text-sm font-semibold hover:bg-indigo-500 hover:text-white transition duration-300 border-2 "> APPLY COUPON  </button>
              <button className=" my-2 py-1 px-5 bg-gray-200 ml-3 rounded-full text-sm font-semibold hover:bg-indigo-500 hover:text-white transition duration-300 border-2 "> UPDATE CART  </button>
            </div>
          </div>
          {/* right div  */}
          <div className="right my-10 px-10 border-2 lg:w-1/3">
            <h1 className="my-6 text-xl font-bold"> CART TOTALS </h1>
            <div className="flex my-6 text-lg">
              <p className="mr-3 font-semibold">Subtotal: </p>
              <p className="text-gray-900 ">$79.65 </p>
            </div>
            <div className="flex border-b-2 border-dotted my-6 font-semibold">
              <p className="mr-3 font-semibold text-lg">Shipping:</p>
              <div>
                <p className="text-gray-500 text-md mb-6"> There are no shipping methods available. Please double check your address, or contact us if you need any help. </p>
                <div>
                  <h3 className="mb-3 text-gray-500 text-sm"> CALCULATE SHIPPING </h3>
                  <select className="block w-full border-2 text-md mb-4 px-2 py-1 rounded-md">
                    <option value=""> select country </option>
                    <option value="country"> USA </option>
                    <option value="country"> EGYPT </option>
                  </select>
                  <input type=" text" placeholder="STATE / COUNTRY" className="block w-full mb-4 border-2 px-2 py-1 rounded-md text-md"/>
                  <input type=" text" placeholder="POST / ZIP" className="block w-full mb-4 border-2 px-2 py-1 rounded-md text-md"/>
                  <button className="py-2 px-6 bg-gray-200 hover:bg-indigo-500 hover:text-white transition duration-500 text-sm font-semibold rounded-full block mx-auto mb-4 "> UPDATE TOTALS </button>
                </div>
              </div>
            </div>
            <div className="flex my-6">
              <p className="mr-12 font-semibold text-xl"> TOTAL : </p>
              <p className="text-gray-900 text-lg font-semibold"> $79.65 </p>
            </div>
            <button className="py-3 px-10 bg-gray-900 text-white hover:bg-indigo-500 transition duration-500 text-sm font-semibold rounded-full block mx-auto mb-4 ">PROCEED TO CHECKOUT </button>
          </div>
        </div>
      </div>
    </section>
  );
}
 
export default Features;