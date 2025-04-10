import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Christine Eve",
    position: "Founder & CEO",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    text: "Lorem ipsum is simply free text dolor not sit amet notted adipisicing elit sed do eiusmod incididunt labore et dolore text.",
  },
  {
    id: 2,
    name: "Kevin Smith",
    position: "Company Founder",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    rating: 5,
    text: "Lorem ipsum is simply free text dolor not sit amet, notted adipisicing elit sed do eiusmod incididunt labore et dolore text.",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
    },
  },
};

const quoteVariants = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.5,
      delay: 0.5,
    },
  },
};

export default function Testimonials() {
  return (
    <motion.section
      className="bg-[#FDF7F4] py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div className="mb-10">
          <motion.h3
            className="text-orange-500 font-semibold"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Testimonials
          </motion.h3>
          <motion.h2
            className="text-4xl font-bold text-gray-800"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            What Our Clients Say?
          </motion.h2>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-orange-500"
              variants={cardVariants}
            >
              {/* Profile + Quote */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-500 text-sm">{testimonial.position}</p>
                </div>

                <motion.span
                  className="ml-auto text-orange-500 text-2xl"
                  variants={quoteVariants}
                >
                  ❝
                </motion.span>
              </div>

              {/* Rating */}
              <div className="flex items-center mt-2 text-yellow-500 text-lg">
                {"⭐".repeat(testimonial.rating)}
              </div>

              {/* Text */}
              <p className="text-gray-600 mt-4 leading-relaxed">
                {testimonial.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
