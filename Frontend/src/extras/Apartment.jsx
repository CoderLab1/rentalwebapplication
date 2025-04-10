import React from "react";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
  
const apartmentProperties = [
  {
    id: 1,
    title: "Downtown City Apartment",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800",
    description: "Modern apartment in the heart of the city with skyline views.",
    location: "New York, NY",
    price: "$3,500/month",
  },
  {
    id: 2,
    title: "Luxury High-Rise Apartment",
    image: "https://images.unsplash.com/photo-1501183638710-841dd1904471?w=800",
    description: "Stylish high-rise with floor-to-ceiling windows and concierge.",
    location: "Chicago, IL",
    price: "$3,200/month",
  },
  {
    id: 3,
    title: "Cozy Studio Apartment",
    image: "https://images.unsplash.com/photo-1698870157085-11632d2ddef8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fENvenklMjBTdHVkaW8lMjBBcGFydG1lbnR8ZW58MHx8MHx8fDA%3D",
    description: "Compact yet comfortable studio perfect for solo living.",
    location: "Portland, OR",
    price: "$1,600/month",
  },
  {
    id: 4,
    title: "Modern Suburban Apartment",
    image: "https://media.istockphoto.com/id/1322575582/photo/exterior-view-of-modern-apartment-building-offering-luxury-rental-units-in-silicon-valley.webp?a=1&b=1&s=612x612&w=0&k=20&c=4uVGd6IVMGDQ8Do69HzBfYref8d4GbbehLJM0hPAeSY=",
    description: "Spacious apartment in a quiet neighborhood with parks nearby.",
    location: "Austin, TX",
    price: "$2,000/month",
  },
  {
    id: 5,
    title: "Penthouse with Rooftop",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800",
    description: "Top-floor penthouse with private rooftop terrace and grill.",
    location: "Miami, FL",
    price: "$5,000/month",
  },
  {
    id: 6,
    title: "Loft Apartment",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800",
    description: "Trendy loft with open layout and industrial touches.",
    location: "Los Angeles, CA",
    price: "$3,800/month",
  },
  {
    id: 7,
    title: "Historic Charm Apartment",
    image: "https://media.istockphoto.com/id/2182010553/photo/paris-typical-street-at-night.webp?a=1&b=1&s=612x612&w=0&k=20&c=yej9dJqh3GfnB4MfzikmqJYBhFK0LFQIL1cmz1aNqrk=",
    description: "Elegant apartment in a restored historic building.",
    location: "Boston, MA",
    price: "$2,700/month",
  },
  {
    id: 8,
    title: "Garden View Apartment",
    image: "https://images.unsplash.com/photo-1631405146530-d25c3cd04407?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8R2FyZGVuJTIwVmlldyUyMEFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D",
    description: "Enjoy morning coffee with peaceful garden views.",
    location: "San Diego, CA",
    price: "$2,900/month",
  },
  {
    id: 9,
    title: "Smart Tech Apartment",
    image: "https://images.unsplash.com/photo-1630699294887-fa8852095404?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8U21hcnQlMjBUZWNoJTIwQXBhcnRtZW50fGVufDB8fDB8fHww",
    description: "Equipped with smart locks, lighting, and energy-saving tech.",
    location: "Seattle, WA",
    price: "$3,300/month",
  },
  {
    id: 10,
    title: "College Town Apartment",
    image: "https://images.unsplash.com/photo-1728289784868-b290b0f801db?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q29sbGVnZSUyMFRvd24lMjBBcGFydG1lbnR8ZW58MHx8MHx8fDA%3D",
    description: "Perfect for students, minutes away from campus.",
    location: "Berkeley, CA",
    price: "$1,800/month",
  },
  {
    id: 11,
    title: "Luxury Waterfront Apartment",
    image: "https://images.unsplash.com/photo-1626608213202-d9eb6e084ee0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Waterfront views with premium amenities and secure parking.",
    location: "Jersey City, NJ",
    price: "$4,200/month",
  },
  {
    id: 12,
    title: "Family-Friendly 3BR Apartment",
    image: "https://images.unsplash.com/photo-1627869737193-c0df1615d7bd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8RmFtaWx5JTIwRnJpZW5kbHklMjAzQlIlMjBBcGFydG1lbnR8ZW58MHx8MHx8fDA%3D",
    description: "Spacious three-bedroom apartment with play area and balcony.",
    location: "Phoenix, AZ",
    price: "$2,500/month",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const ApartmentCard = ({ apartment }) => (
  <motion.div
    variants={cardVariants}
    className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
  >
    <div className="overflow-hidden">
      <img
        src={apartment.image}
        alt={apartment.title}
        className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300"
      />
    </div>
    <div className="p-4">
      <h2 className="text-xl font-semibold text-gray-800">{apartment.title}</h2>
      <p className="text-gray-600 text-sm mt-2">{apartment.description}</p>
      <div className="flex justify-between items-center mt-4">
        <span className="text-sm text-gray-500">{apartment.location}</span>
        <span className="text-sm font-semibold text-blue-600">{apartment.price}</span>
      </div>
      <button className="mt-4 w-full bg-[#C2DF93] text-[#1A2238] font-semibold py-2 rounded-xl hover:bg-[#b3d27f] transition-colors">
        View Details
      </button>
    </div>
  </motion.div>
);

const Apartment = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="min-h-screen bg-[#1A2238] pt-36 py-12 px-4">
      <div className="text-center mb-6">
        <p className="text-orange-500 text-lg sm:text-xl font-semibold">Urban Living</p>
        <h2 className="text-3xl text-white sm:text-5xl mt-3 font-bold">
          Discover Our <span className="text-[#C2DF93]">Apartments</span>
        </h2>
        <p className="text-gray-300 mt-3 text-lg">
          Handpicked modern apartments perfect for every lifestyle
        </p>
      </div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto"
      >
        {apartmentProperties.map((apartment) => (
          <ApartmentCard key={apartment.id} apartment={apartment} />
        ))}
      </motion.div>
    </div>
  );
};

export default Apartment;
