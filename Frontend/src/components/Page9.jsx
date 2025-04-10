import React from "react";
import { useNavigate } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";

const Page9 = () => {

  const navigate = useNavigate();

  return (
    <footer className="bg-[#071a3d] text-white pt-10">
      {/* Contact Info Bar */}
      <div className="bg-[#DB4C29] flex flex-col md:flex-row w-[90%] max-w-12xl mx-auto h-auto md:h-32 rounded-3xl justify-between items-center text-white px-6 md:px-20 py-6 gap-6">
        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="bg-white/20 p-3 rounded-full">
            <HiOutlineLocationMarker className="text-white text-2xl" />
          </div>
          <div>
            <p className="text-sm md:text-md">Address</p>
            <p className="font-semibold text-lg md:text-xl">6391 Elgin St, Delaware</p>
          </div>
        </div>
        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="bg-white/20 p-3 rounded-full">
            <HiOutlineMail className="text-white text-2xl" />
          </div>
          <div>
            <p className="text-sm md:text-md">Send Email</p>
            <p className="font-semibold text-lg md:text-xl">contact@example.com</p>
          </div>
        </div>
        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="bg-white/20 p-3 rounded-full">
            <HiOutlinePhone className="text-white text-2xl" />
          </div>
          <div>
            <p className="text-sm md:text-md">Call Emergency</p>
            <p className="font-semibold text-lg md:text-xl">+88 0123 654 99</p>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 md:px-20 py-10 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <span className="text-[#DB4C29] ">🏡</span> HOMIRX
          </h2>
          <p className="text-md mt-4 text-gray-400">
            Nullam interdum libero vitae pretium aliquam donec nibh purus
            laoreet in ullamcorper vel malesuada sit amet enim.
          </p>
          <div className="flex items-center gap-4 mt-4">
            <span>Follow on</span>
            <FaFacebookF className="cursor-pointer text-xl hover:text-[#DB4C29]" />
            <FaLinkedinIn className="cursor-pointer text-xl hover:text-[#DB4C29]" />
            <FaInstagram className="cursor-pointer text-xl hover:text-[#DB4C29]" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold">Quick Link</h3>
          <div className="w-10 h-1 bg-[#DB4C29] my-2"></div>
          <ul className="text-sm text-gray-400 space-y-2">
            <li className="hover:text-white cursor-pointer">Startup Business</li>
            <li className="hover:text-white cursor-pointer">Financial Advice</li>
            <li className="hover:text-white cursor-pointer">Management</li>
            <li className="hover:text-white cursor-pointer">Business Advice</li>
            <li className="hover:text-white cursor-pointer">Strategy Services</li>
          </ul>
        </div>

        {/* Discover */}
        <div>
          <h3 className="text-lg font-semibold">Discover</h3>
          <div className="w-10 h-1 bg-[#DB4C29] my-2"></div>
          <ul className="text-sm text-gray-400 space-y-2">
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Our Team</li>
            <li className="hover:text-white cursor-pointer">Testimonials</li>
            <li className="hover:text-white cursor-pointer">Gallery</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Gallery */}
        <div className="">
          <h3 className="text-lg font-semibold">Gallery</h3>
          <div className="w-10 h-1 bg-[#DB4C29] my-2"></div>
          <div className="grid grid-cols-3 gap-2">
            <img
              src="https://gaviaspreview.com/wp/homirx/wp-content/uploads/2024/11/gallery-1.jpg"
              alt="gallery"
              className="w-full rounded-md"
            />
            <img
              src="https://gaviaspreview.com/wp/homirx/wp-content/uploads/2024/11/gallery-2.jpg"
              alt="gallery"
              className="w-full rounded-md"
            />
            <img
              src="https://gaviaspreview.com/wp/homirx/wp-content/uploads/2024/11/gallery-3.jpg"
              alt="gallery"
              className="w-full rounded-md"
            />
            <img
              src="https://gaviaspreview.com/wp/homirx/wp-content/uploads/2024/11/gallery-4.jpg"
              alt="gallery"
              className="w-full rounded-md"
            />
            <img
              src="https://gaviaspreview.com/wp/homirx/wp-content/uploads/2024/11/gallery-5.jpg"
              alt="gallery"
              className="w-full rounded-md"
            />
            <img
              src="https://gaviaspreview.com/wp/homirx/wp-content/uploads/2024/11/gallery-5.jpg"
              alt="gallery"
              className="w-full rounded-md"
            />
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 text-gray-400 text-sm text-center py-5">
        <div className="container mx-auto mt-2 flex flex-col md:flex-row justify-between px-6 md:px-20">
          <p>© 2024 Copyrights by GaviasTheme. All Rights Reserved</p>
          <div className="flex items-center justify-center gap-4">

            <button
              onClick={() => navigate("/terms")}
              className="border font-semibold mt-2 cursor-pointer border-gray-400 text-gray-300 px-3 py-1 rounded hover:bg-white hover:text-black transition-colors duration-200"
            >
              Terms & Conditions
            </button>
            <button
              onClick={() => navigate("/privacy")}
              className="border font-semibold mt-2 cursor-pointer border-gray-400 text-gray-300 px-3 py-1 rounded hover:bg-white hover:text-black transition duration-200"
            >
              Privacy Policy
            </button>

          </div>

        </div>
      </div>
    </footer>
  );
};

export default Page9;
