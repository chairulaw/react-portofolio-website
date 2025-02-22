import { motion } from "framer-motion";
import { MdOutlineArrowOutward } from "react-icons/md";
import { coverDisneyClone, slideDisneyClone1, slideDisneyClone2 } from "../assets/Assets";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const DisneyClone = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  // useEffect(() => {
  //   if (window.innerWidth >= 768) {
  //     // Hanya berlaku di desktop (md ke atas)
  //     setTimeout(() => {
  //       window.scrollTo(0, 0);
  //     }, 50); // Delay dikit biar pastiin efeknya kena
  //   }
  // }, []);

  return (
    <motion.div
      id="top"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="mt-8 md:mt-20 flex items-center justify-center mb-4 px-6 md:px-20 lg:px-40"
    >
      <div className="max-w-screen-md w-full mx-auto">
        {/* Back Button */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="group inline-block"
        >
          <Link
            to="/projectlist"
            className="relative inline-flex items-center text-gray-500 dark:group-hover:text-white group-hover:text-black 
              after:content-[' '] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] 
              dark:after:bg-white after:bg-black after:transition-all after:duration-300 group-hover:after:w-full font-semibold"
          >
            <span>&larr;</span>
            <span className="ml-2">Back</span>
          </Link>
        </motion.div>

        {/* Project Cover */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="relative mt-3 bg-gray-800 shadow-lg rounded-lg overflow-hidden"
        >
          <img
            src={coverDisneyClone}
            alt="disneyCloneCover"
            className="object-cover max-w-full"
          />
        </motion.div>

        {/* Project Info */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-8"
        >
          <p className="border rounded-full px-4 py-1 text-sm inline-block hover:bg-gray-200 dark:hover:text-black ease-in-out duration-300 cursor-pointer">
            Website
          </p>
          <h1 className="text-4xl font-bold mt-4">
            Disney+ Clone
          </h1>
          <p className="text-gray-600 dark:text-gray-100 text-justify mt-4">
            There is nothing here, just a React side project
          </p>
        </motion.div>

        {/* Visit Project Button */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-8 group">
            <a 
            href="https://react-disney-clone-by-chairulaw.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center text-blue-500 dark:group-hover:text-white group-hover:text-black 
              after:content-[' '] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] 
              dark:after:bg-white after:bg-black after:transition-all after:duration-300 group-hover:after:w-full font-semibold">
                Visit Project <MdOutlineArrowOutward className="w-5 h-5 ml-2" />
              </a>
        </motion.div>

        {/* Project Overview */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-12">
            <h2 className="text-2xl font-bold">Project Overview</h2>
            <p className="text-gray-600 dark:text-gray-100 text-justify mt-4">
            Just a side project I worked on to revisit my ReactJS and Tailwind CSS skills. I also used the API from themoviedb.org to fetch movie data, allowing users to browse, search, and view details of various films.
            </p>
        </motion.div>

                    {/* Technologies Used */}
                    <div className="md:grid grid-cols-2 gap-4">
            <motion.div initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp} className="mt-12">
              <h2 className="text-2xl font-bold">Technologies Used</h2>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-100 mt-4">
                <li>React JS</li>
                <li>Vite</li>
                <li>Tailwind CSS</li> {/* Fixed typo */}
                <li>The Movie Database API</li> {/* Fixed typo */}
              </ul>
            </motion.div>
    
            {/* Features */}
            <motion.div initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp} className="mt-12">
              <h2 className="text-2xl font-bold">Features</h2>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-100 mt-4">
                <li>Search and Browse Films</li>
              </ul>
            </motion.div>
            </div>

        {/* Showcase */}
        <motion.div initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp} className="mt-12">
              <h2 className="text-2xl font-bold">Showcase</h2>
              <img src={slideDisneyClone1} alt="Mr Jasa Service" className="object-cover rounded-lg max-w-full mt-4" />
              <img src={slideDisneyClone2} alt="Mr Jasa Service" className="object-cover rounded-lg max-w-full mt-4" />
            </motion.div>
      </div>
    </motion.div>
  );
};

export default DisneyClone;
