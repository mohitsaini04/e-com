import React from "react";
import ABC from '../assets/scanner.jpg';

const Footer = () => {
  return (
    <div>
      <div className="bg-red-600 py-5"> 
        <div className="grid grid-cols-4 text-white ml-12">

          <div className="flex"> <img src="https://tse4.mm.bing.net/th/id/OIP.-HDBykLvPLrjfhx_gVZUBAHaHa?pid=Api&P=0&h=180"className="w-20  rounded-full"></img> <p className="mt-5 text-2xl">Lowest Price</p>  </div>
          <div className="flex"> <img src="https://tse1.mm.bing.net/th/id/OIP.3B43x4d-8kMPm_4yyBjDBAHaHa?pid=Api&P=0&h=180"className="w-20  rounded-full"></img> <p className="mt-5 text-2xl">Free Shipping</p>  </div>
          <div className="flex"> <img src="https://tse2.mm.bing.net/th/id/OIP.yz0X-TtFwZn0HuhpBiPvBwHaHX?pid=Api&P=0&h=180"className="w-20  rounded-full"></img> <p className="mt-5 text-2xl">Easy Return</p>  </div>
          <div className="flex"> <img src="https://tse2.mm.bing.net/th/id/OIP.XDyO8osuW75g7LYDkrXE9gHaHa?pid=Api&P=0&h=180"className="w-20  rounded-full"></img> <p className="mt-5 text-2xl"> Care Support</p>  </div>
          

        </div>

        </div> 
        
   <footer className="bg-gradient-to-r from-gray-900 to-gray-700 text-gray-200 py-12 px-4 shadow-lg">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* Logo/Name Section */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-3xl font-extrabold text-white mb-2 tracking-wide">Topup Nation</h3>
            <p className="text-sm leading-relaxed max-w-xs">
              Drive in style with our premium selection of car accessories. Quality, innovation, and performance for every journey.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg text-white mb-4 border-b-2 border-orange-500 pb-2 inline-block">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-orange-400 transition-colors duration-300">Home</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors duration-300">Products</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors duration-300">Featured</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-lg text-white mb-4 border-b-2 border-orange-500 pb-2 inline-block">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-orange-400 transition-colors duration-300">FAQ</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors duration-300">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors duration-300">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors duration-300">Terms of Service</a></li>
            </ul>
          </div>

          {/* Social Media & Newsletter */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-bold text-lg text-white mb-4 border-b-2 border-orange-500 pb-2 inline-block">Connect</h4>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300">
                <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 12c-1.103 0-2 .897-2 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2v-8a2 2 0 01-2-2V8a2 2 0 012-2h4V4a4 4 0 014-4h4a4 4 0 014 4v2h4a2 2 0 012 2v4a2 2 0 01-2 2zM6 8v12h12V8H6zm6 4c-1.103 0-2 .897-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2c0-1.103-.897-2-2-2h-2z" />
                </svg>
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300">
                <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 6.8c-.8.4-1.6.7-2.5.8.9-.5 1.6-1.4 1.9-2.4-.8.5-1.7.9-2.7 1.1-.8-.8-1.9-1.3-3.2-1.3-2.4 0-4.4 2-4.4 4.4 0 .3 0 .7.1 1-3.6-.2-6.7-1.9-8.8-4.5-.4.7-.6 1.4-.6 2.2 0 1.5.8 2.8 2 3.6-.7 0-1.4-.2-2-.5v.1c0 2.2 1.5 4 3.5 4.4-.4.1-.8.2-1.3.2-.3 0-.6 0-.9-.1.6 1.8 2.2 3.1 4.2 3.2-1.5 1.2-3.4 1.9-5.5 1.9-.4 0-.8 0-1.2-.1 2 1.3 4.4 2 7 2 8.4 0 13-7 13-13 0-.2 0-.4 0-.6.9-.6 1.7-1.3 2.3-2.1z" />
                </svg>
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300">
                <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.21 4.31c.21 0 .4.1.51.29.11.19.1.41-.01.61-.12.2-.29.35-.49.43-.2.08-.43.1-.64-.01-.21-.11-.4-.29-.51-.49-.11-.19-.1-.41.01-.61.12-.2.29-.35.49-.43.2-.08.43-.1.64.01zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm1.5-6c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5.67 1.5 1.5 1.5 1.5-.67 1.5-1.5z" />
                </svg>
                <span className="sr-only">Instagram</span>
              </a>
            </div>
            {/* Newsletter (Optional) */}
            <h4 className="font-bold text-lg text-white mb-2">Stay Updated</h4>
            <form className="flex w-full max-w-xs">
              <input
                type="email"
                placeholder="Your email"
                className="flex-grow p-2 rounded-l-md bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-r-md transition-colors duration-300"
              >
                Subscribe
              </button>

            </form>
            <p className="mt-5">SCAN TO CONNECT WITH WHATSAPP</p>
            <img src={ABC} alt="img"/>
          </div>
        </div>

        <hr className="my-10 border-gray-700" />

        <div className="text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Topup Nation. All Rights Reserved.
        </div>
      </div>
    </footer>
    
      
    </div>
  );
};

export default Footer;
