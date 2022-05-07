import FetchData from "./FetchData";
import ProductsList from "./ProductsList";


const Shop = () => {
  const {data:prods, error} = FetchData('http://localhost:8000/products');

  return (
    <div className="shop">
      {error && <div>{error} </div>}
      {prods && <ProductsList prods={prods} ></ProductsList>}
    </div>
  );
}
 
export default Shop;