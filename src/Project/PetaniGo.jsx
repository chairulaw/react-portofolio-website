import { motion } from "framer-motion";
import { MdOutlineArrowOutward } from "react-icons/md";
import { petaniGoCover, slidePetaniGo1,slidePetaniGo2,slidePetaniGo3,slidePetaniGo4,slidePetaniGo5 } from "../assets/Assets"; // Sesuaikan dengan path yang benar
import { Link } from "react-router-dom";
import { useEffect } from "react";

const PetaniGo = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } },
      };

      useEffect(() => {
        if (window.innerWidth >= 768) { // Hanya berlaku di desktop (md ke atas)
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
                className="relative inline-flex items-center dark:hover:text-white text-gray-500 dark:group-hover:text-white group-hover:text-black 
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
              <img src={petaniGoCover} alt="Tanda Baca Coffeeshop" className="object-cover max-w-full" />
            </motion.div>
    
            {/* Project Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mt-8"
            >
              <p className="border rounded-full px-4 dark:hover:text-black hover:bg-gray-200 ease-in-out duration-200 cursor-pointer py-1 text-sm inline-block">
                Web Design
              </p>
              <h1 className="text-4xl font-bold mt-4">Petani Go</h1>
              <p className="text-gray-600 dark:text-gray-100 text-justify mt-4">
              During my MSIB Batch 7 at Infinite Learning, my team and I built <b>Petani GO</b>, an AI-powered platform to help farmers boost productivity. Our project ranked <b>Top 3</b> in the Best Collab Website x AI category.</p>
            </motion.div>
    
            {/* Visit Project Button */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mt-8 group"
            >
              <a
                href="https://tani-youth-eight.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center text-blue-500 dark:group-hover:text-white group-hover:text-black 
                  after:content-[' '] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] 
                  dark:after:bg-white after:bg-black after:transition-all after:duration-300 group-hover:after:w-full font-semibold"
              >
                Visit Project <MdOutlineArrowOutward className="w-5 h-5 ml-2" />
              </a>
            </motion.div>
    
            {/* Project Overview */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mt-12"
            >
              <h2 className="text-2xl font-bold">Project Overview</h2>
              <p className="text-gray-600 dark:text-gray-100 text-justify mt-4">
              Petani GO is an agricultural education platform that provides information and insights to help individuals grow in the agricultural sector and contribute to building a better and more sustainable agricultural future.
              </p>
                
              <h3 className="text-2xl font-bold mt-8">The Problems</h3>
              <p className="text-gray-600 dark:text-gray-100 text-justify mt-4">
                An experienced farmer has shifted to rice farming due to age and physical limitations. He needs support in technology and resources to remain productive and competitive.
              </p>

              <h3 className="text-2xl font-bold mt-8">The Final Solutions</h3>
              <p className="text-gray-600 dark:text-gray-100 text-justify mt-4">
              An AI-based digital platform offering interactive education, modern technology training, and discussion and chatbot features to help farmers improve yields and foster an efficient, modern agricultural community.
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
                <li>Express JS</li> {/* Fixed typo */}
                <li>Google Oauth</li> {/* Fixed typo */}
                <li>Watson X</li> {/* Fixed typo */}
              </ul>
            </motion.div>
    
            {/* Features */}
            <motion.div initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp} className="mt-12">
              <h2 className="text-2xl font-bold">Features</h2>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-100 mt-4">
                <li>Tani-Bot (AI Chatbot)</li>
                <li>Plant Disease Detection AI</li>
                <li>User Authentication With Google</li>
              </ul>
            </motion.div>
            </div>
    
            {/* Showcase */}
            <motion.div initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp} className="mt-12">
              <h2 className="text-2xl font-bold">Showcase</h2>
              <img src={slidePetaniGo1} alt="Petani GO" className="object-cover rounded-lg max-w-full mt-4" />
              <img src={slidePetaniGo2} alt="Petani GO" className="object-cover rounded-lg max-w-full mt-4" />
              <img src={slidePetaniGo3} alt="Petani GO" className="object-cover rounded-lg max-w-full mt-4" />
              <img src={slidePetaniGo4} alt="Petani GO" className="object-cover rounded-lg max-w-full mt-4" />
              <img src={slidePetaniGo5} alt="Petani GO" className="object-cover rounded-lg max-w-full mt-4" />
            </motion.div>
          </div>
        </motion.div>
  )
}

export default PetaniGo