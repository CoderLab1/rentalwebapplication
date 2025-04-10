import React from "react";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";

const commercialProperties = [
  {
    id: 1,
    title: "Downtown Office Space",
    image: "https://plus.unsplash.com/premium_photo-1661962552438-696871a2c7cc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RG93bnRvd24lMjBPZmZpY2UlMjBTcGFjZXxlbnwwfHwwfHx8MA%3D%3D",
    description: "Premium office space located in the heart of downtown.",
    location: "New York, NY",
    price: "$5,000/month",
  },
  {
    id: 2,
    title: "Retail Showroom",
    image: "https://images.unsplash.com/photo-1643195745870-9c4ba7329d7d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8UmV0YWlsJTIwU2hvd3Jvb218ZW58MHx8MHx8fDA%3D",
    description: "Spacious showroom ideal for retail businesses.",
    location: "Los Angeles, CA",
    price: "$3,200/month",
  },
  {
    id: 3,
    title: "Corporate Tower Floor",
    image: "https://plus.unsplash.com/premium_photo-1680366286447-5f3ee6c32e52?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q29ycG9yYXRlJTIwVG93ZXIlMjBGbG9vcnxlbnwwfHwwfHx8MA%3D%3D",
    description: "Entire floor available in a corporate skyscraper.",
    location: "Chicago, IL",
    price: "$7,500/month",
  },
  {
    id: 4,
    title: "Co-working Hub",
    image: "https://plus.unsplash.com/premium_photo-1661957690855-693887d13b87?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y28lMjB3b3JraW5nJTIwaHVifGVufDB8fDB8fHww",
    description: "Modern co-working space with top facilities.",
    location: "Austin, TX",
    price: "$2,800/month",
  },
  {
    id: 5,
    title: "Tech Park Office",
    image: "https://plus.unsplash.com/premium_photo-1690541772871-f8d892d8cdb9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8VGVjaCUyMFBhcmslMjBPZmZpY2V8ZW58MHx8MHx8fDA%3D",
    description: "Office space in a prime tech park location.",
    location: "San Francisco, CA",
    price: "$6,000/month",
  },
  {
    id: 6,
    title: "Open Floor Plan Space",
    image: "https://plus.unsplash.com/premium_photo-1684769161409-f6de69d3f274?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8T3BlbiUyMEZsb29yJTIwUGxhbiUyMFNwYWNlfGVufDB8fDB8fHww",
    description: "Flexible office area for startups and agencies.",
    location: "Seattle, WA",
    price: "$4,500/month",
  },
  {
    id: 7,
    title: "Industrial Office",
    image: "https://plus.unsplash.com/premium_photo-1661963107317-e178575c92cf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW5kdXN0cmlhbCUyMHZpc2l0fGVufDB8fDB8fHww",
    description: "Spacious industrial-style workspace.",
    location: "Detroit, MI",
    price: "$3,700/month",
  },
  {
    id: 8,
    title: "Modern Office Suite",
    image: "https://plus.unsplash.com/premium_photo-1724788724847-6d5da3271b80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TW9kZXJuJTIwT2ZmaWNlJTIwU3VpdGV8ZW58MHx8MHx8fDA%3D",
    description: "Stylish suite with modern interiors.",
    location: "Boston, MA",
    price: "$5,200/month",
  },
  {
    id: 9,
    title: "Multi-Storey Workspace",
    image: "https://plus.unsplash.com/premium_photo-1661879916150-f80f71c41df8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TXVsdGklMjBTdG9yZXklMjBXb3Jrc3BhY2V8ZW58MHx8MHx8fDA%3D",
    description: "Workspace across multiple levels with elevators.",
    location: "Atlanta, GA",
    price: "$6,800/month",
  },
  {
    id: 10,
    title: "Studio Space",
    image: "https://plus.unsplash.com/premium_photo-1661679584923-e6f62b0a9834?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3R1ZGlvJTIwc3BhY2V8ZW58MHx8MHx8fDA%3D",
    description: "Perfect for creative teams and agencies.",
    location: "Denver, CO",
    price: "$2,900/month",
  },
  {
    id: 11,
    title: "Skyline Tower View Office",
    image: "https://images.unsplash.com/photo-1604050094829-d77b82fc04b4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFNreWxpbmUlMjBUb3dlciUyMFZpZXclMjBPZmZpY2V8ZW58MHx8MHx8fDA%3D",
    description: "Work with a skyline view in a luxury tower.",
    location: "Miami, FL",
    price: "$7,000/month",
  },
  {
    id: 12,
    title: "Boutique Office Space",
    image: "https://images.unsplash.com/photo-1676474509670-f1978e55fa3b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Qm91dGlxdWUlMjBPZmZpY2UlMjBTcGFjZXxlbnwwfHwwfHx8MA%3D%3D",
    description: "Small and elegant office setup.",
    location: "Portland, OR",
    price: "$3,100/month",
  },
  {
    id: 13,
    title: "Converted Warehouse Office",
    image: "https://plus.unsplash.com/premium_photo-1670315266772-ae45debb9c52?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q29udmVydGVkJTIwV2FyZWhvdXNlJTIwT2ZmaWNlfGVufDB8fDB8fHww",
    description: "Trendy warehouse converted to workspace.",
    location: "Brooklyn, NY",
    price: "$4,200/month",
  },
  {
    id: 14,
    title: "Business Lounge & Offices",
    image: "https://images.unsplash.com/photo-1674460640980-7447ce277b0b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Includes access to lounge, meeting rooms.",
    location: "Phoenix, AZ",
    price: "$4,900/month",
  },
  {
    id: 15,
    title: "Luxury Commercial Complex",
    image: "https://plus.unsplash.com/premium_photo-1661962451694-aa601303b311?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8THV4dXJ5JTIwQ29tbWVyY2lhbCUyMENvbXBsZXh8ZW58MHx8MHx8fDA%3D",
    description: "Office inside luxury commercial building.",
    location: "Las Vegas, NV",
    price: "$8,000/month",
  },
  {
    id: 16,
    title: "Creative Loft Space",
    image: "https://images.unsplash.com/photo-1571898223382-0aa3499f0f2a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fENyZWF0aXZlJTIwTG9mdCUyMFNwYWNlfGVufDB8fDB8fHww",
    description: "Perfect for media & creative startups.",
    location: "San Diego, CA",
    price: "$3,600/month",
  }
];


const Commercial = () => {

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  

  return (
    <div className="min-h-screen bg-[#16243E] pt-36 py-12 px-4">
      {/* Section Title */}
      <motion.div
        ref={sectionRef}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-4"
      >
        <p className="text-orange-500 text-lg sm:text-xl font-semibold">Commercial Properties</p>
        <h2 className="text-3xl text-gray-200 sm:text-5xl mt-3 font-bold">
          Explore Our <span className="text-[#C2DF93]">Commercial Properties</span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-center mb-10"
      >
        <p className="text-gray-100 mt-2 text-lg">
          Explore our best workspaces for your business
        </p>
      </motion.div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto">
        {commercialProperties.map((property, index) => {
          const cardRef = useRef(null);
          const cardInView = useInView(cardRef, { once: true, margin: "-100px" });

          return (
            <motion.div
              ref={cardRef}
              key={property.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={cardInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">{property.title}</h2>
                <p className="text-gray-600 text-sm mt-2">{property.description}</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-sm text-gray-500">{property.location}</span>
                  <span className="text-sm font-semibold text-blue-600">{property.price}</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Commercial;

