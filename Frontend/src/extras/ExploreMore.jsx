import React from 'react'
import { motion } from "framer-motion";
import AvailableProperties from '../Nav/AvailableProperties';

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

const houseProperties = [
    {
        id: 1,
        title: "Modern Family House",
        image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800",
        description: "Spacious family home in a quiet neighborhood.",
        location: "San Jose, CA",
        price: "$3,800/month",
    },
    {
        id: 2,
        title: "Cozy Countryside Cottage",
        image: "https://images.unsplash.com/photo-1501183638710-841dd1904471?w=800",
        description: "Charming cottage with a garden and fireplace.",
        location: "Nashville, TN",
        price: "$2,100/month",
    },
    {
        id: 3,
        title: "Lakefront Villa",
        image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800",
        description: "Beautiful lake views with private dock.",
        location: "Lake Tahoe, NV",
        price: "$4,500/month",
    },
    {
        id: 4,
        title: "Suburban Dream Home",
        image: "https://plus.unsplash.com/premium_photo-1661883982941-50af7720a6ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U3VidXJiYW4lMjBEcmVhbSUyMEhvbWV8ZW58MHx8MHx8fDA%3D",
        description: "Open-plan design with a backyard and patio.",
        location: "Dallas, TX",
        price: "$2,900/month",
    },
    {
        id: 5,
        title: "Beachside Bungalow",
        image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800",
        description: "Steps away from the beach, perfect getaway.",
        location: "Santa Barbara, CA",
        price: "$5,200/month",
    },
    {
        id: 6,
        title: "Rustic Log Cabin",
        image: "https://images.unsplash.com/photo-1631405146530-d25c3cd04407?w=600",
        description: "Wooden cabin nestled in forested hills.",
        location: "Boulder, CO",
        price: "$2,400/month",
    },
    {
        id: 7,
        title: "Historic Townhouse",
        image: "https://images.unsplash.com/photo-1690303347611-9fb75704f811?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8SGlzdG9yaWMlMjBUb3duaG91c2V8ZW58MHx8MHx8fDA%3D",
        description: "Classic charm with modern amenities.",
        location: "Savannah, GA",
        price: "$3,100/month",
    },
    {
        id: 8,
        title: "Smart Eco House",
        image: "https://images.unsplash.com/photo-1630699294887-fa8852095404?w=600",
        description: "Sustainable living with full smart-home tech.",
        location: "Boulder, CO",
        price: "$3,900/month",
    },
];

const villaProperties = [
    {
        id: 1,
        title: "Luxury Beachfront Villa",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
        description: "A stunning beachfront villa with modern interiors and a private pool.",
        location: "Malibu, CA",
        price: "$12,000/month",
    },
    {
        id: 2,
        title: "Tropical Paradise Villa",
        image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800",
        description: "Escape to paradise in this serene tropical villa surrounded by nature.",
        location: "Maui, HI",
        price: "$9,500/month",
    },
    {
        id: 3,
        title: "Modern Hilltop Villa",
        image: "https://plus.unsplash.com/premium_photo-1731453260225-931ebdde6d16?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TW9kZXJuJTIwSGlsbHRvcCUyMFZpbGxhfGVufDB8fDB8fHww",
        description: "Sleek villa with panoramic views from a hilltop location.",
        location: "Aspen, CO",
        price: "$11,000/month",
    },
    {
        id: 4,
        title: "Mediterranean Villa",
        image: "https://images.unsplash.com/photo-1641352576856-416aeb1baee7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8TWVkaXRlcnJhbmVhbiUyMFZpbGxhfGVufDB8fDB8fHww",
        description: "Classic Mediterranean design with elegant finishes and gardens.",
        location: "Santa Barbara, CA",
        price: "$10,000/month",
    },
    {
        id: 5,
        title: "Secluded Mountain Villa",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800",
        description: "Private and peaceful, nestled in the mountains with breathtaking views.",
        location: "Lake Tahoe, NV",
        price: "$8,800/month",
    },
    {
        id: 6,
        title: "Designer Glass Villa",
        image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800",
        description: "All-glass villa offering natural light and luxury open living.",
        location: "Los Angeles, CA",
        price: "$13,000/month",
    },
    {
        id: 7,
        title: "Eco-Friendly Green Villa",
        image: "https://images.unsplash.com/photo-1626910152362-b8ae726a98f3?q=80&w=1950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Sustainable design with solar panels and eco features.",
        location: "Sedona, AZ",
        price: "$7,900/month",
    },
    {
        id: 8,
        title: "Classic French Villa",
        image: "https://images.unsplash.com/photo-1709501580562-91a9415917cc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fENsYXNzaWMlMjBGcmVuY2glMjBWaWxsYXxlbnwwfHwwfHx8MA%3D%3D",
        description: "Inspired by French countryside villas with charm and character.",
        location: "Napa Valley, CA",
        price: "$9,200/month",
    },
    {
        id: 9,
        title: "Zen Retreat Villa",
        image: "https://images.unsplash.com/photo-1552616958-62df7245f4cf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Peaceful retreat designed with zen elements and private garden.",
        location: "Big Sur, CA",
        price: "$10,500/month",
    },
    {
        id: 10,
        title: "Lakefront Luxury Villa",
        image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=800",
        description: "Elegant lakefront villa with private dock and stunning views.",
        location: "Minneapolis, MN",
        price: "$9,800/month",
    },
    {
        id: 11,
        title: "Countryside Estate Villa",
        image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800",
        description: "Gorgeous countryside villa with rustic charm and modern amenities.",
        location: "Charlottesville, VA",
        price: "$8,200/month",
    },
    {
        id: 12,
        title: "Skyline View Villa",
        image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800",
        description: "Luxury villa offering skyline views from every room.",
        location: "Seattle, WA",
        price: "$11,700/month",
    },
];

