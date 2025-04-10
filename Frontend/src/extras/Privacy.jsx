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

const Privacy = () => {
  const navigate = useNavigate();

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
          className="absolute cursor-pointer top-36 right-6 flex items-center gap-2 text-white hover:text-blue-400 transition-all"
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
          Privacy Policy
        </motion.h1>

        {[
          {
            title: "1. Introduction",
            content:
              "At RentalHouse WebApp, we are committed to protecting your personal information. This policy explains how we collect, use, and safeguard your data.",
          },
          {
            title: "2. Information We Collect",
            content:
              "We collect information you provide during registration, property listing, bookings, and contact forms. This includes your name, email, phone number, and property-related details.",
          },
          {
            title: "3. How We Use Your Information",
            content:
              "Your information is used to manage bookings, communicate updates, personalize user experience, and improve our services. We do not sell your personal information to third parties.",
          },
          {
            title: "4. Data Sharing",
            content:
              "We may share your information with trusted service providers who help us operate the platform, but only under strict data protection agreements. Your data will never be shared for marketing purposes without your explicit consent.",
          },
          {
            title: "5. Cookies",
            content:
              "We use cookies to enhance user experience, analyze traffic, and store session data. You can manage or disable cookies through your browser settings at any time.",
          },
          {
            title: "6. Data Security",
            content:
              "We implement security measures to protect your data, including encryption, access controls, and secure server environments.",
          },
          {
            title: "7. Your Rights",
            content:
              "You have the right to access, update, or delete your personal information at any time. Please contact us if you wish to exercise these rights.",
          },
          {
            title: "8. Changes to This Policy",
            content:
              'We may update this Privacy Policy to reflect changes in our practices. Any updates will be posted here with a revised "last updated" date.',
          },
        ].map((section, index) => (
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

export default Privacy;
