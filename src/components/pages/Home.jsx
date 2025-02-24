import React from "react";
import picture from "../../assets/pic2.jpg";
import picture2 from "../../assets/pic4.jpg";
import Footer from "../Footer";
function Home() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between p-10 text-center">
      <div className=" flex flex-col justify-center items-center font-serif md:bg-gray-700 md:text-white w-auto md:h-120 md:w-110  ">
        <h1 className="lg:text-3xl mb-3 font-bold">
          Elevate Your Style with Premium Fashion
        </h1>
        <p>
          Shop the latest trends in clothing, accessories, and more. Fast
          shipping & easy returns!
        </p>
        <div>
          <button className="items-center mt-5 p-1 text-sm md:bg-transparent bg-gray-800 border border-white md:hover:bg-white md:hover:text-gray-900 text-white font-semibold rounded-lg transition duration-500  w-40 cursor-pointer ">
            Explore Collections
          </button>
        </div>
      </div>
    
        <img src={picture2} className="h-auto md:h-120 w-90 mt-2 lg:mt-0" />
        
          <img src={picture} className="h-auto md:h-120 w-90 mt-2 lg:mt-0" />
        
      <div className="flex flex-col font-serif  mt-2 lg:mt-0 ">
        <button className="inline-block p-2 text-white bg-gray-700 transform skew-x-[-12deg] hover:bg-black cursor-pointer focus:outline-none">
          DISCOVER EXCITING OFFERS
        </button>
        <button className="mt-2 inline-block p-2 text-white bg-gray-700 transform skew-x-[-12deg] hover:bg-black cursor-pointer focus:outline-none">
          SHOP NOW
        </button>
      </div>
    </div>
  );
}

export default Home;