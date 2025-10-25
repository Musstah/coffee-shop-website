import React from "react";
import { delay, motion } from "framer-motion";
import Coffee1 from "../../assets/coffee/coffee1.png";
import Coffee3 from "../../assets/coffee/coffee3.png";

const servicesData = [
  {
    id: 1,
    image: Coffee1,
    title: "Black Coffee",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam exercitationem nostrum tenetur",
  },
  {
    id: 2,
    image: Coffee3,
    title: "Hot Coffee",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam exercitationem nostrum tenetur",
  },
  {
    id: 3,
    image: Coffee1,
    title: "Cold Coffee",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam exercitationem nostrum tenetur",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 10,
      ease: "easeInOut",
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.6,
      staggerChildren: 0.4,
    },
  },
};

const Services = () => {
  return (
    <div className="container my-16 space-y-4">
      {/* header section */}
      <div className="max-w-lg mx-auto space-y-2 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 10,
            delay: 0.2,
          }}
          className="text-3xl font-bold text-lightGray"
        >
          Fresh and <span className="text-primary">Tasty coffee</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 10,
            delay: 0.6,
          }}
          className="text-sm opacity-50"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
          alias voluptate tempore provident inventore voluptates corrupti
          nesciunt laboriosam iure aperiam? Nemo, nisi.
        </motion.p>
      </div>
      {/* card section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.8 }}
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3"
      >
        {servicesData.map((Service) => (
          <motion.div
            variants={cardVariants}
            className="p-4 space-y-6 text-center"
          >
            <img
              src={Service.image}
              alt=""
              className="img-shadow2 max-w-[200px] mx-auto hover:scale-110 duration-300 cursor-pointer"
            />
            <div className="spacy-y-2">
              <h1 className="text-2xl font-bold text-primary">
                {Service.title}
              </h1>
              <p className="text-darkGray">{Service.subtitle}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;
