import skylineImg from "./assets/skyline.png";
import earthianImg from "./assets/earthian.png";
import todoImg from "./assets/todo.png";
import profileImg from "./assets/profile.png";
import weatherImg from "./assets/weather.png";
import resumePdf from "./assets/NikitaGavhale-Frontend-Developer.pdf";
import ChatBot from "./components/Chatbot";
import WorkExperience from "./components/WorkExperience"; // ✅ imported here
import {
  FaDownload,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

export default function PortfolioWebsite() {
  const projects = [
    {
      title: "Skyline Pharma Systems",
      description:
        "Professional business website developed using PHP, HTML, CSS, and responsive frontend design.",
      tech: ["PHP", "HTML", "CSS", "MySQL"],
      github: "#",
      demo: "https://skylinepharmasystems.com/",
      image: skylineImg,
    },
    {
      title: "Earthian Art Foundation",
      description:
        "Responsive foundation website built using PHP, HTML, CSS, and modern UI structure.",
      tech: ["PHP", "HTML", "CSS", "MySQL"],
      github: "#",
      demo: "https://earthianartfoundation.com/",
      image: earthianImg,
    },
    // {
    //   title: "Todo App",
    //   description:
    //     "A modern Todo App built using React, Vite, and Tailwind CSS with local storage support.",
    //   tech: ["React", "Tailwind", "Vite"],
    //   github: "https://github.com/nikitagavhale97-prog/Todo-App",
    //   demo: "https://todo-app-new-tawny.vercel.app/",
    //   image: todoImg,
    // },
    // {
    //   title: "Weather App",
    //   description:
    //     "A modern weather application built with React and Tailwind CSS that fetches real-time weather data using OpenWeather API.",
    //   tech: ["React", "Tailwind", "API", "Vite"],
    //   github: "https://github.com/nikitagavhale97-prog/weather-app",
    //   demo: "https://weather-app-kappa-rust-33.vercel.app/",
    //   image: weatherImg,
    // },
  ];

  const skills = [
    "HTML", "CSS", "JavaScript", "React JS",
    "Tailwind CSS", "Git", "GitHub", "JIRA",
    "PHP", "MySQL", "CMS Development",
  ];

  return (
    <div className="bg-[rgba(65,47,144,0.93)] text-white min-h-screen overflow-x-hidden">

      {/* Background Glow */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[rgba(255,255,255,0.10)] blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[rgba(255,255,255,0.08)] blur-3xl rounded-full" />
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full backdrop-blur-xl bg-black/20 border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-gray-200 text-transparent bg-clip-text">
            Nikita Gavhale - Portfolio
          </h1>
          <div className="hidden md:flex gap-8 text-sm text-white/90">
            <a href="#home"       className="hover:text-white transition">Home</a>
            <a href="#about"      className="hover:text-cyan-400 transition">About</a>
            <a href="#skills"     className="hover:text-cyan-400 transition">Skills</a>
            <a href="#experience" className="hover:text-cyan-400 transition">Experience</a>
            <a href="#projects"   className="hover:text-cyan-400 transition">Projects</a>
            <a href="#contact"    className="hover:text-cyan-400 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
            Code. Learn. Build.
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
            Repeat.
              </span>
            </h1>
            <p className="text-gray-200 text-lg leading-relaxed mb-10 max-w-xl">
              Frontend/UI Developer with 6+ years of experience in building
              responsive and user-friendly web applications. Skilled in ReactJS,
              JavaScript, HTML5, CSS3, CMS development, and converting Figma
              designs into pixel-perfect interfaces. Experienced in Agile
              environments using JIRA, Git, and cross-functional collaboration.
              Passionate about creating clean, responsive, and scalable UI solutions.
            </p>
            <div className="flex flex-wrap gap-5">
              <a href="#experience" className="bg-gradient-to-r from-white/20 to-white/10 px-7 py-4 rounded-2xl font-semibold shadow-lg hover:scale-105 transition">
                View Experience
              </a>
              <a href="https://github.com/nikitagavhale97-prog" target="_blank" className="border border-white/10 bg-white/5 hover:bg-white/10 px-7 py-4 rounded-2xl transition">
                GitHub
              </a>
            </div>
          </div>

          {/* Right Card */}
          <div className="relative flex justify-center">
            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[40px] p-8 shadow-2xl max-w-md w-full">
              <div className="flex justify-center mb-6">
                <img src={profileImg} alt="Profile" className="w-52 h-52 object-top object-cover rounded-full border-4 border-white/20 shadow-2xl" />
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold mb-2">Nikita Gavhale</h3>
                <p className="text-white/70 mb-2">Frontend/UI Developer</p>
              </div>
              <div className="flex items-center justify-center mt-4">
                <div className="flex items-center gap-1 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-400/20 text-white text-sm font-medium backdrop-blur-sm mb-4">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Open to Work
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center">
                  <h4 className="text-3xl font-bold text-white">6+</h4>
                  <p className="text-white/70 mt-2">Years Experience</p>
                </div>
                <a
  href={resumePdf}
  download
  onClick={() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "resume_download",
      file_name: "Nikita_Gavhale_CV.pdf",
    });
  }}
  className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-center justify-center gap-3 hover:bg-white/10 hover:scale-105 transition duration-300">
  <h4 className="text-1xl font-bold text-white">Download CV</h4>
  <FaDownload className="text-xl text-cyan-400" />
</a>
              </div>
              <div className="flex items-center justify-center gap-5 mt-6 mb-4">
                <a href="https://github.com/nikitagavhale97-prog" target="_blank" rel="noopener noreferrer" className="bg-white/5 border border-white/10 p-4 rounded-full hover:bg-white/10 hover:scale-110 transition duration-300">
                  <FaGithub className="text-2xl text-white" />
                </a>
                <a href="https://www.linkedin.com/in/nikita-gavhale-b7011217b" target="_blank" rel="noopener noreferrer" className="bg-white/5 border border-white/10 p-4 rounded-full hover:bg-white/10 hover:scale-110 transition duration-300">
                  <FaLinkedin className="text-2xl text-cyan-400" />
                </a>
                <a href="https://www.instagram.com/nikitagavhale97/" target="_blank" rel="noopener noreferrer" className="bg-white/5 border border-white/10 p-4 rounded-full hover:bg-white/10 hover:scale-110 transition duration-300">
                  <FaInstagram className="text-2xl text-pink-400" />
                </a>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <p className="text-white/80 leading-relaxed text-center">
                  Experienced in HTML, CSS, JavaScript, PHP, MySQL, ReactJS,
                  responsive UI development, CMS development, and converting
                  Figma designs into modern interfaces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section id="about" className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[40px] p-10 md:p-16 shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">About Me</h2>
            <p className="text-white/90 text-lg leading-relaxed max-w-4xl">
  I am a frontend developer with strong hands-on experience in HTML, CSS, 
  JavaScript, and CMS development. I love crafting responsive, clean, and 
  user-friendly web interfaces and have delivered real-world projects across 
  various domains. I am currently levelling up my skills in React JS and 
  Tailwind CSS, actively building projects to strengthen my modern frontend 
  development knowledge. Always eager to learn, grow, and take on new challenges.
</p>
          </div>
        </div>
      </section>

      {/* ── Skills ── */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white/5 border border-white/10 rounded-3xl py-8 text-center hover:-translate-y-2 hover:border-white/40 transition duration-300 shadow-xl">
                <p className="font-semibold text-lg">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Work Experience (separate component) ── */}
      <WorkExperience />

      {/* ── Projects ── */}
      <section id="projects" className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Projects</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <div key={index} className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[32px] p-8 shadow-2xl hover:-translate-y-2 hover:border-white/40 transition duration-300">
                <div className="h-52 rounded-3xl overflow-hidden border border-white/10 mb-8 bg-white/5">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover hover:scale-105 transition duration-500" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
                <p className="text-gray-200 leading-relaxed mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tech.map((item, idx) => (
                    <span key={idx} className="bg-white/10 border border-white/20 text-white px-4 py-2 rounded-full text-sm">{item}</span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.github} target="_blank" className="bg-gradient-to-r from-white/20 to-white/10 px-5 py-3 rounded-2xl font-medium hover:scale-105 transition">GitHub</a>
                  <a href={project.demo} target="_blank" className="border border-white/10 bg-white/5 px-5 py-3 rounded-2xl hover:bg-white/10 transition">Live Demo</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-white/10 rounded-[40px] p-12 text-center backdrop-blur-xl shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Work Together 🚀</h2>
            <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              I am currently open to frontend developer and React JS opportunities. Let's build something amazing together.
            </p>
            <div className="flex flex-wrap justify-center gap-5">
              <a href="mailto:nikitagavhale97@gmail.com" className="bg-gradient-to-r from-white/20 to-white/10 px-7 py-4 rounded-2xl font-semibold hover:scale-105 transition">Email Me</a>
              <a href="https://github.com/nikitagavhale97-prog" target="_blank" className="border border-white/10 bg-white/5 px-7 py-4 rounded-2xl hover:bg-white/10 transition">GitHub Profile</a>
            </div>
          </div>
        </div>
      </section>

      <ChatBot />

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-white/60 text-sm">
        © 2026 Nikita Gavhale. All rights reserved.
      </footer>

    </div>
  );
}