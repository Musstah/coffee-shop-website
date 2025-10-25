import React from "react";
import BgImage from "../../assets/bg-slate.png";
import BlackCoffe from "../../assets/black.png";
import Navbar from "../Navbar/Navbar";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const bgImage = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const Hero = () => {
  const [sidebar, setSidebar] = React.useState(false);
  return (
    <main style={bgImage}>
      <section className="min-h-[750px] w-full">
        <div className="container">
          {/* Navbar section  */}
          <Navbar sidebar={sidebar} setSidebar={setSidebar} />
          {/* Hero Section  */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]">
            {/* text content section  */}
            <div className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28">
              <motion.h1
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1,
                }}
                className="font-bold leading-tight text-7xl ml-14"
              >
                Blvck Tumbler
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1.2,
                }}
                className="relative"
              >
                <div className="relative z-10 space-y-4">
                  <h1 className="text-2xl">Black Lifestyle Lovers,</h1>
                  <h1 className="text-sm opacity-55 loading-loose">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Animi fugiat quae porro nihil exercitationem dignissimos
                    aspernatur quam tenetur numquam nobis, possimus explicabo
                    error ullam temporibus aliquam magni
                  </h1>
                </div>
                <div className="absolute -top-6 -left-10 w-[250px] h-[170px] bg-gray-700/25"></div>
              </motion.div>
            </div>
            {/* Hero Image section  */}
            <div className="relative">
              <motion.img
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.4,
                }}
                src={BlackCoffe}
                alt=""
                className="relative z-40 h-[400px] md:h-[700px] img-shadow"
              />
              {/* orange ring circle */}
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.8,
                }}
                className="h-[180px] w-[180px] absolute top-24 -right-16 border-primary border-[20px] rounded-full z-10"
              ></motion.div>
              {/* big text section */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.8,
                }}
                className="absolute -top-20 left-[200px] z-[1]"
              >
                <h1 className="text-[140px] scale-150 font-bold text-darkGray/40 leading-none">
                  Blvck Tumbler
                </h1>
              </motion.div>
            </div>
            {/* third div section */}
            <div className="hidden lg:block">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1.2,
                }}
                className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28"
              >
                <h1 className="font-bold leading-tight opacity-0 text-7xl ml-14">
                  Blvck Tumbler
                </h1>
                <div className="relative">
                  <div className="relative z-10 space-y-4">
                    <h1 className="text-2xl">Blvck Tumbler</h1>
                    <h1 className="text-sm opacity-55 loading-loose">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Animi fugiat quae porro nihil, Animi fugiat quae porro
                      nihil, Animi fugiat quae porro nihil, Animi fugiat quae
                      porro nihil,
                    </h1>
                  </div>
                  <div className="absolute -top-6 -right-10 w-[250px] h-[170px] bg-darkGray/50"></div>
                </div>
              </motion.div>
              <div></div>
            </div>
          </div>
        </div>
        {/* sidebar Menu section  */}
        {sidebar && (
          <motion.div
            initial={{ x: "100*" }}
            whileInView={{ x: 0 }}
            className="absolute top-0 right-0 w-[140px] h-full bg-gradient-to-b from-primary/80 to-primaryDark/80 backdrop-blur-sm z-50"
          >
            <div className="flex items-center justify-center w-full h-full ">
              <div className="flex flex-col justify-center gap-6 text-white">
                {/* line */}
                <div className="w-[1px] h-[70px] bg-white"></div>
                {/* social Icons  */}
                <div className="inline-block p-2 border border-white rounded-full cursor-pointer">
                  <FaFacebook className="text-2xl" />
                </div>
                <div className="inline-block p-2 border border-white rounded-full cursor-pointer">
                  <FaTwitter className="text-2xl" />
                </div>
                <div className="inline-block p-2 border border-white rounded-full cursor-pointer">
                  <FaInstagram className="text-2xl" />
                </div>

                <div className="w-[1px] h-[70px] bg-white"></div>
              </div>
            </div>
          </motion.div>
        )}
      </section>
    </main>
  );
};

export default Hero;
