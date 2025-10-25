import React from "react";
import WorldMap from "../../assets/world-map.png";
import { motion } from "framer-motion";

const WhereToBuy = () => {
  return (
    <div className="container my-36">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 place-items-center">
        {/* form section */}
        <div className="space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.2,
            }}
            className="font-serif text-4xl font-bold text-darkGray"
          >
            Buy our products from anywhere
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
            }}
            className="flex items-center gap-4"
          >
            <input
              type="text"
              placeholder="Name"
              className="input-style w-full lg:w-[150px]"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full input-style"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.6,
            }}
            className="flex items-center gap-4"
          >
            <input
              type="text"
              placeholder="Country"
              className="w-full input-style"
            />
            <input
              type="text"
              placeholder="ZipCode"
              className="input-style w-full lg:w-[150px]"
            />
          </motion.div>
          <motion.button
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.8,
            }}
            className="w-full primary-btn"
          >
            Order Now
          </motion.button>
        </div>
        {/* world map section */}
        <div className="col-span-2">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 1,
            }}
            src={WorldMap}
            alt=""
            className="w-full sm:w-[500px] mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default WhereToBuy;
