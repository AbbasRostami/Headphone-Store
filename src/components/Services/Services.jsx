import React from "react";
import icon1 from "./../../assets/icons/obj1.png";
import icon2 from "./../../assets/icons/obj2.png";
import icon3 from "./../../assets/icons/obj3.png";
import { UpdateFollower } from "react-mouse-follower";
import { easeInOut, motion } from "framer-motion";

 export const fadeUp = (delay) => {
  return {
    hidden: {
      opacity: 0,
      x: -100,
      // scale: 1
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: delay,
      },
    },
   
  };
};
const ServicesData = [
  {
    id: 1,
    title: "Security",
    icon: icon1,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos iusto minima ad ut id eos ad ut id eos",
    delay: 0.5,
  },
  {
    id: 2,
    title: "Security",
    icon: icon2,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos iusto minima ad ut id eos ad ut id eos",
    delay: 0.5,
  },
  {
    id: 3,
    title: "Security",
    icon: icon3,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos iusto minima ad ut id eos ad ut id eos",
    delay: 0.5,
  },
];
const Services = () => {
  return (
    <>
      <section className="bg-gray-100 font-poppins py-8">
        <div className="container py-14">
          <motion.h1
            variants={fadeUp(0.2)}
            whileInView="show"
            initial="hidden"
            className="text-3xl font-bold text-center pb-8"
          >
            Sercives
          </motion.h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {ServicesData.map((data) => (
              <UpdateFollower
                mouseOptions={{
                  backgroundColor: "white",
                  zIndex: 999,
                  followSpeed: 1.5,
                  scale: 5,
                  rotate: 720,
                  mixBlendMode: "darken",
                  backgroundElement: (
                    <motion.div>
                      <img src={data.icon} alt="" />
                    </motion.div>
                  ),
                }}
              >
                <motion.div
                  variants={fadeUp(data.delay)}
                  initial="hidden"
                  whileInView="show"
                  className="flex justify-center rounded-xl bg-white flex-col p-5 max-w-[300px] mx-auto shadow-lg items-center"
                >
                  <img className="w-[100px] mb-4" src={data.icon} alt="" />
                  <div className="text-center space-y-2">
                    <h1 className="text-2xl font-bold">{data.title}</h1>
                    <p className="text-center text-sm text-black/75">
                      {data.desc}
                    </p>
                  </div>
                </motion.div>
              </UpdateFollower>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
