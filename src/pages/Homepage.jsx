import {
  bengkelCover,
  disneyCloneCover,
  hmsiProjectCover,
  petaniGoCover,
  originalProfile,
  technofestCover,
  technoshiftCover,
  webCoffeeShopCover,
  cvEnglish,
  cvIndo
} from "../assets/Assets";
import { FaFigma} from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { SiAdobephotoshop } from "react-icons/si";

const Homepage = () => {

  const skillsItems = [
    {title : "EDUCATION",
      content : [
        {text: "2019 - 2022", bold:true},
        {text: "High School Graduate Majoring in Science"},
        {text: "Pondok Pesantren Tahfidz / Madrasah Aliyah Agrowisata Shaleha, Jawa Barat ", bold:false},
        {text: "2022 - current", bold:true},
        {text: "Bachelor of Computer Science"},
        {text: "Institut Teknologi Batam, Kepulauan Riau", bold:false},
      ],
    },
    {title : "EXPERIENCE",
      content : [
        {text: "2023 - current", bold:true},
        {text: "Chief of The Media Information"},
        {text: "Himpunan Mahasiswa Sistem Informasi, Institut Teknologi Batam", bold:false}
      ],
    },
    {title : "TECHNICAL SKILLS",
      content : [ 
        {text: "Figma & Photoshop", bold:true}, 
        {text: "Web Design, Instagram Post, Poster, UI/UX"},
        {text: "Web Programming", bold:true},
        {text: "HTML, CSS, Bootstrap, MySQL"},
      ],
    },
    {title : "LANGUAGES",
      content : [
        {text: "English (intermediate)", bold:false},
        {text: "Bahasa Indonesia"},
      ],
    },
    {title : "TOOLS",
        icons: [<FaFigma key="figma" className="w-10 h-10"/>, 
        <VscVscode key="vscode" className="w-10 h-10"/>, 
        <SiAdobephotoshop key="photoshop" className="w-10 h-10"/>
      ]
    },
  ];

  const projectItems = [
  {
    href: "https://www.behance.net/gallery/211471711/Technofest-PhotographyPortofolio",
    cover: technofestCover,
    title: "TECHNOFEST 2023",
    description: "Technofest event is being held at the Institute Teknologi Batam. I have joined as a member of the publication and event documentation division."
  },
  {
    href: "https://project-web-chairulaw.vercel.app/",
    cover: webCoffeeShopCover,
    title: "TANDA BACA COFFEESHOP",
    description: "This is the final semester project from my campus that I worked on with a team."
  },  
  {
    href: "https://www.instagram.com/hmsi.iteba",
    cover: hmsiProjectCover,
    title: "HMSI INSTAGRAM DESIGNER",
    description: "Himpunan Mahasiswa Sistem Informasi of Institut Teknologi Batam. I hold the position of Head of Media Information Division."
  },
  {
    href: "https://www.instagram.com/technofest.iteba",
    cover: technoshiftCover,
    title: "TECHNOSHIFT 2024",
    description: "Technoshift event is being held at the Institute Teknologi Batam. I have joined as a member of the publication and event documentation division."
  },
  {
    href: "https://www.behance.net/gallery/210773427/MRJasa-Service-UIIX-Mobile-GSM",
    cover: bengkelCover,
    title: "UI/UX Bengkel",
    description: "Mr. Jasa Service is a group project for a garage service app in the user's fifth semester, featuring service selection, booking options, and user accounts."
  },
  {
    href: "https://tani-youth-eight.vercel.app/",
    cover: petaniGoCover,
    title: "PETANI GO WEBSITE",
    description: "As part of my MSIB Batch 7 journey at Infinite Learning, my team and I developed Petani GO, a platform to help farmers overcome challenges and improve productivity."
  },
  {
    href: "https://react-disney-clone-by-chairulaw.vercel.app/",
    cover: disneyCloneCover,
    title: "DISNEY+ CLONE WEBSITE",
    description: "Just a side project I worked on to revisit my ReactJS and Tailwind CSS skills. I also used the API from themoviedb.org to fetch movie data, allowing users to browse, search, and view details of various films."
  },
  ];

  return (
    <div>
      {/* FIRST SECTION */}
      <section id="home" className="flex items-center justify-center min-h-screen sm:-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl w-full">
          {/* Left Section - Text */}
          <div className="flex flex-col pt-32 justify-center text-center md:text-left md:pt-0">
            <p className="text-lg font-semibold tracking-wide text-black">
              — HELLO MY NAME IS
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-black ">
              Muhammad Chairul Wibisono
            </h1>
            <p className="mt-4 leading-relaxed text-black">
              An Information Systems student from Institut Teknologi Batam with
              experience in university and personal projects. I have a
              background as a social media designer and front-end developer.
              Although I do not yet have professional work experience, I am
              eager to apply my skills and contribute effectively as part of a
              team.
            </p>
          </div>

          {/* Right Section - Image */}
          <div className="flex items-center justify-center">
            <div className="rounded-2xl p-2 w-full max-w-sm md:max-w-md">
              <img
                src={originalProfile}
                alt="Muhammad Chairul Wibisono"
                className="rounded-2xl drop-shadow-2xl shadow-inherit w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Education & Skills Section */}
      <section id="skills" className="flex flex-col items-center py-10 px-6 bg-white">
        <h2 className="text-3xl font-bold text-black mb-8 text-center">
          Education & Skills
        </h2>
      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
          {skillsItems.map((item, index) => (
            item.icons ? (
              <div className="bg-white shadow-md rounded-2xl p-5 border flex flex-col gap-2 text-black hover:bg-black hover:text-white hover:scale-105 duration-300 ease-in-out mb-1" key={index}>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <div className="flex flex-wrap gap-4">{item.icons}</div>
              </div>
            ) : (
              <div className="bg-white shadow-md rounded-2xl p-5 border text-black hover:bg-black hover:text-white hover:scale-105 duration-300 ease-in-out mb-1" key={index}>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <ul className="pl-2">
                  {item.content.map((content, contentIndex) => (
                    <li key={contentIndex} className={`mb-3 ${content.bold ? "font-semibold" : ""}`}>
                      {content.text}
                    </li>
                  ))}
                </ul>
              </div>
            )
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="flex flex-col items-center py-10 px-6 ">
    <h2 className="text-3xl font-bold text-black mb-8 text-center">
      Projects
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
      {projectItems.map((item, index) => (
        <a
          key={index}
          href={item.href}
          target="_blank"
          className="bg-white shadow-md rounded-2xl p-5 border text-black hover:bg-black hover:text-white hover:scale-105 duration-300 ease-in-out"
        >
          <img
            src={item.cover}
            className="w-full rounded-lg mb-4"
            alt={item.title}
          />
          <h3 className="text-xl font-semibold mb-2">
            {item.title}
          </h3>
          <p className="text-justify">
            {item.description}
          </p>
        </a>
      ))}
    </div>
  </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="flex flex-col items-center py-10 px-6">
  <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-center">
    Get In Touch With Me
  </h2>
  <div className="flex gap-4 py-8 items-center flex-row">
    <a  href={cvIndo} className="mr-4 border font-medium p-3 rounded-xl border-black hover:bg-black hover:text-white hover:scale-105 duration-300 ease-in-out " download={"CV Muhammad Chairul Wibisono_Indonesian"}>Indonesian CV</a>
    <a  href={cvEnglish} className="mr-4 border font-medium p-3 rounded-xl border-black hover:bg-black hover:text-white hover:scale-105 duration-300 ease-in-out" download={"CV Muhammad Chairul Wibisono_English"}>English CV</a>
  </div>
</section>

    </div>
  );
};

export default Homepage;
