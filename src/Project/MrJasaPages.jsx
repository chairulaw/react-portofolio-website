import { motion } from "framer-motion";
import { MdOutlineArrowOutward } from "react-icons/md";
import { bengkelCover, slideBengkel1, slideBengkel2, slideBengkel3 } from "../assets/Assets";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const MrJasaPages = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  useEffect(() => {
    if (window.innerWidth >= 768) {
      // Hanya berlaku di desktop (md ke atas)
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 50); // Delay dikit biar pastiin efeknya kena
    }
  }, []);

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
            src={bengkelCover}
            alt="bengkelCover"
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
            Web Design
          </p>
          <h1 className="text-4xl font-bold mt-4">
            Mr. Jasa
          </h1>
          <p className="text-gray-600 dark:text-gray-100 text-justify mt-4">
            Mr. Jasa Service is a garage service app featuring service
            selection, booking options, and user accounts.
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
            href="https://www.behance.net/gallery/210773427/MRJasa-Service-UIIX-Mobile-GSM"
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
            MR. Jasa Service Workshop is a trusted service center for all vehicle service needs located in Batam. MR. Jasa Service provides various types of service and also sells various types of car maintenance needs such as oil, spare parts, batteries, etc. MR. Jasa Service was founded in 2024, MR. Jasa Service aims to become an official quality car workshop in Batam.
            </p>

            <h2 className="text-2xl font-bold mt-8">The Problems</h2>
            <p className="text-gray-600 dark:text-gray-100 text-justify mt-4">
            Car owners face issues with transparency and inconsistent branding, causing confusion and mistrust.
            </p>

            <h2 className="text-2xl font-bold mt-8">The Final Solutions</h2>
            <p className="text-gray-600 dark:text-gray-100 text-justify mt-4">
            MR. Jasa Service offers transparent pricing and consistent branding, building trust with car owners.
            </p>
        </motion.div>

        {/* Showcase */}
        <motion.div initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp} className="mt-12">
              <h2 className="text-2xl font-bold">Mockup Overview</h2>
              <img src={slideBengkel1} alt="Mr Jasa Service" className="object-cover rounded-lg max-w-full mt-4" />
              <img src={slideBengkel2} alt="Mr Jasa Service" className="object-cover rounded-lg max-w-full mt-4" />
              <img src={slideBengkel3} alt="Mr Jasa Service" className="object-cover rounded-lg max-w-full mt-4" />
            </motion.div>
      </div>
    </motion.div>
  );
};

export default MrJasaPages;
