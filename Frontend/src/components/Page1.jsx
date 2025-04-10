import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlay } from "react-icons/fa";

const images = [
    "https://gaviaspreview.com/wp/homirx/wp-content/uploads/2024/11/slider-2.jpg",
    "https://gaviaspreview.com/wp/homirx/wp-content/uploads/2024/11/slider-1.jpg"
];

export default function HeroSection() {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 4500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center px-4">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center w-full h-full transition-all duration-1000"
                style={{ backgroundImage: `url(${images[currentImage]})` }}
            ></div>

            {/* Text Section */}
            <motion.div
                className="absolute top-1/4 left-1/2 transform -translate-x-1/2 bg-white/30 backdrop-blur-lg p-6 rounded-lg shadow-lg w-[90%] max-w-3xl text-center"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.1 }}
            >
                <h1 className="text-3xl sm:text-5xl font-bold text-black leading-tight">
                    Find Your Dream Home
                </h1>
                <p className="text-black text-sm sm:text-lg mt-2">
                    Discover the perfect home for you. Browse our listings and find what suits you best.
                </p>
            </motion.div>

            {/* Search Section */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-white/30 backdrop-blur-lg p-4 rounded-lg shadow-lg w-[90%] max-w-4xl flex flex-wrap gap-3 justify-center md:justify-between items-center">
                <input
                    type="text"
                    placeholder="Looking For?"
                    className="p-3 border border-gray-300 rounded-md w-full sm:w-64 bg-white/20 backdrop-blur-md text-black placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />

                <select className="p-3 border border-gray-300 rounded-md w-full sm:w-auto bg-white/20 backdrop-blur-md text-black focus:outline-none focus:ring-2 focus:ring-orange-400">
                    <option>Select Category</option>
                    <option>Villa</option>
                    <option>Apartment</option>
                </select>

                <input
                    type="text"
                    placeholder="Location"
                    className="p-3 border border-gray-300 rounded-md w-full sm:w-48 bg-white/20 backdrop-blur-md text-black placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-orange-500 cursor-pointer hover:bg-orange-600 transition text-white px-6 py-3 rounded-md w-full sm:w-auto"
                >
                    Search
                </motion.button>

            </div>

            {/* Play Button Section */}
            <div className=" absolute bottom-43 left-1/2 transform -translate-x-1/2 flex-col items-center justify-center hidden sm:flex">
                <div className="relative flex items-center justify-center w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-white/10 backdrop-blur-sm rounded-full">
                    {/* Outer Circle */}
                    <div className="absolute w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 border border-white/30 rounded-full"></div>

                    {/* Rotating Text Circle */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
                        className="absolute w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 flex justify-center items-center"
                    >
                        <svg viewBox="0 0 200 200" className="absolute w-full h-full">
                            <path
                                id="textPath"
                                d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
                                fill="transparent"
                            ></path>
                            <text fontSize="8" className="fill-black font-semibold">
                                <textPath href="#textPath" startOffset="50%" textAnchor="middle">
                                    - PLAY INTRO VIDEO - PLAY INTRO VIDEO - PLAY INTRO VIDEO - PLAY INTRO VIDEO -PLAYYADAV PLAY INTRO VIDEO - PLAY INTRO VIDEO -
                                </textPath>
                            </text>
                        </svg>
                    </motion.div>

                    {/* Play Button */}
                    <div className="absolute flex justify-center items-center w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-black/70 rounded-full cursor-pointer shadow-lg">
                        <FaPlay className="text-white text-lg sm:text-xl md:text-2xl" />
                    </div>
                </div>
            </div>
        </div>
    );
}