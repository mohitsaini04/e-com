import React from "react";
import COMMENT from '../assets/comment.jpeg';

const Animation = () => {
  return (
    <div className="border-5 ml-45 mr-45 mt-10 mb-10 border-gray-300  rounded-4xl cursor-pointer">
      <p className="text-2xl font-bold text-center underline"> Testimonials</p>
      <p className="font-bold ml-45 mr-45 text-center mt-8">
       <img className="w-10 ml-95 mb-5 " src={COMMENT}/>
        I really appreciate you and your service and efforts from my LED
        Headlight from TOPUP NATON.com . The product is really good and the
        light is clear clean and long britness, I can say openly that you are
        very genuine employe of our company TOPUP NATION. Because of few
        selective people like you in the company really grows and creates good
        reputation and brand of the company in the market. Thanks for overall
        services and suports Thanks and Regards
        <p className="text-center text-xl font-bold">Sujeet Agarwal</p>
        <p className="mt-5 text-2xl text-stone-500 mask-radial-from-neutral-400">--SUJEET AGARWAL--</p>
       
       
        <div className="flex justify-center items-center gap-5 mt-5 mb-2 ">
          <div className="w-4 h-4 rounded-full bg-blue-500"></div>
          <div className="w-4 h-4 rounded-full bg-blue-500"></div>
          <div className="w-4 h-4 rounded-full bg-blue-500"></div>
          

        </div>
      </p>
    </div>
  );
};

export default Animation;
