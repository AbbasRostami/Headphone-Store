import React, { useState } from "react";
import Headphone1 from "./../../assets/headphone.png";
import Headphone2 from "./../../assets/headphone2.png";
import Headphone3 from "./../../assets/headphone3.png";
import { FaWhatsapp } from "react-icons/fa";
import { UpdateFollower } from "react-mouse-follower";
import { AnimatePresence, easeInOut, motion } from "framer-motion";


const fadeUp = (delay) => {
  return {
    hidden: {
      opacity: 0,
      y: 100,
      // scale: 1
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: easeInOut,
      },
    },
    exit: {
      opacity: 0,
      y: 50,
      // scale: 1
      transition: {
        duration: 0.2,
        ease: easeInOut,
      },
    },
  };
};

const HeadphoneData = [
  {
    id: 1,
    image: Headphone1,
    title: "Headphones Wireless",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos iusto minima ad ut id eos ad ut id eos",
    price: "$100",
    modal: "Modal Brown",
    bgColor: "#8b5958",
  },
  {
    id: 2,
    image: Headphone2,
    title: "Headphones Wireless 2",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos iusto minima ad ut id eos ad ut id eos",
    price: "$100",
    modal: "Lime Green",
    bgColor: "#638153",
  },
  {
    id: 3,
    image: Headphone3,
    title: "Headphones Wireless 3",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos iusto minima ad ut id eos ad ut id eos",
    price: "$100",
    modal: "Ocean Blue",
    bgColor: "#5d818c",
  },
];

const Hero = () => {
  const [activeData, setActiveData] = useState(HeadphoneData[0]);

  const handleActiveData = (data) => {
    setActiveData(data);
  };

  return (
    <>
      <section className="bg-brandDark text-white font-varela">
        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[700px]">
          <div className="flex flex-col justify-center py-14 md:py-0 xl:max-w-[500px]">
            <div className=" space-y-5 text-center md:text-left">
              <AnimatePresence mode="wait">
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 9999,
                    followSpeed: 0.5,
                    rotate: -720,
                    mixBlendMode: "difference",
                    scale: 10,
                  }}
                >
                  <motion.h1
                    key={activeData.id}
                    variants={fadeUp(0.2)}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className="text-3xl lg:text-6xl font-bold font-varela"
                  >
                    {activeData.title}
                  </motion.h1>
                </UpdateFollower>
              </AnimatePresence>

              <AnimatePresence mode="wait">

              <motion.p 
              key={activeData.id}
              variants={fadeUp(0.3)}
              initial="hidden"
              animate="show"
              exit="exit"
              className="text-sm leading-loose text-white/80">
                {activeData.subtitle}
              </motion.p>

              </AnimatePresence>


              <AnimatePresence mode="wait">

              <motion.button
               key={activeData.id}
               variants={fadeUp(0.3)}
               initial="hidden"
               animate="show"
               exit="exit"
                style={{
                  backgroundColor: activeData.bgColor,
                }}
                className=" px-4 py-2 inline-block font-normal rounded-sm"
              >
                Buy and Listen
              </motion.button>
                
              </AnimatePresence>
             

              <div className="flex item justify-center md:justify-start gap-4 !mt-14">
                <div className="w-20 h-[1px] bg-white"></div>
                <p className=" uppercase text-sm">Top Headphone for you</p>
                <div className="w-20 h-[1px] bg-white"></div>
              </div>

              <div className="grid grid-cols-3 gap-10">
                {HeadphoneData.map((item) => {
                  return (
                    <div
                      key={item.id}
                      onClick={() => handleActiveData(item)}
                      className="grid grid-cols-2 place-items-center cursor-pointer"
                    >
                      <div>
                        <img className="w-[200px]" src={item.image} alt="" />
                      </div>
                      <div className="space-y-2">
                        <p className="text-base font-bold">{item.modal}</p>
                        <p className="text-xs font-normal text-nowrap">
                          {item.price}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-end items-center">
            <AnimatePresence mode="wait">

              <motion.img
                key={activeData.id}
                initial={{ opacity: 0, scale: 0.9, y: 100 }}
                animate={{ opacity: 1, scale:1, y: 0 }}
                transition={{ duration: 0.4, delay:0.2, easeInOut }}
                exit={{opacity:0, scale:0.9, y:100,
                  transition:{
                    duration:0.2
                  }
                }}
                className="w-[300px] md:w-[400px] xl:w-[550px]"
                src={activeData.image}
                alt=""
              />

            </AnimatePresence>



          </div>

          <div className="text-3xl text-white fixed bottom-10 right-10 hover:rotate-[360deg] duration-500 z-[99999] mix-blend-difference">
            <a href="">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
