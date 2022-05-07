import Categories from "./Categories";
import ProductsList from "./ProductsList";
import Header from "./Header";
import FetchData from './FetchData';
import Basket from "./Cart";



const Home = () => {
  const {data:prods, error} = FetchData('http://localhost:8000/products');

  return (
    <div className="home">
      <Header />
      <Categories />
      <div className="products">
        {error && <div>{error} </div>}
        {prods && <ProductsList prods={prods} ></ProductsList>}
      </div>
    </div>
  );
}
 
export default Home;