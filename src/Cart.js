import { useState } from "react";
import { useHistory } from "react-router-dom";
import FetchData from "./FetchData";

const Cart = () => {
  const {data} =FetchData('http://localhost:5000/cart');  
  const history = useHistory()
  
  const handleRemove = (id)=>{
    fetch('http://localhost:5000/cart/'+ id, {
      method:'DELETE',
    }).then(
      history.push('/')
    )
  }
  
  return (
    <div id="basket-comp">
      <div className="container">
        <h1 className="text-3xl text-center font-bold my-10">Your Basket </h1>
        {/* <div>{data === null && <div> basket is empty</div>} </div> */}
        <div className="parent flex flex-wrap justify-around">
          {data && (data.map((item)=>(
              <article className="my-6 bg-gray-100 lg:w-1/4 md:w-5/12 w-10/12 text-center mr-1">
                <div className="pic">
                  <img src={item.pic} alt="" className="w-full"/>
                </div>
                <div className="info my-4">
                  <div className="flex flex-wrap justify-between text-xl">
                    <p className="title">{item.title} </p>
                    <p className="price">{item.price} * {item.qty} </p>
                  </div>
                  <div className="flex flex-wrap justify-between text-xl mt-2">
                    <p>{item.size}</p>
                    <p>{item.color}</p>
                  </div>
                  <button
                  onClick={()=>handleRemove(item.id)}
                  id="btn-remove"
                  className="px-2 py-1 bg-red-500 rounded-lg text-white mt-4 ">Remove</button>                    
                </div>
              </article>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
 
export default Cart;