const warehouseProperties = [
    {
      id: 1,
      title: "Large Distribution Center",
      description: "20,000 sq.ft warehouse ideal for logistics operations.",
      location: "Manesar, Gurgaon",
      price: "₹4,50,000/month",
      image: "https://images.unsplash.com/photo-1583564345823-8606fb448c09?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8TGFyZ2UlMjBEaXN0cmlidXRpb24lMjBDZW50ZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 2,
      title: "Cold Storage Warehouse",
      description: "Perfect for temperature-sensitive goods and perishables.",
      location: "Bhiwandi, Mumbai",
      price: "₹3,20,000/month",
      image: "https://plus.unsplash.com/premium_photo-1661950006431-b10fd73ed917?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q29sZCUyMFN0b3JhZ2UlMjBXYXJlaG91c2V8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 3,
      title: "Multi-Level Industrial Unit",
      description: "Modern facility with elevator access and ample space.",
      location: "Peenya, Bangalore",
      price: "₹5,00,000/month",
      image: "https://images.unsplash.com/photo-1597057435443-8a51eeb5538f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dWx0aSUyMExldmVsJTIwSW5kdXN0cmlhbCUyMFVuaXR8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 4,
      title: "Spacious Industrial Godown",
      description: "Ground-level access and high ceiling height.",
      location: "SITAPUR Road, Lucknow",
      price: "₹2,00,000/month",
      image: "https://images.unsplash.com/photo-1707273550146-ef6de869f686?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U3BhY2lvdXMlMjBJbmR1c3RyaWFsJTIwR29kb3dufGVufDB8fDB8fHww",
    },
    {
      id: 6,
      title: "Logistics Storage Space",
      description: "Strategically located for transport networks.",
      location: "Sanjay Gandhi Nagar, Hyderabad",
      price: "₹2,90,000/month",
      image: "https://plus.unsplash.com/premium_photo-1663012807871-56c5c717f655?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TG9naXN0aWNzJTIwU3RvcmFnZSUyMFNwYWNlfGVufDB8fDB8fHww",
    },
    {
      id: 7,
      title: "Warehouse with Loading Docks",
      description: "Perfect for large-scale inventory operations.",
      location: "Kheda, Ahmedabad",
      price: "₹3,75,000/month",
      image: "https://images.unsplash.com/photo-1725781535657-29d825bc7824?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8V2FyZWhvdXNlJTIwd2l0aCUyMExvYWRpbmclMjBEb2Nrc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 8,
      title: "Small Warehouse for Rent",
      description: "1000 sq.ft, ideal for local businesses.",
      location: "Rajajinagar, Bangalore",
      price: "₹75,000/month",
      image: "https://images.unsplash.com/photo-1707496716716-018d98618f52?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U21hbGwlMjBXYXJlaG91c2UlMjBmb3IlMjBSZW50fGVufDB8fDB8fHww",
    },
    {
      id: 9,
      title: "Warehouse with Office Space",
      description: "Includes 3 rooms and pantry with power backup.",
      location: "MIDC, Pune",
      price: "₹1,80,000/month",
      image: "https://plus.unsplash.com/premium_photo-1670315266772-ae45debb9c52?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8V2FyZWhvdXNlJTIwd2l0aCUyME9mZmljZSUyMFNwYWNlfGVufDB8fDB8fHww",
    },
    {
      id: 10,
      title: "Export Storage Unit",
      description: "Ideal for exporters and packagers.",
      location: "Salt Lake, Kolkata",
      price: "₹2,40,000/month",
      image: "https://images.unsplash.com/photo-1601912552080-0fb89fd08042?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEV4cG9ydCUyMFN0b3JhZ2UlMjBVbml0fGVufDB8fDB8fHww",
    },
    {
      id: 11,
      title: "Warehouse in Logistics Park",
      description: "Secured, gated complex with CCTV monitoring.",
      location: "Pimpri-Chinchwad, Pune",
      price: "₹3,10,000/month",
      image: "https://plus.unsplash.com/premium_photo-1682146773000-474a2592d2b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8V2FyZWhvdXNlJTIwaW4lMjBMb2dpc3RpY3MlMjBQYXJrfGVufDB8fDB8fHww",
    },
    {
      id: 13,
      title: "Food Grade Warehouse",
      description: "FSSAI approved for food products storage.",
      location: "Karkhana, Secunderabad",
      price: "₹2,60,000/month",
      image: "https://plus.unsplash.com/premium_photo-1661954639355-4a9d1e9f8590?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Rm9vZCUyMEdyYWRlJTIwV2FyZWhvdXNlfGVufDB8fDB8fHww",
    },
    {
      id: 16,
      title: "Open Shed Warehouse",
      description: "Affordable with basic utilities.",
      location: "Kanpur Road, Lucknow",
      price: "₹85,000/month",
      image: "https://plus.unsplash.com/premium_photo-1661914966293-c129661d4915?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Rm9vZCUyMEdyYWRlJTIwV2FyZWhvdXNlfGVufDB8fDB8fHww",
    },
  ];  


  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };
  
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  };
  
  const sectionVariant = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };
  
  const ExploreMore = () => {
    const renderSection = (title, subtitle, description, properties, bgColor, textColor = "white") => (
      <div className={`min-h-screen pt-36 py-12 px-4`} style={{ backgroundColor: bgColor }}>
        <motion.div
          className="text-center mb-10"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-orange-500 text-lg sm:text-xl font-semibold">{subtitle}</p>
          <h2 className={`text-3xl sm:text-5xl mt-3 font-bold ${textColor === "white" ? "text-white" : "text-gray-800"}`}>
            {title}
          </h2>
          <p className={`mt-3 text-lg ${textColor === "white" ? "text-gray-300" : "text-gray-600"}`}>{description}</p>
        </motion.div>
  
        <motion.div
          className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {properties.map((item, idx) => (
            <motion.div key={idx} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden" variants={cardVariants}>
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">{item.title}</h2>
                <p className="text-gray-600 text-sm mt-2">{item.description}</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-sm text-gray-500">{item.location}</span>
                  <span className="text-sm font-semibold text-blue-600">{item.price}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    );
  
    return (
      <div>
        <AvailableProperties />
  
        {renderSection(
          "Discover Our Apartments",
          "Urban Living",
          "Handpicked modern apartments perfect for every lifestyle",
          apartmentProperties,
          "#1A2238"
        )}
  
        {renderSection(
          "Explore Our Commercial Properties",
          "Commercial Properties",
          "Explore our best workspaces for your business",
          commercialProperties,
          "#16243E"
        )}
  
        {renderSection(
          "Explore Our House Stays",
          "Relaxed Living",
          "Carefully selected homes for comfort and peace of mind",
          houseProperties,
          "#1A2238"
        )}
  
        {renderSection(
          "Discover Our Villas",
          "Luxury Villas",
          "Exclusive villas handpicked for comfort and elegance",
          villaProperties,
          "#1A2238"
        )}
  
        {/* Warehouse Special Styling */}
        <div className="relative min-h-screen pt-36 bg-gradient-to-br from-[#0f172a] to-[#1e293b] py-12 px-4 text-white">
          <motion.div
            className="text-center mb-10"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h1 className="text-4xl font-bold text-[#93C5FD]">Warehouse Properties</h1>
            <p className="text-gray-300 mt-2 text-lg">Find industrial spaces for storage and logistics</p>
          </motion.div>
  
          <motion.div
            className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto"
            variants={sectionVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {warehouseProperties.map((property, idx) => (
              <motion.div
                key={idx}
                className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300"
                variants={cardVariants}
              >
                <img src={property.image} alt={property.title} className="w-full h-48 object-cover" />
                <div className="p-5">
                  <h2 className="text-xl font-semibold text-[#C2DF93]">{property.title}</h2>
                  <p className="text-gray-300 text-sm mt-2">{property.description}</p>
                  <div className="flex justify-between items-center mt-4 text-sm">
                    <span className="text-gray-400">{property.location}</span>
                    <span className="text-[#93C5FD] font-semibold">{property.price}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    );
  };
  
  export default ExploreMore;
