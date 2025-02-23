import { Link } from "react-router-dom";
import {
    bengkelCover,
    disneyCloneCover,
    hmsiProjectCover,
    petaniGoCover,
    technofestCover,
    technoshiftCover,
    webCoffeeShopCover,
  } from "../assets/Assets";
import { MdOutlineArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
  
const ProjectList = () => {

const projectItems = [
  {
    to: "https://www.behance.net/gallery/211471711/Technofest-PhotographyPortofolio",
    cover: technofestCover,
    title: "TECHNOFEST 2023",
    description:"Photography",
    icons: [<MdOutlineArrowOutward key="arrow" className="w-8 h-8" />],
  },
  {
    to: "/tandabaca",
    cover: webCoffeeShopCover,
    title: "TANDA BACA COFFEESHOP",
    description:"Web Design",
    icons: [<MdOutlineArrowOutward key="arrow" className="w-8 h-8" />],
  },
  {
    to: "https://www.instagram.com/hmsi.iteba",
    cover: hmsiProjectCover,
    title: "HMSI INSTAGRAM DESIGNER",
    description:"Design Graphic",
    icons: [<MdOutlineArrowOutward key="arrow" className="w-8 h-8" />],
  },
  {
    to: "https://www.instagram.com/technofest.iteba",
    cover: technoshiftCover,
    title: "TECHNOSHIFT 2024",
    description:"Design Graphic",
    icons: [<MdOutlineArrowOutward key="arrow" className="w-8 h-8" />],
  },
  {
    to: "mrjasa",
    cover: bengkelCover,
    title: "MR Jasa",
    description:"UI/UX Design",
    icons: [<MdOutlineArrowOutward key="arrow" className="w-8 h-8" />],
  },
  {
    to: "/petanigo/#top",
    cover: petaniGoCover,
    title: "PETANI GO WEBSITE",
    description:"Infinite Learning Batch 7 Final Project",
    icons: [<MdOutlineArrowOutward key="arrow" className="w-8 h-8" />],
  },
  {
    to: "disneyclone",
    cover: disneyCloneCover,
    title: "DISNEY+ CLONE WEBSITE",
    description:"Side Project",
    icons: [<MdOutlineArrowOutward key="arrow" className="w-8 h-8" />],
  },
];

const fadeInUp = {
  hidden: { y: 60, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const location = useLocation();

useEffect(() => {
  if (window.innerWidth >= 768) {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 50);
  }
}, [location]);

  return (
    <motion.div
    id="top"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
    className="flex min-h-full flex-col items-center py-8 sm:py-28 px-6"
  >
    <h2 className="text-3xl font-bold mb-8 text-center">
      Projects
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
      {projectItems.map((item, index) => (
        <a
          key={index}
          href={item.to}
          className="bg-gray-300 bg-opacity-50 shadow-md rounded-2xl p-5 border dark:text-white dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-700  hover:bg-black hover:text-white hover:scale-105 duration-300 ease-in-out"
        >
          <img
            src={item.cover}
            className="w-full rounded-lg mb-4"
            alt={item.title}
          />
          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="hover:text-white font-normal">{item.description}</p>
            <div className="flex justify-end mt-2">
              <p className="mr-2 mt-1 font-semibold">Visit</p>
              {item.icons}
            </div>
          </div>
        </a>
      ))}
    </div>
  </motion.div>
  );
};

export default ProjectList;
