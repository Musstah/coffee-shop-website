import React from "react";
import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaPhone,
  FaTelegram,
} from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import CreaditCards from "../../assets/website/credit-cards.webp";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="pt-12 pb-8 text-white bg-gradient-to-r from-primary to-primaryDark">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {/* company details section */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              delay: 0.2,
              duration: 0.6,
            }}
            className="space-y-6"
          >
            <h1 className="text-3xl font-bold uppercase">Coders Cafe</h1>
            <p className="text-sm max-w-[300px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad
              soluta maxime nam iste nemo ipsum sint quia culpa. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Aperiam incidunt quod
              molestias.
            </p>
            <div>
              <p className="flex items-center gap-2">
                <FaPhone />
                +1 (123) 456-7890
              </p>
              <p className="flex items-center gap-2 mt-2">
                <FaMapLocation /> Norida, Uttar Pradesh
              </p>
            </div>
          </motion.div>
          {/* Footer Links section */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              delay: 0.4,
              duration: 0.6,
            }}
            className="space-y-6"
          >
            <h1 className="text-3xl font-bold">Quick Links</h1>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {/* first column section */}
              <div>
                <ul className="space-y-2">
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact US</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
              {/* Second column section */}
              <div>
                <ul className="space-y-2">
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact US</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
            </div>
          </motion.div>
          {/* Social Links section */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              delay: 0.6,
              duration: 0.6,
            }}
            className="space-y-6"
          >
            <h1 className="text-3xl font-bold">Follow Us</h1>
            <div className="flex items-center gap-3">
              <FaFacebook className="text-3xl duration-300 hover:scale-105" />
              <FaInstagram className="text-3xl duration-300 hover:scale-105" />
              <FaTelegram className="text-3xl duration-300 hover:scale-105" />
              <FaGoogle className="text-3xl duration-300 hover:scale-105" />
            </div>
            <div>
              <h1 className="mb-2 text-xl font-semibold">Payment Methods</h1>
              <img src={CreaditCards} alt="credit cards" className="w-[80%]" />
            </div>
          </motion.div>
        </div>
        {/* copyright section */}
        <p className="mt-8 text-center text-white border-t-2 pt-8s">
          Copyright &copy; 2024 Company name. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
