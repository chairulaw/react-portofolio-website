import { FaGithub, FaLinkedin, FaWhatsapp,FaInstagram, FaBehance, FaSpotify  } from "react-icons/fa";

const Footer = () => {

  const footerItems = [
    {
      icon: <FaGithub />,
      href: "https://github.com/chairulaw"
    },
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/chairulaw/"
    },
    {
      icon: <FaBehance />,
      href: "https://www.behance.net/chairulaw"
    },
    {
      icon: <FaWhatsapp />,
      href: "https://wa.me/6282371487329"
    },
    {
      icon: <FaInstagram />,
      href: "https://www.instagram.com/chairulaw_/"
    },
    {
      icon: <FaSpotify />,
      href: "https://open.spotify.com/user/h1624rnzwl0v3bw6sjfnbymsh?si=c16f2e948962401e"
    },
  ]

  return (
    <section className="bg-black text-white flex justify-center items-center py-10 text-4xl ">
      <div className="flex justify-center items-center gap-4">
        {footerItems.map((item, index) => (
          <a href={item.href} target="_blank" rel="noopener noreferrer" key={index} className="hover:scale-125 ease-in-out duration-200 hover:text-gray-300">
            {item.icon}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Footer;