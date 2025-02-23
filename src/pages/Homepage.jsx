import {
  originalProfile,
  cvEnglish,
  cvIndo,
} from "../assets/Assets";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaInstagram,
  FaBehance,
  FaSpotify,
} from "react-icons/fa";

const Homepage = () => {
  const contactItems = [
    { icon: <FaGithub />, href: "https://github.com/chairulaw" },
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/chairulaw/" },
    { icon: <FaBehance />, href: "https://www.behance.net/chairulaw" },
    { icon: <FaWhatsapp />, href: "https://wa.me/6282371487329" },
    { icon: <FaInstagram />, href: "https://www.instagram.com/chairulaw_/" },
    { icon: <FaSpotify />, href: "https://open.spotify.com/user/h1624rnzwl0v3bw6sjfnbymsh?si=c16f2e948962401e" },
  ];

  return (
    <div className="flex flex-col items-center justify-center py-12 md:py-48 px-6 md:px-12">
      {/* Container */}
      <div className="flex flex-col-reverse md:flex-row items-center max-w-6xl w-full gap-12">
        {/* Left Section - Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col text-center md:text-left md:w-1/2"
        >
<motion.p 
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 2, ease: "easeOut" }}
  className="text-sm sm:text-lg font-semibold tracking-wide text-gray-700 dark:text-gray-400"
>
  <motion.span
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 2, delay: 0.1, repeat: Infinity, repeatType: "reverse" }}
  >—</motion.span>
  <motion.span
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 2, delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
  > HELLO,</motion.span>
  <motion.span
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 2, delay: 0.7, repeat: Infinity, repeatType: "reverse" }}
  > MY</motion.span>
  <motion.span
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 2, delay: 0.9, repeat: Infinity, repeatType: "reverse" }}
  > NAME</motion.span>
  <motion.span
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 2, delay: 1, repeat: Infinity, repeatType: "reverse" }}
  > IS</motion.span>
</motion.p>

          <h1 className="text-3xl sm:text-5xl font-bold mt-2">Muhammad Chairul Wibisono</h1>
          <p className="mt-4 text-base leading-relaxed">
            An Information Systems student from Institut Teknologi Batam with experience in university and personal projects.
            I have a background as a social media designer and front-end developer.
            Although I do not yet have professional work experience, I am eager to apply my skills and contribute effectively as part of a team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 py-6 items-center justify-center md:justify-start">
            <a
              href={cvIndo}
              className="border-2 border-black font-medium text-sm sm:text-base px-5 py-3 rounded-xl  hover:bg-black dark:border-gray-600 dark:hover:bg-gray-200 dark:bg-gray-900 dark:hover:text-black hover:text-white duration-300 ease-in-out w-full sm:w-auto text-center"
              download="CV Muhammad Chairul Wibisono_Indonesian"
            >
              Indonesian CV
            </a>
            <a
              href={cvEnglish}
              className="border-2 border-black font-medium text-sm sm:text-base px-5 py-3 rounded-xl  hover:bg-black dark:border-gray-600 dark:hover:bg-gray-200 dark:bg-gray-900 dark:hover:text-black hover:text-white duration-300 ease-in-out w-full sm:w-auto text-center"
              download="CV Muhammad Chairul Wibisono_English"
            >
              English CV
            </a>
          </div>
          <div className="flex justify-center md:justify-start gap-4 mb-5 text-4xl">
            {contactItems.map((item, index) => (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                className="hover:-translate-y-2 transition-transform ease-in-out text-gray-700 dark:hover:text-gray-400 hover:text-black"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right Section - Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 flex justify-center"
        >
          <div className="rounded-2xl drop-shadow-2xl max-w-xs sm:max-w-md md:max-w-lg">
            <img
              src={originalProfile}
              alt="Muhammad Chairul Wibisono"
              className="rounded-2xl max-w-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Homepage;