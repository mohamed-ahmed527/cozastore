import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import { Link } from 'react-router-dom';
import slider1 from './assets/slider/slider1.webp';
import slider2 from './assets/slider/slider2.webp';
import slider3 from './assets/slider/slider3.webp';
const Header = () => {
  return (
    <header >
      <Splide>
        <SplideSlide>
          <img src={slider2} alt="Image 1"/>
          <div className="absolute md:top-1/3 top-14 ml-20">
            <h3 className="text-gray-600 lg:text-3xl md:text-2xl text-xl">Men New-Season 2022</h3>
            <h1 className="text-gray-600 my-2 lg:text-7xl md:text-6xl text-4xl">JACKETS&coats </h1>
            <Link to='/shop' className="lg:my-6 my-4 py-2 lg:px-9 px-7 bg-indigo-500 text-white text-md rounded-full"> SHOP NOW</Link>
          </div>
        </SplideSlide>
        <SplideSlide>
          <img src={slider1} alt="Image 1"/>
          <div className="absolute md:top-1/3 top-14 ml-20">
            <h3 className="text-gray-600 lg:text-3xl md:text-2xl text-xl">Women Collection 2022</h3>
            <h1 className="text-gray-600 my-2 lg:text-7xl md:text-6xl text-4xl">NEW SEASION </h1>
            <button className="lg:my-6 my-4 py-2 lg:px-9 px-7 bg-indigo-500 text-white text-md rounded-full"> SHOP NOW</button>
          </div>
        </SplideSlide>
        <SplideSlide>
          <img src={slider3} alt="Image 1"/>
          <div className="absolute md:top-1/3 top-14 ml-20">
            <h3 className="text-gray-600 lg:text-3xl md:text-2xl text-xl">New Collection 2022</h3>
            <h1 className="text-gray-600 my-2 lg:text-7xl md:text-6xl text-4xl">NEW ARRIVALS </h1>
            <button className="lg:my-6 my-4 py-2 lg:px-9 px-7 bg-indigo-500 text-white text-md rounded-full"> SHOP NOW</button>
          </div>
        </SplideSlide>
        
      </Splide>
    </header>
  );
}
 
export default Header;