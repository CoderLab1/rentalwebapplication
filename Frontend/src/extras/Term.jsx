import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeftCircle } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const TermAndCondition = () => {
  const navigate = useNavigate();

  const sections = [
    {
      title: "1. User Agreement",
      content:
        "By using our RentalHouse WebApp, you agree to comply with these Terms and Conditions. This includes all users who browse, register, list properties, or make bookings through the platform.",
    },
    {
      title: "2. Property Listings",
      content:
        "Users are responsible for the accuracy of the property details they list. Misleading or false information may result in the removal of the listing or suspension of the user account.",
    },
    {
      title: "3. Bookings & Payments",
      content:
        "All bookings made through the platform are subject to approval by the property owner/admin. Users are expected to make timely payments, and cancellations may be subject to a fee depending on the property's cancellation policy.",
    },
    {
      title: "4. User Conduct",
      content:
        "Users must behave respectfully towards others. Inappropriate content, abusive language, or fraudulent activity will lead to immediate account suspension and legal consequences.",
    },
    {
      title: "5. Privacy",
      content: (
        <>
          We respect your privacy. Your data will only be used in accordance with our{" "}
          <a href="/privacy" className="text-blue-400 underline hover:text-blue-200">
            Privacy Policy
          </a>
          .
        </>
      ),
    },
    {
      title: "6. Changes to Terms",
      content:
        "We may update these Terms and Conditions from time to time. You will be notified of significant changes via email or platform notification.",
    },
  ];

  return (
    <div className="w-full px-6 py-12 text-gray-200 bg-gray-900 mt-10">
      <motion.div
        className="pt-12 mx-auto max-w-4xl"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <button
          onClick={() => navigate(-1)}
          className="absolute  cursor-pointer top-36 right-6 flex items-center gap-2 text-white hover:text-blue-400 transition-all"
        >
          <ArrowLeftCircle size={24} />
          <span className="hidden sm:inline">Back</span>
        </button>

        <motion.h1
          className="text-3xl font-bold mb-6 text-white text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Terms & Conditions
        </motion.h1>

        {sections.map((section, index) => (
          <motion.section
            key={index}
            className="mb-6"
            custom={index + 1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-xl font-semibold mb-2 text-white">{section.title}</h2>
            <p className="text-gray-300">{section.content}</p>
          </motion.section>
        ))}

        <motion.p
          className="mt-8 text-sm text-gray-400 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Last updated: April 2025
        </motion.p>
      </motion.div>
    </div>
  );
};

export default TermAndCondition;
