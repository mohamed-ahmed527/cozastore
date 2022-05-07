import blog1 from './assets/blog/blog1.webp' ;
import blog2 from './assets/blog/blog2.webp' ;
import blog3 from './assets/blog/blog3.webp' ;
import features1 from './assets/blog/features1.webp' ;
import features2 from './assets/blog/features2.webp' ;
import features3 from './assets/blog/features3.webp' ;

const Blog = () => {

  return (
    <section className="blog">
      <div className="blog-header py-24">
        <h1 className="text-center text-4xl font-bold text-white"> Blog </h1>
      </div>
      <div className="container">
        <div className="big flex flex-wrap justify-between">
          <div className="left-box lg:w-2/3 md:w-2/3 w-full pr-10 ">
            <div className="box my-20">
              <div className="pic overflow-hidden relative ">
                <img src={blog1} className="transform hover:scale-110 hover:cursor-pointer duration-1000" />
                <span className="absolute top-4 left-4 bg-white text-center py-2 px-2">
                  <span className="block text-xl font-sans font-extrabold"> 22</span>
                  <span className="block text-sm text-gray-400"> Jan 2020</span>
                </span>
              </div>
              <div className="info">
                <h1 className="text-3xl font-bold mt-6 font-sans text-gray-800 hover:text-indigo-500 inline-block  "> 8 Inspiring Ways to Wear Dresses in the Winter </h1>
                <p className="text-gray-500 mt-6"> Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius </p>
              </div>
            </div>
            <div className="box my-20">
              <div className="pic overflow-hidden relative ">
                <img src={blog2} className="transform hover:scale-110 hover:cursor-pointer duration-1000" />
                <span className="absolute top-4 left-4 bg-white text-center py-2 px-2">
                  <span className="block text-xl font-sans font-extrabold"> 18</span>
                  <span className="block text-sm text-gray-400"> Jan 2020</span>
                </span>
              </div>
              <div className="info">
                <h1 className="text-3xl font-bold mt-6 font-sans text-gray-800 hover:text-indigo-500 inline-block  "> The Great Big List of Men’s Gifts for the Holidays </h1>
                <p className="text-gray-500 mt-6"> Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius </p>
              </div>
            </div>
            <div className="box my-20">
              <div className="pic overflow-hidden relative ">
                <img src={blog3} className="transform hover:scale-110 hover:cursor-pointer duration-1000" />
                <span className="absolute top-4 left-4 bg-white text-center py-2 px-2">
                  <span className="block text-xl font-sans font-extrabold"> 16</span>
                  <span className="block text-sm text-gray-400"> Jan 2020</span>
                </span>
              </div>
              <div className="info">
                <h1 className="text-3xl font-bold mt-6 font-sans text-gray-800 hover:text-indigo-500 inline-block  "> 5 Winter-to-Spring Fashion Trends to Try Now </h1>
                <p className="text-gray-500 mt-6"> Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius </p>
              </div>
            </div>
          </div>
          
          <div className="right-box lg:w-1/3 md:w-1/3 w-full mt-20">
            <div className="Categories mb-14">
              <h1 className="text-3xl font-mono text-gray-800 font-extrabold"> Categories</h1>
              <ul className="block w-full">
                <li className="block hover:text-indigo-500 cursor-pointer text-md text-gray-500 my-4 font-semibold border-b-2">Fashion</li>
                <li className="block hover:text-indigo-500 cursor-pointer text-md text-gray-500 my-4 font-semibold border-b-2">Beauty</li>
                <li className="block hover:text-indigo-500 cursor-pointer text-md text-gray-500 my-4 font-semibold border-b-2">Street Style</li>
                <li className="block hover:text-indigo-500 cursor-pointer text-md text-gray-500 my-4 font-semibold border-b-2">Life Style</li>
                <li className="block hover:text-indigo-500 cursor-pointer text-md text-gray-500 my-4 font-semibold border-b-2">DIY & Crafts</li>
              </ul>
            </div>

            <div className="features mb-14">
              <h1 className="text-3xl font-mono text-gray-800 font-extrabold"> Featured Products</h1>
              <div className="son">
                <div className="item flex mt-8">
                  <div className="pic w-24 mr-4">
                    <img src={features1} className="w-full" />
                  </div>
                  <div className="text">
                    <h1 className="mb-2 text-gray-800 text-lg"> White shirt with pleat detail back </h1>
                    <span className="text-gray-500"> $15 </span>
                  </div>
                </div>
                <div className="item flex mt-8">
                  <div className="pic w-24 mr-4">
                    <img src={features2} className="w-full" />
                  </div>
                  <div className="text">
                    <h1 className="mb-2 text-gray-800 text-lg">Converse All Star Hi Black Canvas </h1>
                    <span className="text-gray-500"> $79 </span>
                  </div>
                </div>
                <div className="item flex mt-8">
                  <div className="pic w-24 mr-4">
                    <img src={features3} className="w-full" />
                  </div>
                  <div className="text">
                    <h1 className="mb-2 text-gray-800 text-lg"> Nixon Porter Leather Watch In Tan </h1>
                    <span className="text-gray-500"> $135 </span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="archive mb-14">
              <h1 className="text-3xl font-mono text-gray-800 font-extrabold"> Archive</h1>
              <div className="list">
                <ul>
                  <li className="flex justify-between mt-6 text-gray-400 hover:text-indigo-500 cursor-pointer"> <span>july 2018</span> <span>(27)</span> </li>
                  <li className="flex justify-between mt-6 text-gray-400 hover:text-indigo-500 cursor-pointer"> <span>june 2018</span> <span>(49)</span> </li>
                  <li className="flex justify-between mt-6 text-gray-400 hover:text-indigo-500 cursor-pointer"> <span>may 2018</span> <span>(71)</span> </li>
                  <li className="flex justify-between mt-6 text-gray-400 hover:text-indigo-500 cursor-pointer"> <span>march 2018</span> <span>(22)</span> </li>
                  <li className="flex justify-between mt-6 text-gray-400 hover:text-indigo-500 cursor-pointer"> <span>december 2018</span> <span>(74)</span> </li>
                </ul>
              </div>
            </div>

            <div className="tags">
              <h1 className="text-3xl font-mono text-gray-800 font-extrabold"> Tags</h1>
              <div className="list mt-10 flex flex-wrap ">
                <span className="border-2 py-1 px-3 text-gray-500 rounded-full cursor-pointer hover:text-indigo-500 hover:border-indigo-400 mr-2 my-2"> Fashion </span>
                <span className="border-2 py-1 px-3 text-gray-500 rounded-full cursor-pointer hover:text-indigo-500 hover:border-indigo-400 mr-2 my-2"> Lifestyle </span>
                <span className="border-2 py-1 px-3 text-gray-500 rounded-full cursor-pointer hover:text-indigo-500 hover:border-indigo-400 mr-2 my-2"> Denin </span>
                <span className="border-2 py-1 px-3 text-gray-500 rounded-full cursor-pointer hover:text-indigo-500 hover:border-indigo-400 mr-2 my-2"> Streetstyle </span>
                <span className="border-2 py-1 px-3 text-gray-500 rounded-full cursor-pointer hover:text-indigo-500 hover:border-indigo-400 mr-2 my-2"> Crafts </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
 
export default Blog;