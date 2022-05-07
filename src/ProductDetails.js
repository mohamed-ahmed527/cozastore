import { useState } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import FetchData from "./FetchData";

const ProductDetaills = () => {
  const history = useHistory();
  const {id} = useParams();
  const {data:product, error} = FetchData('http://localhost:8000/products/' + id);

  const [num, setNum] = useState(1);
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
  const [size, setSize] = useState("Small");
  const [color, setColor] = useState('Red');

  const handleAdd = (item) =>{
    const title = item.title;
    const pic = item.avatar;
    const price = item.price;
    let qty = item.quantity ;
    qty = num;
    const product = {title, price, pic ,qty, size, color};

    fetch('http://localhost:5000/cart', {
      method: 'POST',
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify(product)
    }).then(
      history.push('/cart')
    )
  }
  
  return (
    <div className="product-details">
      <div className="container">
        {error && <div> {error} </div>}
        {product && (
          <article className="parent md:flex flex-wrap my-8">
            <div className="pic sm:2/3 md:w-1/2 lg:w-1/3 pr-10 mb-4">
              <img src={product.avatar} className="rounded-md w-full" />
            </div>
            <div className="discription w-1/2 sm:text-left md:text-center mt-4">
              <h1 className="text-3xl "> {product.title} </h1>
              <span className="block my-4 text-lg"> {product.price} </span>
              <p> Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.</p>
              <div className="size mt-6">
                <label className="text-gray-500 font-bold text-lg mr-4"> Size is {size} </label>
                <select name="size" value={size} onChange={(e)=>setSize(e.target.value)}>
                  <option className="font-normal">Small</option>
                  <option className="font-normal">Mediam</option>
                  <option className="font-normal">Larg</option>
                  <option className="font-normal">XLarg</option>
                </select>
              </div>
              <div className="color mt-3">
                <label className="text-gray-500 font-bold text-lg mr-2">Color is {color} </label>
                <select name="color" value={color} onChange={(e)=>{setColor(e.target.value)}}>
                  <option className="font-normal">Red </option>
                  <option className="font-normal">Blue </option>
                  <option className="font-normal">Gray </option>
                  <option className="font-normal">White </option>
                </select>
                </div>
              <div className="quantity inline-block mt-3 border-2 rounded-md overflow-hidden">
                <button onClick={decrement} className="hover:bg-blue-500 hover:text-white duration-500 bg-white text-gray-600 py-1 px-4 font-semibold text-md"> - </button>
                <span className="border-r-2 border-l-2 border-gray-200 bg-gray-200 text-gray-600 py-1 px-4 font-semibold text-md"> {num} </span>
                <button onClick={increment} className="hover:bg-blue-500 hover:text-white duration-500 bg-white text-gray-600 py-1 px-4 font-semibold text-md" > + </button>
              </div>
              <button 
              onClick={()=> handleAdd(product)}
              className="py-2 px-8 text-white bg-blue-500 rounded-full mt-4 text-xl mx-auto block hover:bg-black transform duration-500">
                Add To Cart 
              </button>
            </div>
          </article>
        )}
      </div>
    </div>
  );
}
 
export default ProductDetaills;