const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-header py-24 mb-20">
        <h1 className="text-center text-4xl font-bold text-white"> Contact </h1>
      </div>

      <div className="container">
        <div className="parent md:flex flex-wrap block">
          <div className="sm:w-full md:w-1/2 form px-7 py-10 border-2 ">
            <form className="block w-full">
              <h1 className="text-center text-2xl font-bold"> Send Us A Message </h1>
              <input type="email" className="block w-full border-2 rounded-md py-2 px-2 mt-10 text-gray-500" placeholder="Enter Your Email"  />
              <textarea className="block w-full border-2 rounded-md py-2 px-2 mt-10 text-gray-500 h-44" placeholder="How Can We Help You " >
              </textarea>
              <button className="w-full bg-gray-900 text-white py-2 px-3 mt-8 rounded-full" >SUBMIT</button>
            </form>
          </div>
          <div className="sm:w-full md:w-1/2 info px-7 py-10 border-2 ">
            <div className="box flex">
              <div className="icon mr-10 text-center text-gray-500">
                <i class="ri-map-pin-line text-2xl "></i>
              </div>
              <div className="discription">
                <h1 className="text-xl font-bold mb-2"> Address </h1>
                <p className="text-gray-500">Coza Store Center 8th floor, 379 Hudson St, New York, NY 10018 US</p>
              </div>
            </div>
            <div className="box flex my-16">
              <div className="icon mr-10 text-center text-gray-500">
                <i class="ri-phone-line text-2xl "></i>
              </div>
              <div className="discription">
                <h1 className="text-xl font-bold mb-2"> Lets Talk </h1>
                <p className="text-indigo-500">+1 800 1236879 </p>
              </div>
            </div>
            <div className="box flex">
              <div className="icon mr-10 text-center text-gray-500">
                <i class="ri-mail-line text-2xl "></i>
              </div>
              <div className="discription">
                <h1 className="text-xl font-bold mb-2"> Sale Support </h1>
                <p className="text-indigo-500">contact@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
 
export default Contact;