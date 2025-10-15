import { motion } from "framer-motion";
import { MdOutlineArrowOutward } from "react-icons/md";
import { himarityCover, slideHimarity1, slideHimarity2, slideHimarity3, slideHimarity4 } from "../assets/Assets";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const HimarityPages = () => {
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
            src={himarityCover}
            alt="Himarity Cover"
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
            Design Graphic
          </p>
          <h1 className="text-4xl font-bold mt-4">
            Himarity Vol 3
          </h1>
          <p className="text-gray-600 dark:text-gray-100 text-justify mt-4">
            Himarity is a charity organization focused on helping those in need through various initiatives and programs.
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
            href="https://www.instagram.com/hima.charity?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
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
            Himarity is a social service event organized by all Student Associations of Batam Institute of Technology as a form of care and contribution to the local community. Through online and offline fundraising, donations were distributed to three orphanages. The event included group activities supported by liaison officers (LOs) and featured interactive programs such as quizzes, bracelet-making, and a “wishing tree” activity for the children. It concluded with a warm and meaningful iftar (breaking of the fast) together with the orphanage children.
            </p>
        </motion.div>

        {/* Showcase */}
        <motion.div initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp} className="mt-12">
              <h2 className="text-2xl font-bold">Design Overview</h2>
              <img src={slideHimarity1} alt="Himarity" className="object-cover rounded-lg max-w-full mt-4" />
              <img src={slideHimarity2} alt="Himarity" className="object-cover rounded-lg max-w-full mt-4" />
              <img src={slideHimarity3} alt="Himarity" className="object-cover rounded-lg max-w-full mt-4" />
              <img src={slideHimarity4} alt="Himarity" className="object-cover rounded-lg max-w-full mt-4" />
            </motion.div>
      </div>
    </motion.div>
  );
};

export default HimarityPages;
