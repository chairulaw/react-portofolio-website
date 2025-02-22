import { motion } from "framer-motion";
import { originalProfile } from "../assets/Assets";
import { FaFigma, FaHtml5, FaCss3, FaBootstrap, FaReact } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { SiTailwindcss, SiAdobephotoshop } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram, FaBehance, FaSpotify } from "react-icons/fa";

const About = () => {
  const contactItems = [
    { icon: <FaGithub />, href: "https://github.com/chairulaw" },
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/chairulaw/" },
    { icon: <FaBehance />, href: "https://www.behance.net/chairulaw" },
    { icon: <FaWhatsapp />, href: "https://wa.me/6282371487329" },
    { icon: <FaInstagram />, href: "https://www.instagram.com/chairulaw_/" },
    { icon: <FaSpotify />, href: "https://open.spotify.com/user/h1624rnzwl0v3bw6sjfnbymsh?si=c16f2e948962401e" },
  ];

  const darkMode = [
    {
      background: "bg-gray-900",
      text: "text-white",
      hover: "hover:bg-gray-700",
    }
  ]

  return (
    <div className="flex justify-center items-center p-6 md:p-28">
      {/* Animasi hanya di wrapper utama */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full"
      >
        {/* About Section */}
        <div className="md:col-span-2 cursor-pointer p-4 md:p-6 rounded-2xl dark:bg-gray-900 dark:text-white dark:hover:bg-gray-700 bg-white text-black hover:bg-black hover:text-white ease-in-out duration-300 shadow-lg">
          <h2 className="text-lg md:text-xl font-bold mb-3">About</h2>
          <p className="text-md md:text-md font-normal leading-relaxed">
            Fresh graduate from the Informatics Engineering program at Batam State Polytechnic. Skilled in UI/UX Design and Frontend Web Development. Has one year of experience as a UI/UX Designer intern. Able to work both independently and in a team, diligent in completing tasks, and always strives to deliver the best results in every project undertaken.
          </p>
        </div>

        {/* Profile Image */}
        <div className="flex items-center justify-center">
          <div className="rounded-2xl overflow-hidden w-full h-full shadow-lg dark:bg-gray-900">
            <img
              src={originalProfile}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Tools & Tech Stack */}
        <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Tools Section */}
          <div className="bg-white cursor-pointer dark:bg-gray-900 dark:hover:bg-gray-700 hover:bg-black hover:text-white ease-in-out duration-300 p-4 md:p-6 rounded-xl shadow-xl">
            <h3 className="text-lg md:text-xl font-bold mb-3">Tools</h3>
            <div className="flex gap-4 justify-start">
              <FaFigma className="w-10 h-10 md:w-11 md:h-11" />
              <VscVscode className="w-10 h-10 md:w-11 md:h-11" />
              <SiAdobephotoshop className="w-10 h-10 md:w-11 md:h-11" />
            </div>
          </div>

          {/* Tech Stack Section */}
          <div className="bg-white cursor-pointer dark:bg-gray-900 dark:hover:bg-gray-700 hover:bg-black hover:text-white ease-in-out duration-300 p-4 md:p-6 rounded-xl shadow-xl">
            <h3 className="text-lg md:text-xl font-bold mb-3">Tech Stack</h3>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <div className="flex gap-4 justify-center">
                <FaHtml5 className="w-10 h-10 md:w-14 md:h-14 border-2 rounded-xl p-1 border-white dark:border-gray-600 text-orange-500" />
                <FaCss3 className="w-10 h-10 md:w-14 md:h-14 border-2 rounded-xl p-1 border-white dark:border-gray-600 text-blue-500" />
                <IoLogoJavascript className="w-10 h-10 md:w-14 md:h-14 border-2 rounded-xl p-1 border-white dark:border-gray-600 text-yellow-500" />
              </div>
              <div className="flex gap-4 justify-center">
                <FaBootstrap className="w-10 h-10 md:w-14 md:h-14 border-2 rounded-xl p-1 border-white dark:border-gray-600 text-purple-500" />
                <SiTailwindcss className="w-10 h-10 md:w-14 md:h-14 border-2 rounded-xl p-1 border-white dark:border-gray-600 text-[#06B6D4]" />
                <FaReact className="w-10 h-10 md:w-14 md:h-14 border-2 rounded-xl p-1 border-white dark:border-gray-600 text-cyan-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="md:col-span-2 cursor-pointer dark:bg-gray-900 dark:text-white dark:hover:bg-gray-700 bg-white p-4 md:p-6 rounded-2xl text-black hover:bg-black hover:text-white ease-in-out duration-300 shadow-lg">
          <h2 className="text-lg md:text-xl font-bold mb-3">Experience</h2>
          <div className="mb-3">
            <p className="font-semibold">Chief of The Media Information</p>
            <p className="text-sm">Himpunan Mahasiswa Sistem Informasi (2023 - Current)</p>
          </div>
          <div>
            <p className="font-semibold">Web Development Student</p>
            <p className="text-sm">Infinite Learning Indonesia (September 2024 - December 2024)</p>
          </div>
        </div>

        {/* Education Section */}
        <div className="bg-white dark:bg-gray-900 dark:text-white dark:hover:bg-gray-700 cursor-pointer p-4 md:p-6 rounded-2xl text-black hover:bg-black hover:text-white ease-in-out duration-300 shadow-lg">
          <h2 className="text-lg md:text-xl font-bold mb-3">Education</h2>
          <p className="font-semibold">Information Systems</p>
          <p className="text-sm">Batam Institute of Technology (2022 - current)</p>
        </div>

        {/* Contact Section */}
        <div className="md:col-span-3 rounded-xl dark:bg-gray-900 dark:text-white dark:hover:bg-gray-700 bg-white shadow-xl cursor-pointer text-black hover:bg-black hover:text-white ease-in-out duration-300 flex flex-col justify-center items-center py-4 md:py-6">
          <h2 className="text-lg md:text-xl font-bold mb-3">Contact</h2>
          <div className="flex flex-cols-1 md:flex gap-4 md:gap-6">
            {contactItems.map((item, index) => (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                className="text-3xl md:text-4xl duration-300 hover:-translate-y-2 ease-in-out hover:text-gray-300"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;